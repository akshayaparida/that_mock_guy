import { useExamStore } from '@/store/examStore';
import { MOCK_QUESTIONS } from '@/data/mockQuestions';
import { RotateCcw, Home } from 'lucide-react';
import Link from 'next/link';

export default function ResultScreen() {
  const { score, answers } = useExamStore();
  const totalQuestions = Object.keys(answers).length;
  
  // Calculate Subject-wise performance
  const subjectAnalysis = MOCK_QUESTIONS.reduce((acc, q) => {
    if (!acc[q.subject]) {
      acc[q.subject] = { total: 0, attempted: 0, correct: 0, score: 0 };
    }
    acc[q.subject].total++;
    
    if (answers[q.id] !== undefined) {
      acc[q.subject].attempted++;
      if (answers[q.id] === q.correctAnswer) {
        acc[q.subject].correct++;
        acc[q.subject].score += 4;
      } else {
        acc[q.subject].score -= 1;
      }
    }
    return acc;
  }, {} as Record<string, { total: number; attempted: number; correct: number; score: number }>);

  return (
    <div className="h-full flex flex-col items-center justify-center bg-gray-50 p-6 overflow-y-auto">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full text-center space-y-6 my-auto">
        
        <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Exam Summary</h2>
             <div className="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center text-4xl font-bold text-blue-600 mb-4">
              {score}
            </div>
            <p className="text-gray-500">Total Score (Max {MOCK_QUESTIONS.length * 4})</p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-left bg-gray-50 p-4 rounded-xl">
           <div>
             <span className="text-xs text-gray-500 uppercase tracking-wider">Attempted</span>
             <p className="text-xl font-bold text-gray-900">{totalQuestions} / {MOCK_QUESTIONS.length}</p>
           </div>
           <div>
             <span className="text-xs text-gray-500 uppercase tracking-wider">Accuracy</span>
             <p className="text-xl font-bold text-gray-900">
               {totalQuestions > 0 ? Math.round((Object.values(subjectAnalysis).reduce((a, b) => a + b.correct, 0) / totalQuestions) * 100) : 0}%
             </p>
           </div>
        </div>

        <div className="text-left w-full">
            <h3 className="font-bold text-gray-800 mb-3">Topic-wise Breakdown</h3>
            <div className="space-y-3">
                {Object.entries(subjectAnalysis).map(([subject, data]) => (
                    <div key={subject} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <div>
                            <p className="font-semibold text-gray-700">{subject}</p>
                            <p className="text-xs text-gray-500">
                                {data.attempted}/{data.total} attempted • {data.correct} correct
                            </p>
                        </div>
                        <div className={`font-bold ${data.score >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                            {data.score > 0 ? '+' : ''}{data.score}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-100">
          <button 
             onClick={() => window.location.reload()} 
             className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center gap-2"
          >
             <RotateCcw size={18} /> Retry
          </button>
          <Link href="/" className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 flex items-center justify-center gap-2">
            <Home size={18} /> Home
          </Link>
        </div>
      </div>
    </div>
  );
}
