export type Question = {
  id: number;
  questionText: string;
  options: string[];
  correctAnswer: number; // 0-3 index
  subject: string;
  explanation: string;
  learningResources?: string[]; // Links to learning resources
  difficulty?: 'easy' | 'medium' | 'hard';
  topicTags?: string[]; // Additional topic tags
};

export const MOCK_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Data Structures",
    questionText: "Which data structure is best suited for implementing a LIFO (Last In First Out) system?",
    options: [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    correctAnswer: 1,
    explanation: "A Stack follows the LIFO (Last In First Out) principle, where the last element added is the first one to be removed. Queues are FIFO, Linked Lists are linear but flexible, and Trees are hierarchical.",
    learningResources: [
      "https://www.geeksforgeeks.org/stack-data-structure/",
      "https://www.programiz.com/dsa/stack",
      "https://www.tutorialspoint.com/data_structures_algorithms/stack_algorithm.htm"
    ],
    difficulty: 'easy',
    topicTags: ['Stacks', 'LIFO', 'Data Structures']
  },
  {
    id: 2,
    subject: "Algorithms",
    questionText: "What is the time complexity of binary search on a sorted array of size n?",
    options: [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    correctAnswer: 2,
    explanation: "Binary search divides the search interval in half essentially at every step. Thus, the time complexity is logarithmic, denoted as O(log n). O(n) is for linear search.",
    learningResources: [
      "https://www.geeksforgeeks.org/binary-search/",
      "https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search",
      "https://www.programiz.com/dsa/binary-search"
    ],
    difficulty: 'easy',
    topicTags: ['Binary Search', 'Time Complexity', 'Algorithms']
  },
  {
    id: 3,
    subject: "Operating Systems",
    questionText: "Which of the following is NOT a valid state of a process in an Operating System?",
    options: [
      "Running",
      "Ready",
      "Blocked",
      "Deleted"
    ],
    correctAnswer: 3,
    explanation: "The standard process states are New, Ready, Running, Blocked (Waiting), and Terminated. 'Deleted' is not a standard process state terminology; 'Terminated' is used instead.",
    learningResources: [
      "https://www.geeksforgeeks.org/process-states-in-operating-systems/",
      "https://www.tutorialspoint.com/operating_system/os_processes.htm",
      "https://en.wikipedia.org/wiki/Process_state"
    ],
    difficulty: 'medium',
    topicTags: ['Process States', 'OS Fundamentals', 'Operating Systems']
  },
  {
    id: 4,
    subject: "Computer Networks",
    questionText: "In the OSI model, which layer is responsible for routing?",
    options: [
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
      "Session Layer"
    ],
    correctAnswer: 1,
    explanation: "The Network Layer (Layer 3) is responsible for routing (path determination) and logical addressing (IP addressing). The Data Link layer handles physical addressing (MAC) and framing.",
    learningResources: [
      "https://www.geeksforgeeks.org/layers-of-osi-model/",
      "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/",
      "https://en.wikipedia.org/wiki/OSI_model"
    ],
    difficulty: 'medium',
    topicTags: ['OSI Model', 'Network Layer', 'Routing', 'Computer Networks']
  },
  {
    id: 5,
    subject: "DBMS",
    questionText: "Which normal form deals with the elimination of transitive dependencies?",
    options: [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    correctAnswer: 2,
    explanation: "3NF (Third Normal Form) requires that the schema is in 2NF and has no transitive dependencies (only direct dependencies on the primary key).",
    learningResources: [
      "https://www.geeksforgeeks.org/database-normalization/",
      "https://www.w3schools.in/dbms/database-normalization/",
      "https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description"
    ],
    difficulty: 'hard',
    topicTags: ['Normalization', '3NF', 'Database Design', 'DBMS']
  }
];

// Generate more placeholder questions to simulate full exam feel
for (let i = 6; i <= 75; i++) {
  MOCK_QUESTIONS.push({
    id: i,
    subject: "General",
    questionText: `This is a sample placeholder question #${i} for the CUET PG CS mock exam.`,
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    correctAnswer: 0,
    explanation: "This is a placeholder explanation for the generated sample question.",
    learningResources: [
      "https://www.geeksforgeeks.org/",
      "https://www.programiz.com/",
      "https://www.tutorialspoint.com/"
    ],
    difficulty: 'medium',
    topicTags: ['General CS', 'Practice']
  });
}
