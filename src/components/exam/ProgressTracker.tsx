import { useExamStore } from '@/store/examStore';
import { MOCK_QUESTIONS } from '@/data/mockQuestions';
import { motion } from 'framer-motion';

const ProgressTracker = () => {
  const { answers, status, mode } = useExamStore();
  
  // Calculate stats
  const totalQuestions = MOCK_QUESTIONS.length;
  const answeredCount = Object.keys(answers).length;
  const markedForReviewCount = Object.values(status).filter(s => 
    s === 'marked' || s === 'answered_marked'
  ).length;
  const correctAnswers = MOCK_QUESTIONS.filter(q => answers[q.id] === q.correctAnswer).length;
  const incorrectAnswers = Object.values(answers).filter((answer, idx) => 
    answers[MOCK_QUESTIONS[idx]?.id] !== undefined && 
    answers[MOCK_QUESTIONS[idx]?.id] !== MOCK_QUESTIONS[idx]?.correctAnswer
  ).length;
  
  const accuracy = answeredCount > 0 ? Math.round((correctAnswers / answeredCount) * 100) : 0;
  
  // Calculate progress percentage
  const progressPercentage = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="font-bold text-gray-800 mb-3">Progress Tracker</h3>
      
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Overall Progress</span>
            <span className="font-medium">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              className="bg-blue-600 h-2 rounded-full" 
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
            <p className="text-xs text-blue-600">Answered</p>
            <p className="font-bold text-blue-800">{answeredCount}<span className="text-gray-500 text-sm">/{totalQuestions}</span></p>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg border border-green-100">
            <p className="text-xs text-green-600">Correct</p>
            <p className="font-bold text-green-800">{correctAnswers}</p>
          </div>
          
          <div className="bg-red-50 p-3 rounded-lg border border-red-100">
            <p className="text-xs text-red-600">Incorrect</p>
            <p className="font-bold text-red-800">{incorrectAnswers}</p>
          </div>
          
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
            <p className="text-xs text-purple-600">Marked</p>
            <p className="font-bold text-purple-800">{markedForReviewCount}</p>
          </div>
        </div>
        
        <div className="pt-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Accuracy</span>
            <span className={`font-bold ${accuracy >= 70 ? 'text-green-600' : accuracy >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
              {accuracy}%
            </span>
          </div>
        </div>
      </div>
      
      {mode === 'study' && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 italic">
            In study mode, you can review answers immediately after selecting an option.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProgressTracker;