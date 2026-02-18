import { useExamStore, QuestionStatus } from '@/store/examStore';
import { MOCK_QUESTIONS } from '@/data/mockQuestions';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function QuestionPalette() {
  const { currentQuestionIndex, goToQuestion, status } = useExamStore();

  const getStatusClass = (id: number, s: QuestionStatus) => {
    switch (s) {
      case 'answered': return 'bg-green-500 text-white';
      case 'not_answered': return 'bg-red-500 text-white';
      case 'marked': return 'bg-purple-600 text-white';
      case 'answered_marked': return 'bg-purple-600 text-white relative';
      case 'not_visited': default: return 'bg-gray-200 text-black';
    }
  };

  const navigateQuestion = (direction: 'prev' | 'next') => {
    let newIndex = currentQuestionIndex;

    if (direction === 'prev' && currentQuestionIndex > 0) {
      newIndex = currentQuestionIndex - 1;
    } else if (direction === 'next' && currentQuestionIndex < MOCK_QUESTIONS.length - 1) {
      newIndex = currentQuestionIndex + 1;
    }

    goToQuestion(newIndex);
  };

  return (
    <div className="h-full flex flex-col bg-blue-50/50">
      <div className="p-2 bg-blue-100 font-bold text-center border-b border-gray-300 shrink-0">
        Question Palette
      </div>

      <div className="flex-1 overflow-y-auto p-3 min-h-0">
        <div className="grid grid-cols-5 gap-2">
          {MOCK_QUESTIONS.map((q, index) => {
            const qStatus = status[q.id];
            const isCurrent = currentQuestionIndex === index;

            return (
              <button
                key={q.id}
                onClick={() => goToQuestion(index)}
                className={cn(
                  "h-9 w-full flex items-center justify-center text-sm font-semibold border transition-all relative",
                  getStatusClass(q.id, qStatus),
                  isCurrent ? "ring-2 ring-blue-600 ring-offset-1 scale-110" : "border-gray-300",
                  "rounded-md"
                )}
                title={`Question ${index + 1}: ${qStatus.replace('_', ' ')}`}
              >
                {index + 1}
                {qStatus === 'answered_marked' && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-yellow-400 rounded-full border border-white flex items-center justify-center text-[10px] text-black font-bold">!</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="p-2 bg-gray-100 border-t border-gray-300 shrink-0">
        <div className="flex justify-between">
          <button
            onClick={() => navigateQuestion('prev')}
            disabled={currentQuestionIndex === 0}
            className="p-2 rounded-lg bg-white border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 flex items-center gap-1"
          >
            <ChevronLeft size={16} />
            <span className="text-sm">Prev</span>
          </button>

          <div className="flex items-center justify-center px-3 py-2 bg-white border border-gray-300 rounded-lg">
            <span className="text-sm font-medium">
              {currentQuestionIndex + 1} <span className="text-gray-500">/ {MOCK_QUESTIONS.length}</span>
            </span>
          </div>

          <button
            onClick={() => navigateQuestion('next')}
            disabled={currentQuestionIndex === MOCK_QUESTIONS.length - 1}
            className="p-2 rounded-lg bg-white border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 flex items-center gap-1"
          >
            <span className="text-sm">Next</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="p-3 bg-gray-100 border-t border-gray-300 text-xs space-y-1 shrink-0">
        <h4 className="font-bold mb-1">Legend:</h4>
        <div className="grid grid-cols-2 gap-1.5">
           <div className="flex items-center gap-2">
             <div className="w-5 h-5 bg-green-500 text-white flex items-center justify-center text-[10px] rounded-md">1</div>
             <span>Answered</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-5 h-5 bg-red-500 text-white flex items-center justify-center text-[10px] rounded-md">1</div>
             <span>Not Answered</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-5 h-5 bg-gray-200 text-black flex items-center justify-center text-[10px] rounded-md">1</div>
             <span>Not Visited</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-5 h-5 bg-purple-600 text-white flex items-center justify-center text-[10px] rounded-md">1</div>
             <span>Marked</span>
           </div>
           <div className="flex items-center gap-2 col-span-2">
             <div className="w-5 h-5 bg-purple-600 text-white flex items-center justify-center text-[10px] relative rounded-md">1
               <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-yellow-400 rounded-full border border-white"></span>
             </div>
             <span>Answered & Marked</span>
           </div>
        </div>
      </div>
    </div>
  );
}
