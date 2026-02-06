import { useExamStore } from '@/store/examStore';
import { MOCK_QUESTIONS } from '@/data/mockQuestions';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import NotesPanel from './NotesPanel';

export default function QuestionArea() {
  const { currentQuestionIndex, answers, selectOption, mode } = useExamStore();
  const question = MOCK_QUESTIONS[currentQuestionIndex];
  const selectedOption = answers[question.id];

  // In study mode, show immediate feedback after selection
  const [showImmediateFeedback, setShowImmediateFeedback] = useState(false);

  // Reset feedback when question changes
  useEffect(() => {
    setShowImmediateFeedback(false);
  }, [currentQuestionIndex]);

  // Update feedback when answer is selected in study mode
  useEffect(() => {
    if (mode === 'study' && selectedOption !== undefined) {
      setShowImmediateFeedback(true);
    }
  }, [selectedOption, mode]);

  // Get difficulty badge class
  const getDifficultyClass = (difficulty: string | undefined) => {
    switch(difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-white relative">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="overflow-y-auto max-h-40 flex-shrink-0">
          <NotesPanel />
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="text-lg font-medium text-gray-800 mb-6">
            {question.questionText}
          </div>

          <div className="space-y-4">
            {question.options.map((option, idx) => {
              // Study Mode Coloring Logic
              let borderColor = "border-gray-200";
              let bgColor = "";
              let textColor = "text-gray-700";
              let icon = null;

              if (mode === 'study' && showImmediateFeedback) {
                if (idx === question.correctAnswer) {
                  borderColor = "border-green-500 ring-1 ring-green-500";
                  bgColor = "bg-green-50";
                  textColor = "text-green-700";
                  icon = "✓";
                } else if (selectedOption === idx) {
                  borderColor = "border-red-500 ring-1 ring-red-500";
                  bgColor = "bg-red-50";
                  textColor = "text-red-700";
                  icon = "✗";
                } else if (selectedOption === idx && idx === question.correctAnswer) {
                  borderColor = "border-green-500 ring-1 ring-green-500";
                  bgColor = "bg-green-50";
                  textColor = "text-green-700";
                  icon = "✓";
                }
              } else if (selectedOption === idx) {
                borderColor = "border-blue-500 ring-1 ring-blue-500";
                bgColor = "bg-blue-50";
              }

              return (
                <label
                  key={idx}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors",
                    borderColor,
                    bgColor
                  )}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    checked={selectedOption === idx}
                    onChange={() => {
                      selectOption(idx);
                      if (mode === 'study') {
                        setShowImmediateFeedback(true);
                      }
                    }}
                    className="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className={`text-base ${textColor} flex-1`}>{option}</span>
                  {icon && (
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${
                      idx === question.correctAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    }`}>
                      {icon}
                    </span>
                  )}
                </label>
              );
            })}
          </div>

          {mode === 'study' && showImmediateFeedback && (
            <div className="mt-6 p-4 bg-zinc-50 border border-zinc-200 rounded-lg animate-fade-in-up">
              <h4 className="font-bold text-zinc-900 mb-2">Explanation:</h4>
              <p className="text-zinc-700 text-sm leading-relaxed mb-4">
                {question.explanation}
              </p>

              {question.topicTags && question.topicTags.length > 0 && (
                <div className="mb-4">
                  <h5 className="font-semibold text-zinc-800 text-sm mb-1">Topics Covered:</h5>
                  <div className="flex flex-wrap gap-1">
                    {question.topicTags.map((tag, index) => (
                      <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {question.learningResources && question.learningResources.length > 0 && (
                <div>
                  <h5 className="font-semibold text-zinc-800 text-sm mb-2">Learning Resources:</h5>
                  <ul className="space-y-1">
                    {question.learningResources.map((resource, index) => (
                      <li key={index}>
                        <a
                          href={resource}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
                        >
                          Resource {index + 1} <span className="text-xs">(external link)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {mode === 'exam' && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-700 text-sm italic">In exam mode, answers are submitted at the end. Select your answer and navigate to other questions.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
