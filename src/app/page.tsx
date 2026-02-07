'use client';

import Link from "next/link";
import { ArrowRight, BookOpen, BookOpenCheck, Github, AlertCircle } from "lucide-react";
import { useExamStore } from "@/store/examStore";
import { useRouter } from "next/navigation";
import VisitorCounter from "@/components/VisitorCounter";

export default function Home() {
  const router = useRouter();
  const setMode = useExamStore((state) => state.setMode);

  const startExam = (mode: 'exam' | 'study') => {
    setMode(mode);
    router.push('/test');
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans text-zinc-900 selection:bg-zinc-200">
      {/* Header */}
      <header className="px-6 py-6 flex justify-between items-center max-w-5xl mx-auto w-full" role="banner">
       <div className="flex items-center gap-2">
           <h1 className="text-xl font-bold tracking-tight">That Mock Guy</h1>
        </div>
        <VisitorCounter />
      </header>

      <main className="flex-1 flex flex-col items-center px-4 py-12 w-full max-w-5xl mx-auto" role="main">
         {/* Hero Section */}
         <div className="text-center max-w-2xl mb-12 animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-[1.1]" tabIndex={0}>
              Minimalist Mock Exams <br />
              <span className="text-zinc-500">
                For Serious Aspirants
              </span>
            </h1>
            <p className="text-base text-zinc-600 mb-8 leading-relaxed font-light" tabIndex={0}>
              No distractions. Just high-quality questions and a real exam interface.
              Focus on what matters: your preparation.
            </p>
         </div>

         {/* Exams Grid */}
         <div className="w-full flex justify-center">
            {/* Active Exam Card */}
            <div className="group relative bg-white rounded-xl p-8 border border-zinc-200 shadow-sm hover:border-zinc-400 transition-all duration-300 max-w-md w-full" role="article" aria-labelledby="exam-title">
               <div className="flex justify-between items-start mb-6">
                  <div className="h-10 w-10 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-900" aria-hidden="true">
                      <BookOpen size={20} />
                  </div>
                  <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider" aria-label="Status: Live">Live</span>
               </div>
               
               <h3 id="exam-title" className="text-lg font-bold mb-2">CUET PG CS 2026</h3>
               <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                 Strict NTA pattern simulation. Core subjects covered.
               </p>
               
               <div className="flex flex-col gap-3">
                 <button
                   onClick={() => startExam('exam')}
                   className="inline-flex items-center gap-2 text-sm font-semibold border-b border-black pb-0.5 hover:gap-4 transition-all text-left w-fit focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded"
                   aria-label="Start timed mock exam"
                 >
                   Start Mock Exam <ArrowRight size={16} />
                 </button>
                 <button
                   onClick={() => startExam('study')}
                   className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-black transition-colors text-left w-fit group/study focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded"
                   aria-label="Start untimed practice mode with explanations"
                 >
                   <BookOpenCheck size={16} /> Practice Mode <span className="opacity-0 group-hover/study:opacity-100 transition-opacity text-xs bg-zinc-100 px-1 rounded">Untimed + Explanations</span>
                 </button>
               </div>
            </div>
         </div>
      </main>
      
      <footer className="py-8 border-t border-zinc-200 mt-12 bg-white" role="contentinfo">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
          <span>© 2026 That Mock Guy. Focused prep.</span>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/akshayaparida/that_mock_guy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-black transition-colors"
            >
              <Github size={14} /> Source Code
            </a>
            <a 
              href="https://github.com/akshayaparida/that_mock_guy/issues/new" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-red-600 transition-colors"
            >
              <AlertCircle size={14} /> Report an Error
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
