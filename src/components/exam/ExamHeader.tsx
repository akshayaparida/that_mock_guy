import Timer from './Timer';
import { UserCircle } from 'lucide-react';

export default function ExamHeader() {
  return (
    <div className="h-16 bg-white border-b border-gray-300 flex justify-between items-center px-6 shrink-0 shadow-sm relative z-10">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
          CUET PG CS 2026 Mock
        </h1>
      </div>
      
      <div className="absolute left-1/2 -translate-x-1/2">
        <Timer />
      </div>

      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className="font-bold text-sm text-gray-800">Candidate Name</span>
          <span className="text-xs text-gray-500">Roll No: 2026001</span>
        </div>
        <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
          <UserCircle size={32} />
        </div>
      </div>
    </div>
  );
}
