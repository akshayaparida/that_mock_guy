'use client';

import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const hasVisited = localStorage.getItem('has_visited_mock_guy');
        let res;

        if (!hasVisited) {
          // New visitor: Increment count
          res = await fetch('/api/visitor-count', { method: 'POST' });
          if (res.ok) {
            localStorage.setItem('has_visited_mock_guy', 'true');
          }
        } else {
          // Returning visitor: Just get count
          res = await fetch('/api/visitor-count');
        }

        if (res.ok) {
          const data = await res.json();
          setCount(data.count);
        }
      } catch (error) {
        console.error("Failed to fetch visitor count", error);
      }
    }

    fetchCount();
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-100 px-2 py-1 rounded-full border border-zinc-200">
      <Users size={12} />
      <span>{count.toLocaleString()} unique aspirants</span>
    </div>
  );
}
