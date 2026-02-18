'use client';

import { useExamStore } from '@/store/examStore';
import ExamHeader from './ExamHeader';
import QuestionArea from './QuestionArea';
import QuestionPalette from './QuestionPalette';
import ControlPanel from './ControlPanel';
import ResultScreen from './ResultScreen';
import ProgressTracker from './ProgressTracker';

export default function ExamInterface() {
  const { isSubmitted } = useExamStore();

  if (isSubmitted) {
    return <ResultScreen />;
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      <ExamHeader />

      <div className="flex-1 flex overflow-hidden">
        {/* Left Side: Question Area (75% width on desktop) */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 overflow-hidden">
            <QuestionArea />
          </div>
          <ControlPanel />
        </div>

        {/* Right Side: Progress Tracker + Question Palette */}
        <div className="w-[350px] shrink-0 border-l border-gray-300 h-full flex flex-col overflow-hidden">
          <div className="shrink-0 border-b border-gray-300">
            <ProgressTracker />
          </div>
          <div className="flex-1 overflow-hidden">
            <QuestionPalette />
          </div>
        </div>
      </div>
    </div>
  );
}
