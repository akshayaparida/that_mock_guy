import { useEffect } from 'react';
import { useExamStore } from '@/store/examStore';
import { Clock } from 'lucide-react';

export default function Timer() {
  const { timeLeft, tickTimer } = useExamStore();

  useEffect(() => {
    const timer = setInterval(() => {
      tickTimer();
    }, 1000);
    return () => clearInterval(timer);
  }, [tickTimer]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded font-mono text-xl">
      {useExamStore(s => s.mode) === 'study' ? (
        <span className="text-sm font-sans font-bold uppercase tracking-wider">Practice Mode</span>
      ) : (
        <>
          <Clock size={20} className="text-white" />
          <span>{formatTime(timeLeft)}</span>
        </>
      )}
    </div>
  );
}
