import { useState, useEffect } from 'react';
import { useExamStore } from '@/store/examStore';
import { MOCK_QUESTIONS } from '@/data/mockQuestions';
import { StickyNote } from 'lucide-react';

const NotesPanel = () => {
  const { currentQuestionIndex, notes, addNote, getNote } = useExamStore();
  const currentQuestion = MOCK_QUESTIONS[currentQuestionIndex];
  const [noteText, setNoteText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  
  // Load existing note when question changes
  useEffect(() => {
    const existingNote = getNote(currentQuestion.id);
    if (existingNote) {
      setNoteText(existingNote);
    } else {
      setNoteText('');
    }
    setIsEditing(false);
  }, [currentQuestionIndex, getNote, currentQuestion.id]);
  
  const handleSaveNote = () => {
    addNote(currentQuestion.id, noteText);
    setIsEditing(false);
  };
  
  return (
    <div className="p-4 border-b border-gray-300 bg-gray-50">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-700 flex items-center gap-2">
          <StickyNote size={16} />
          Notes
        </h3>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            Question {currentQuestionIndex + 1}
          </span>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {currentQuestion.subject}
          </span>
        </div>
        
        {!isEditing ? (
          <div className="min-h-[80px] p-3 bg-white border border-gray-200 rounded-lg">
            {noteText ? (
              <p className="text-gray-700 whitespace-pre-line">{noteText}</p>
            ) : (
              <p className="text-gray-400 italic">No notes yet. Click &quot;Add Note&quot; to start.</p>
            )}
          </div>
        ) : (
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            className="w-full min-h-[80px] p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your notes here..."
            aria-label="Notes for current question"
          />
        )}
        
        <div className="flex gap-2">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-2 bg-blue-100 text-blue-700 rounded text-sm font-medium hover:bg-blue-200 transition-colors"
            >
              {noteText ? 'Edit Note' : 'Add Note'}
            </button>
          ) : (
            <>
              <button
                onClick={handleSaveNote}
                className="px-3 py-2 bg-green-600 text-white rounded text-sm font-medium hover:bg-green-700 transition-colors"
              >
                Save Note
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setNoteText(getNote(currentQuestion.id) || '');
                }}
                className="px-3 py-2 bg-gray-200 text-gray-700 rounded text-sm font-medium hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesPanel;