import { create } from 'zustand';
import { MOCK_QUESTIONS, Question } from '@/data/mockQuestions';

export type QuestionStatus = 'not_visited' | 'not_answered' | 'answered' | 'marked' | 'answered_marked';

export type ExamState = {
  currentQuestionIndex: number;
  answers: Record<number, number>; // questionId -> optionIndex
  status: Record<number, QuestionStatus>; // questionId -> status
  timeLeft: number; // in seconds (e.g., 105 mins = 6300 secs)
  isSubmitted: boolean;
  score: number;
  mode: 'exam' | 'study';
  bookmarks: number[]; // Array of question IDs that are bookmarked
  notes: Record<number, string>; // questionId -> note text

  // Actions
  setMode: (mode: 'exam' | 'study') => void;
  goToQuestion: (index: number) => void;
  selectOption: (optionIndex: number) => void;
  saveAndNext: () => void;
  markForReview: () => void;
  clearResponse: () => void;
  submitExam: () => void;
  tickTimer: () => void;
  toggleBookmark: (questionId: number) => void;
  addNote: (questionId: number, note: string) => void;
  getNote: (questionId: number) => string | undefined;
};

// Initial setup
const INITIAL_TIME = 105 * 60; // 105 minutes

export const useExamStore = create<ExamState>((set, get) => ({
  currentQuestionIndex: 0,
  answers: {},
  status: MOCK_QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: 'not_visited' }), {} as Record<number, QuestionStatus>),
  timeLeft: INITIAL_TIME,
  isSubmitted: false,
  score: 0,
  mode: 'exam',
  bookmarks: [],
  notes: {},

  setMode: (mode) => set({ mode }),

  goToQuestion: (index) => {
    const { currentQuestionIndex, status } = get();
    // Mark current as not answered if leaving without answering and it was not visited
    const currentQId = MOCK_QUESTIONS[currentQuestionIndex].id;
    const currentStatus = status[currentQId];

    let newStatus = { ...status };
    if (currentStatus === 'not_visited') {
       newStatus[currentQId] = 'not_answered';
    }

    set({ currentQuestionIndex: index, status: newStatus });
  },

  selectOption: (optionIndex) => {
    const { currentQuestionIndex, answers } = get();
    const currentQId = MOCK_QUESTIONS[currentQuestionIndex].id;
    set({
      answers: { ...answers, [currentQId]: optionIndex }
    });
  },

  saveAndNext: () => {
    const { currentQuestionIndex, status, answers } = get();
    const currentQId = MOCK_QUESTIONS[currentQuestionIndex].id;
    const hasAnswer = answers[currentQId] !== undefined;

    const newStatus = { ...status };
    if (hasAnswer) {
      newStatus[currentQId] = 'answered';
    } else {
      newStatus[currentQId] = 'not_answered';
    }

    const nextIndex = currentQuestionIndex < MOCK_QUESTIONS.length - 1 ? currentQuestionIndex + 1 : currentQuestionIndex;

    set({
      status: newStatus,
      currentQuestionIndex: nextIndex
    });
  },

  markForReview: () => {
    const { currentQuestionIndex, status, answers } = get();
    const currentQId = MOCK_QUESTIONS[currentQuestionIndex].id;
    const hasAnswer = answers[currentQId] !== undefined;

    const newStatus = { ...status };
    if (hasAnswer) {
      newStatus[currentQId] = 'answered_marked';
    } else {
      newStatus[currentQId] = 'marked';
    }

    const nextIndex = currentQuestionIndex < MOCK_QUESTIONS.length - 1 ? currentQuestionIndex + 1 : currentQuestionIndex;

    set({
      status: newStatus,
      currentQuestionIndex: nextIndex
    });
  },

  clearResponse: () => {
    const { currentQuestionIndex, answers } = get();
    const currentQId = MOCK_QUESTIONS[currentQuestionIndex].id;
    const newAnswers = { ...answers };
    delete newAnswers[currentQId];
    set({ answers: newAnswers });
  },

  submitExam: () => {
    const { answers } = get();
    let score = 0;
    MOCK_QUESTIONS.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
         score += 4; // Assuming +4 for correct
      } else if (answers[q.id] !== undefined) {
         score -= 1; // Assuming -1 for wrong
      }
    });
    set({ isSubmitted: true, score });
  },

  tickTimer: () => {
    const { timeLeft, submitExam, mode } = get();
    if (mode === 'study') return;
    if (timeLeft <= 0) {
      submitExam();
      return;
    }
    set({ timeLeft: timeLeft - 1 });
  },

  toggleBookmark: (questionId: number) => {
    set(state => {
      const newBookmarks = [...state.bookmarks];
      const index = newBookmarks.indexOf(questionId);

      if (index >= 0) {
        newBookmarks.splice(index, 1); // Remove bookmark
      } else {
        newBookmarks.push(questionId); // Add bookmark
      }

      return { bookmarks: newBookmarks };
    });
  },

  addNote: (questionId: number, note: string) => {
    set(state => ({
      notes: {
        ...state.notes,
        [questionId]: note
      }
    }));
  },

  getNote: (questionId: number) => {
    const { notes } = get();
    return notes[questionId];
  }
}));
