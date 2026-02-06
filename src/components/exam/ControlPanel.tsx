import { useExamStore } from '@/store/examStore';
import { ChevronLeft, ChevronRight, Save, Eraser, Bookmark } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MOCK_QUESTIONS } from '@/data/mockQuestions';

export default function ControlPanel() {
  const { 
    currentQuestionIndex, 
    goToQuestion, 
    saveAndNext, 
    markForReview, 
    clearResponse, 
    submitExam 
  } = useExamStore();

  const isFirst = currentQuestionIndex === 0;
  const isLast = currentQuestionIndex === MOCK_QUESTIONS.length - 1;

  return (
    <div className="h-16 border-t border-gray-300 bg-white flex items-center justify-between px-6 shrink-0">
       <div className="flex gap-2">
         <button 
           onClick={clearResponse}
           className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 flex items-center gap-2 font-medium"
         >
           <Eraser size={18} /> Clear Response
         </button>
         <button 
           onClick={markForReview}
           className="px-4 py-2 border border-purple-600 text-purple-700 rounded hover:bg-purple-50 flex items-center gap-2 font-medium"
         >
           <Bookmark size={18} /> Mark for Review & Next
         </button>
       </div>

       <div className="flex gap-2">
          <button
            disabled={isFirst}
            onClick={() => goToQuestion(currentQuestionIndex - 1)}
            className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 font-medium"
          >
            <ChevronLeft size={18} /> Previous
          </button>
          
          <button
            onClick={saveAndNext}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-2 font-bold shadow-sm"
          >
            {isLast ? "Save & Submit" : "Save & Next"} <ChevronRight size={18} />
          </button>
       </div>
    </div>
  );
}
