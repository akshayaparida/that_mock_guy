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
  // ============ DATA STRUCTURES (Q1-Q12) ============
  {
    id: 1, subject: "Data Structures",
    questionText: "Which data structure is best suited for implementing a LIFO (Last In First Out) system?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    correctAnswer: 1,
    explanation: "A Stack follows the LIFO principle where the last element added is the first removed. Queues are FIFO, Linked Lists are linear but flexible, and Trees are hierarchical.",
    difficulty: 'easy', topicTags: ['Stacks', 'LIFO']
  },
  {
    id: 2, subject: "Data Structures",
    questionText: "The number of edges in a complete graph with n vertices is:",
    options: ["n(n-1)", "n(n-1)/2", "n²", "2n-1"],
    correctAnswer: 1,
    explanation: "A complete graph has an edge between every pair of vertices. The number of ways to choose 2 vertices from n is C(n,2) = n(n-1)/2.",
    difficulty: 'medium', topicTags: ['Graph Theory', 'Complete Graph']
  },
  {
    id: 3, subject: "Data Structures",
    questionText: "What is the worst-case time complexity of searching in a binary search tree (BST)?",
    options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
    correctAnswer: 1,
    explanation: "In the worst case (skewed BST), the tree degenerates into a linked list and search takes O(n). Average case for a balanced BST is O(log n).",
    difficulty: 'medium', topicTags: ['BST', 'Time Complexity']
  },
  {
    id: 4, subject: "Data Structures",
    questionText: "Which traversal of a BST gives elements in sorted order?",
    options: ["Preorder", "Postorder", "Inorder", "Level order"],
    correctAnswer: 2,
    explanation: "Inorder traversal (Left → Root → Right) of a BST visits nodes in ascending sorted order by definition of BST property.",
    difficulty: 'easy', topicTags: ['BST', 'Tree Traversal']
  },
  {
    id: 5, subject: "Data Structures",
    questionText: "The minimum number of queues needed to implement a stack is:",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation: "Two queues are needed. One queue is used to store elements and the other is used during push/pop operations to reverse the order.",
    difficulty: 'medium', topicTags: ['Stack', 'Queue', 'Implementation']
  },
  {
    id: 6, subject: "Data Structures",
    questionText: "A full binary tree with n leaves contains how many total nodes?",
    options: ["2n", "2n - 1", "2n + 1", "n + 1"],
    correctAnswer: 1,
    explanation: "In a full binary tree, every node has 0 or 2 children. If there are n leaves, there are (n-1) internal nodes, giving a total of 2n - 1 nodes.",
    difficulty: 'medium', topicTags: ['Binary Tree', 'Tree Properties']
  },
  {
    id: 7, subject: "Data Structures",
    questionText: "Which data structure is used for implementing LRU cache?",
    options: ["Stack and Queue", "Doubly Linked List and HashMap", "Binary Tree and Stack", "Array and Queue"],
    correctAnswer: 1,
    explanation: "LRU cache uses a HashMap for O(1) lookup and a Doubly Linked List for O(1) insertion/deletion to maintain access order.",
    difficulty: 'hard', topicTags: ['LRU Cache', 'HashMap', 'Linked List']
  },
  {
    id: 8, subject: "Data Structures",
    questionText: "The height of a complete binary tree with n nodes is:",
    options: ["⌈log₂(n)⌉", "⌊log₂(n)⌋", "n/2", "log₂(n+1)"],
    correctAnswer: 1,
    explanation: "The height of a complete binary tree is ⌊log₂(n)⌋. At each level the number of nodes doubles, so the height grows logarithmically.",
    difficulty: 'medium', topicTags: ['Binary Tree', 'Height']
  },
  {
    id: 9, subject: "Data Structures",
    questionText: "Hashing with open addressing uses which of the following for collision resolution?",
    options: ["Separate chaining", "Linear probing", "Linked lists outside the table", "Rehashing into a new table only"],
    correctAnswer: 1,
    explanation: "Open addressing resolves collisions by probing for the next empty slot in the hash table itself (linear probing, quadratic probing, double hashing). Separate chaining uses linked lists.",
    difficulty: 'medium', topicTags: ['Hashing', 'Collision Resolution']
  },
  {
    id: 10, subject: "Data Structures",
    questionText: "In a max-heap, the largest element is stored at:",
    options: ["Any leaf node", "The last node", "The root node", "The leftmost node"],
    correctAnswer: 2,
    explanation: "In a max-heap, the heap property ensures that every parent is greater than or equal to its children, so the largest element is always at the root.",
    difficulty: 'easy', topicTags: ['Heap', 'Max-Heap']
  },
  {
    id: 11, subject: "Data Structures",
    questionText: "What is the time complexity of inserting an element at the beginning of a singly linked list?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
    correctAnswer: 2,
    explanation: "Inserting at the beginning of a singly linked list only requires updating the head pointer and the new node's next pointer — a constant time O(1) operation.",
    difficulty: 'easy', topicTags: ['Linked List', 'Insertion']
  },
  {
    id: 12, subject: "Data Structures",
    questionText: "Which of the following is true about AVL trees?",
    options: ["They are not binary search trees", "The balance factor of every node is -1, 0, or 1", "They cannot have more than 7 nodes", "Insertions never require rotations"],
    correctAnswer: 1,
    explanation: "AVL trees are self-balancing BSTs where the balance factor (height of left subtree - height of right subtree) of every node must be -1, 0, or 1. Rotations are performed on insertion/deletion to maintain this.",
    difficulty: 'medium', topicTags: ['AVL Tree', 'Balanced BST']
  },

  // ============ ALGORITHMS (Q13-Q22) ============
  {
    id: 13, subject: "Algorithms",
    questionText: "What is the time complexity of binary search on a sorted array of size n?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
    correctAnswer: 2,
    explanation: "Binary search divides the search interval in half at every step, giving O(log n) time complexity.",
    difficulty: 'easy', topicTags: ['Binary Search', 'Time Complexity']
  },
  {
    id: 14, subject: "Algorithms",
    questionText: "Which sorting algorithm has the best worst-case time complexity?",
    options: ["Quick Sort — O(n²)", "Merge Sort — O(n log n)", "Bubble Sort — O(n²)", "Selection Sort — O(n²)"],
    correctAnswer: 1,
    explanation: "Merge Sort guarantees O(n log n) in the worst case. Quick Sort's worst case is O(n²) though average is O(n log n).",
    difficulty: 'easy', topicTags: ['Sorting', 'Merge Sort']
  },
  {
    id: 15, subject: "Algorithms",
    questionText: "The recurrence T(n) = 2T(n/2) + n solves to:",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 1,
    explanation: "By the Master Theorem (Case 2: a=2, b=2, f(n)=n, log_b(a)=1), T(n) = Θ(n log n). This is the recurrence for Merge Sort.",
    difficulty: 'hard', topicTags: ['Recurrence', 'Master Theorem']
  },
  {
    id: 16, subject: "Algorithms",
    questionText: "Dijkstra's algorithm does NOT work correctly with:",
    options: ["Directed graphs", "Undirected graphs", "Graphs with negative edge weights", "Dense graphs"],
    correctAnswer: 2,
    explanation: "Dijkstra's algorithm assumes all edge weights are non-negative. Negative weights can cause it to miss shorter paths. Bellman-Ford handles negative weights.",
    difficulty: 'medium', topicTags: ['Dijkstra', 'Shortest Path', 'Graph Algorithms']
  },
  {
    id: 17, subject: "Algorithms",
    questionText: "Which algorithmic paradigm does the 0/1 Knapsack problem use?",
    options: ["Greedy", "Divide and Conquer", "Dynamic Programming", "Backtracking"],
    correctAnswer: 2,
    explanation: "0/1 Knapsack uses Dynamic Programming because items cannot be fractionally taken (unlike Fractional Knapsack which uses Greedy). Overlapping subproblems and optimal substructure properties apply.",
    difficulty: 'medium', topicTags: ['Dynamic Programming', 'Knapsack']
  },
  {
    id: 18, subject: "Algorithms",
    questionText: "What is the time complexity of the Floyd-Warshall algorithm?",
    options: ["O(V²)", "O(V³)", "O(VE)", "O(V log V)"],
    correctAnswer: 1,
    explanation: "Floyd-Warshall uses three nested loops over V vertices to compute all-pairs shortest paths, giving O(V³) time complexity.",
    difficulty: 'hard', topicTags: ['Floyd-Warshall', 'All-Pairs Shortest Path']
  },
  {
    id: 19, subject: "Algorithms",
    questionText: "In Quick Sort, the best case occurs when:",
    options: ["The array is already sorted", "The array is reverse sorted", "The pivot always divides the array into two equal halves", "All elements are the same"],
    correctAnswer: 2,
    explanation: "Best case is when the pivot divides the array into two equal halves at every partition step, giving T(n) = 2T(n/2) + O(n) = O(n log n).",
    difficulty: 'medium', topicTags: ['Quick Sort', 'Partition']
  },
  {
    id: 20, subject: "Algorithms",
    questionText: "Kruskal's algorithm is used for finding:",
    options: ["Shortest path", "Minimum Spanning Tree", "Maximum flow", "Topological order"],
    correctAnswer: 1,
    explanation: "Kruskal's is a greedy algorithm that finds the Minimum Spanning Tree by sorting edges by weight and adding them if they don't form a cycle (using Union-Find).",
    difficulty: 'easy', topicTags: ['MST', 'Greedy', 'Kruskal']
  },
  {
    id: 21, subject: "Algorithms",
    questionText: "The amortized time complexity of inserting n elements into a dynamic array (ArrayList) is:",
    options: ["O(n²)", "O(n log n)", "O(n)", "O(1) per insertion"],
    correctAnswer: 2,
    explanation: "Although individual insertions may trigger O(n) resizing, the total cost for n insertions is O(n) due to the doubling strategy. Amortized cost per insertion is O(1).",
    difficulty: 'hard', topicTags: ['Amortized Analysis', 'Dynamic Array']
  },
  {
    id: 22, subject: "Algorithms",
    questionText: "Which of the following problems is NOT solvable in polynomial time (assuming P ≠ NP)?",
    options: ["Sorting", "Shortest path (single source)", "Travelling Salesman Problem (optimal)", "Binary Search"],
    correctAnswer: 2,
    explanation: "TSP (finding the optimal tour) is NP-Hard. Sorting is O(n log n), single-source shortest path is O(VE), and binary search is O(log n) — all polynomial.",
    difficulty: 'hard', topicTags: ['NP-Hard', 'TSP', 'Complexity Classes']
  },

  // ============ OPERATING SYSTEMS (Q23-Q32) ============
  {
    id: 23, subject: "Operating Systems",
    questionText: "Which of the following is NOT a valid state of a process in an Operating System?",
    options: ["Running", "Ready", "Blocked", "Deleted"],
    correctAnswer: 3,
    explanation: "Standard process states are New, Ready, Running, Blocked (Waiting), and Terminated. 'Deleted' is not a standard process state.",
    difficulty: 'easy', topicTags: ['Process States', 'OS Fundamentals']
  },
  {
    id: 24, subject: "Operating Systems",
    questionText: "Which scheduling algorithm may cause starvation?",
    options: ["Round Robin", "FCFS", "Shortest Job First (SJF)", "All of the above"],
    correctAnswer: 2,
    explanation: "SJF can cause starvation for long processes if shorter processes keep arriving. FCFS and Round Robin do not cause starvation. Aging can mitigate SJF starvation.",
    difficulty: 'medium', topicTags: ['CPU Scheduling', 'SJF', 'Starvation']
  },
  {
    id: 25, subject: "Operating Systems",
    questionText: "Belady's anomaly is associated with:",
    options: ["Optimal page replacement", "LRU page replacement", "FIFO page replacement", "LFU page replacement"],
    correctAnswer: 2,
    explanation: "Belady's anomaly is the phenomenon where increasing the number of page frames results in MORE page faults. This occurs only with FIFO, not with LRU or Optimal.",
    difficulty: 'hard', topicTags: ['Page Replacement', 'Belady Anomaly', 'FIFO']
  },
  {
    id: 26, subject: "Operating Systems",
    questionText: "Which of the following is NOT a necessary condition for deadlock?",
    options: ["Mutual Exclusion", "Hold and Wait", "Preemption", "Circular Wait"],
    correctAnswer: 2,
    explanation: "The four necessary conditions for deadlock are: Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait. 'Preemption' is not a condition — 'No Preemption' is.",
    difficulty: 'medium', topicTags: ['Deadlock', 'Necessary Conditions']
  },
  {
    id: 27, subject: "Operating Systems",
    questionText: "In demand paging, a page fault occurs when:",
    options: ["A page is in main memory", "A process terminates", "A referenced page is not in main memory", "CPU utilization is high"],
    correctAnswer: 2,
    explanation: "A page fault occurs when a process references a page that is not currently loaded in main memory (RAM), requiring the OS to fetch it from secondary storage.",
    difficulty: 'easy', topicTags: ['Demand Paging', 'Page Fault']
  },
  {
    id: 28, subject: "Operating Systems",
    questionText: "The Banker's Algorithm is used for:",
    options: ["CPU scheduling", "Deadlock avoidance", "Memory allocation", "Disk scheduling"],
    correctAnswer: 1,
    explanation: "The Banker's Algorithm is a deadlock avoidance algorithm that checks if granting a resource request will leave the system in a safe state before allocating resources.",
    difficulty: 'medium', topicTags: ['Banker Algorithm', 'Deadlock Avoidance']
  },
  {
    id: 29, subject: "Operating Systems",
    questionText: "Which of the following is a non-preemptive scheduling algorithm?",
    options: ["Round Robin", "SRTF", "FCFS", "Priority Preemptive"],
    correctAnswer: 2,
    explanation: "FCFS (First Come First Served) is non-preemptive — once a process starts executing, it runs until completion. RR, SRTF, and Priority Preemptive can interrupt running processes.",
    difficulty: 'easy', topicTags: ['CPU Scheduling', 'FCFS']
  },
  {
    id: 30, subject: "Operating Systems",
    questionText: "What is thrashing in an operating system?",
    options: ["High CPU utilization", "A process spending more time paging than executing", "Deadlock between two processes", "Buffer overflow in kernel"],
    correctAnswer: 1,
    explanation: "Thrashing occurs when a system spends most of its time swapping pages in and out of memory rather than executing useful work, causing severe performance degradation.",
    difficulty: 'medium', topicTags: ['Thrashing', 'Virtual Memory']
  },
  {
    id: 31, subject: "Operating Systems",
    questionText: "A semaphore S initialized to 1 can be used as:",
    options: ["Counting semaphore", "Binary semaphore / mutex", "Monitor", "Spinlock only"],
    correctAnswer: 1,
    explanation: "A semaphore initialized to 1 acts as a binary semaphore (mutex) allowing mutual exclusion — only one process can enter the critical section at a time.",
    difficulty: 'medium', topicTags: ['Semaphore', 'Mutual Exclusion', 'Synchronization']
  },
  {
    id: 32, subject: "Operating Systems",
    questionText: "The page size in a paging system is 4 KB. A logical address space is 2³² bytes. How many entries are in the page table?",
    options: ["2²⁰", "2¹⁰", "2³²", "2¹²"],
    correctAnswer: 0,
    explanation: "Number of pages = Logical address space / Page size = 2³² / 2¹² = 2²⁰ = 1,048,576 entries in the page table.",
    difficulty: 'hard', topicTags: ['Paging', 'Page Table', 'Address Space']
  },

  // ============ COMPUTER NETWORKS (Q33-Q42) ============
  {
    id: 33, subject: "Computer Networks",
    questionText: "In the OSI model, which layer is responsible for routing?",
    options: ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"],
    correctAnswer: 1,
    explanation: "The Network Layer (Layer 3) handles routing and logical addressing (IP). Data Link handles physical addressing (MAC) and framing.",
    difficulty: 'easy', topicTags: ['OSI Model', 'Network Layer']
  },
  {
    id: 34, subject: "Computer Networks",
    questionText: "TCP is a _____ protocol.",
    options: ["Connectionless, unreliable", "Connection-oriented, reliable", "Connectionless, reliable", "Connection-oriented, unreliable"],
    correctAnswer: 1,
    explanation: "TCP is connection-oriented (3-way handshake) and reliable (acknowledgments, retransmissions, flow control). UDP is connectionless and unreliable.",
    difficulty: 'easy', topicTags: ['TCP', 'Transport Layer']
  },
  {
    id: 35, subject: "Computer Networks",
    questionText: "How many usable host addresses are in a /26 subnet?",
    options: ["64", "62", "30", "126"],
    correctAnswer: 1,
    explanation: "/26 means 32-26 = 6 host bits. Total addresses = 2⁶ = 64. Subtract 2 (network + broadcast) = 62 usable host addresses.",
    difficulty: 'hard', topicTags: ['Subnetting', 'CIDR', 'IP Addressing']
  },
  {
    id: 36, subject: "Computer Networks",
    questionText: "ARP is used to map:",
    options: ["IP address to MAC address", "MAC address to IP address", "Domain name to IP address", "IP address to Port number"],
    correctAnswer: 0,
    explanation: "ARP (Address Resolution Protocol) resolves an IP address to a MAC (physical) address within a local network. RARP does the reverse. DNS maps domain names to IPs.",
    difficulty: 'medium', topicTags: ['ARP', 'Address Resolution']
  },
  {
    id: 37, subject: "Computer Networks",
    questionText: "Which protocol operates at the Application Layer?",
    options: ["TCP", "IP", "HTTP", "Ethernet"],
    correctAnswer: 2,
    explanation: "HTTP operates at the Application Layer (Layer 7). TCP is Transport Layer, IP is Network Layer, and Ethernet is Data Link/Physical Layer.",
    difficulty: 'easy', topicTags: ['Application Layer', 'HTTP', 'OSI Model']
  },
  {
    id: 38, subject: "Computer Networks",
    questionText: "The maximum data rate of a noiseless channel with bandwidth B and L signal levels is given by:",
    options: ["2B log₂(L)", "B log₂(1 + SNR)", "B × L", "2B × L"],
    correctAnswer: 0,
    explanation: "Nyquist's theorem states that the maximum data rate = 2B log₂(L) bps for a noiseless channel. Shannon's theorem (B log₂(1+SNR)) applies to noisy channels.",
    difficulty: 'hard', topicTags: ['Nyquist Theorem', 'Channel Capacity']
  },
  {
    id: 39, subject: "Computer Networks",
    questionText: "Which of the following uses the sliding window protocol?",
    options: ["Stop-and-Wait", "Go-Back-N", "HTTP", "DHCP"],
    correctAnswer: 1,
    explanation: "Go-Back-N ARQ is a sliding window protocol that allows the sender to transmit multiple frames before needing an ACK. Stop-and-Wait sends one frame at a time.",
    difficulty: 'medium', topicTags: ['Sliding Window', 'Go-Back-N', 'Data Link Layer']
  },
  {
    id: 40, subject: "Computer Networks",
    questionText: "DNS primarily uses which transport protocol?",
    options: ["TCP only", "UDP only", "UDP primarily, TCP for large responses", "Neither TCP nor UDP"],
    correctAnswer: 2,
    explanation: "DNS uses UDP (port 53) by default for efficiency. It switches to TCP when the response exceeds 512 bytes (e.g., zone transfers).",
    difficulty: 'medium', topicTags: ['DNS', 'UDP', 'TCP']
  },
  {
    id: 41, subject: "Computer Networks",
    questionText: "In CSMA/CD, what happens when a collision is detected?",
    options: ["Transmission continues", "Both stations stop, wait a random time, and retransmit", "Only one station retransmits", "The frame is dropped permanently"],
    correctAnswer: 1,
    explanation: "In CSMA/CD (used in Ethernet), when a collision is detected both stations stop transmitting, send a jam signal, and wait a random backoff time before retransmitting.",
    difficulty: 'medium', topicTags: ['CSMA/CD', 'Ethernet', 'MAC']
  },
  {
    id: 42, subject: "Computer Networks",
    questionText: "The IP address 127.0.0.1 is used for:",
    options: ["Default gateway", "Broadcast", "Loopback (localhost)", "DNS server"],
    correctAnswer: 2,
    explanation: "127.0.0.1 is the IPv4 loopback address used for testing the network stack on the local machine. It always refers to 'this computer' (localhost).",
    difficulty: 'easy', topicTags: ['IP Addressing', 'Loopback']
  },

  // ============ DBMS (Q43-Q52) ============
  {
    id: 43, subject: "DBMS",
    questionText: "Which normal form deals with the elimination of transitive dependencies?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    correctAnswer: 2,
    explanation: "3NF requires that the schema is in 2NF and has no transitive dependencies (non-key attributes depend only on the primary key, not on other non-key attributes).",
    difficulty: 'medium', topicTags: ['Normalization', '3NF']
  },
  {
    id: 44, subject: "DBMS",
    questionText: "Which SQL clause is used to filter groups?",
    options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
    correctAnswer: 1,
    explanation: "HAVING filters groups after GROUP BY. WHERE filters individual rows before grouping. They serve different purposes in the query execution pipeline.",
    difficulty: 'easy', topicTags: ['SQL', 'HAVING', 'GROUP BY']
  },
  {
    id: 45, subject: "DBMS",
    questionText: "ACID properties ensure:",
    options: ["Fast query execution", "Data integrity in transactions", "Efficient indexing", "Reduced storage"],
    correctAnswer: 1,
    explanation: "ACID (Atomicity, Consistency, Isolation, Durability) ensures reliable transaction processing and data integrity in database systems.",
    difficulty: 'easy', topicTags: ['ACID', 'Transactions']
  },
  {
    id: 46, subject: "DBMS",
    questionText: "A relation is in BCNF if for every non-trivial FD X → Y:",
    options: ["Y is a key", "X is a superkey", "X is a candidate key only", "Y is a prime attribute"],
    correctAnswer: 1,
    explanation: "BCNF requires that for every functional dependency X → Y, X must be a superkey. This is stricter than 3NF which allows the determinant to be a non-key if the dependent is a prime attribute.",
    difficulty: 'hard', topicTags: ['BCNF', 'Normalization', 'Functional Dependencies']
  },
  {
    id: 47, subject: "DBMS",
    questionText: "Which of the following is a DDL command?",
    options: ["SELECT", "INSERT", "CREATE", "UPDATE"],
    correctAnswer: 2,
    explanation: "CREATE is a DDL (Data Definition Language) command used to create database objects. SELECT is DQL, INSERT and UPDATE are DML commands.",
    difficulty: 'easy', topicTags: ['SQL', 'DDL', 'DML']
  },
  {
    id: 48, subject: "DBMS",
    questionText: "In the ER model, a weak entity set is identified by:",
    options: ["Its own primary key", "A discriminator and the identifying relationship", "Foreign keys only", "A composite attribute"],
    correctAnswer: 1,
    explanation: "A weak entity doesn't have a primary key of its own. It is identified by its discriminator (partial key) combined with the primary key of its identifying (owner) entity through an identifying relationship.",
    difficulty: 'medium', topicTags: ['ER Model', 'Weak Entity']
  },
  {
    id: 49, subject: "DBMS",
    questionText: "The natural join of two relations R and S is equivalent to:",
    options: ["R × S", "σ (R × S) selecting matching attributes then projecting out duplicates", "R ∪ S", "R - S"],
    correctAnswer: 1,
    explanation: "Natural join = Cartesian product followed by selecting rows where common attributes match, then projecting out duplicate columns.",
    difficulty: 'medium', topicTags: ['Relational Algebra', 'Natural Join']
  },
  {
    id: 50, subject: "DBMS",
    questionText: "Two-phase locking protocol ensures:",
    options: ["Deadlock freedom", "Starvation freedom", "Serializability", "Both deadlock freedom and serializability"],
    correctAnswer: 2,
    explanation: "2PL ensures conflict serializability by dividing transaction execution into growing phase (acquire locks) and shrinking phase (release locks). It does NOT prevent deadlocks.",
    difficulty: 'hard', topicTags: ['Concurrency Control', '2PL', 'Serializability']
  },
  {
    id: 51, subject: "DBMS",
    questionText: "Which operation in relational algebra is used to select rows based on a condition?",
    options: ["Projection (π)", "Selection (σ)", "Union (∪)", "Rename (ρ)"],
    correctAnswer: 1,
    explanation: "Selection (σ) picks rows satisfying a condition. Projection (π) picks columns. Union combines tuples from two relations.",
    difficulty: 'easy', topicTags: ['Relational Algebra', 'Selection']
  },
  {
    id: 52, subject: "DBMS",
    questionText: "A B+ tree of order m can have at most _____ keys in each internal node.",
    options: ["m", "m - 1", "m + 1", "2m"],
    correctAnswer: 1,
    explanation: "In a B+ tree of order m, each internal node can have at most m children and m-1 keys (search keys). This maintains the balanced structure.",
    difficulty: 'medium', topicTags: ['B+ Tree', 'Indexing']
  },

  // ============ DISCRETE MATHEMATICS (Q53-Q60) ============
  {
    id: 53, subject: "Discrete Mathematics",
    questionText: "The number of subsets of a set with n elements is:",
    options: ["n", "2n", "2ⁿ", "n!"],
    correctAnswer: 2,
    explanation: "Each element can either be included or excluded from a subset, giving 2 choices per element. Total subsets = 2ⁿ (including empty set and the set itself).",
    difficulty: 'easy', topicTags: ['Set Theory', 'Power Set']
  },
  {
    id: 54, subject: "Discrete Mathematics",
    questionText: "A relation R on set A is an equivalence relation if it is:",
    options: ["Reflexive and symmetric only", "Reflexive, symmetric, and transitive", "Symmetric and transitive only", "Reflexive and transitive only"],
    correctAnswer: 1,
    explanation: "An equivalence relation must satisfy all three properties: reflexive (aRa), symmetric (aRb → bRa), and transitive (aRb ∧ bRc → aRc).",
    difficulty: 'easy', topicTags: ['Relations', 'Equivalence Relation']
  },
  {
    id: 55, subject: "Discrete Mathematics",
    questionText: "How many edges does a tree with n vertices have?",
    options: ["n", "n - 1", "n + 1", "2n - 2"],
    correctAnswer: 1,
    explanation: "A tree with n vertices always has exactly n-1 edges. This is a fundamental property: a tree is a connected acyclic graph with minimum edges.",
    difficulty: 'easy', topicTags: ['Graph Theory', 'Trees']
  },
  {
    id: 56, subject: "Discrete Mathematics",
    questionText: "The contrapositive of 'If P then Q' is:",
    options: ["If Q then P", "If not P then not Q", "If not Q then not P", "P and not Q"],
    correctAnswer: 2,
    explanation: "The contrapositive of P → Q is ¬Q → ¬P. A statement and its contrapositive are logically equivalent. The converse is Q → P.",
    difficulty: 'medium', topicTags: ['Propositional Logic', 'Contrapositive']
  },
  {
    id: 57, subject: "Discrete Mathematics",
    questionText: "In how many ways can 5 people be seated in a row?",
    options: ["25", "120", "60", "10"],
    correctAnswer: 1,
    explanation: "Seating 5 people in a row is a permutation: 5! = 5 × 4 × 3 × 2 × 1 = 120 ways.",
    difficulty: 'easy', topicTags: ['Combinatorics', 'Permutations']
  },
  {
    id: 58, subject: "Discrete Mathematics",
    questionText: "A graph is bipartite if and only if it contains no cycle of _____ length.",
    options: ["Even", "Odd", "Prime", "Any"],
    correctAnswer: 1,
    explanation: "A graph is bipartite iff it has no odd-length cycle. Bipartite graphs can be 2-colored such that no two adjacent vertices have the same color.",
    difficulty: 'hard', topicTags: ['Graph Theory', 'Bipartite Graph']
  },
  {
    id: 59, subject: "Discrete Mathematics",
    questionText: "The Pigeonhole Principle states that if n items are put into m containers and n > m, then:",
    options: ["Each container has exactly one item", "At least one container has more than one item", "All containers are full", "Some containers are empty"],
    correctAnswer: 1,
    explanation: "If n items are distributed among m containers where n > m, at least one container must hold more than one item. This is the Pigeonhole Principle.",
    difficulty: 'medium', topicTags: ['Pigeonhole Principle', 'Combinatorics']
  },
  {
    id: 60, subject: "Discrete Mathematics",
    questionText: "Euler's formula for a connected planar graph states: V - E + F = ?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 2,
    explanation: "Euler's formula: V - E + F = 2, where V = vertices, E = edges, F = faces (including the outer/infinite face). This holds for all connected planar graphs.",
    difficulty: 'medium', topicTags: ['Planar Graphs', 'Euler Formula']
  },

  // ============ C/C++ PROGRAMMING (Q61-Q65) ============
  {
    id: 61, subject: "C/C++ Programming",
    questionText: "What is the output of: printf(\"%d\", sizeof(int));  (assuming 64-bit system)?",
    options: ["2", "4", "8", "Compiler dependent"],
    correctAnswer: 1,
    explanation: "On most modern systems (both 32-bit and 64-bit), sizeof(int) is 4 bytes (32 bits). Only long and pointers change between 32/64 bit on most platforms.",
    difficulty: 'easy', topicTags: ['C Language', 'sizeof', 'Data Types']
  },
  {
    id: 62, subject: "C/C++ Programming",
    questionText: "What does the 'static' keyword do for a local variable in C?",
    options: ["Makes it global", "Preserves its value between function calls", "Makes it constant", "Allocates it on heap"],
    correctAnswer: 1,
    explanation: "A static local variable retains its value between function calls. It is initialized only once and its lifetime is the entire program execution, but its scope remains local.",
    difficulty: 'medium', topicTags: ['C Language', 'Static', 'Storage Class']
  },
  {
    id: 63, subject: "C/C++ Programming",
    questionText: "In C, what is a dangling pointer?",
    options: ["A pointer pointing to NULL", "A pointer that has not been initialized", "A pointer pointing to freed/deallocated memory", "A pointer to a constant"],
    correctAnswer: 2,
    explanation: "A dangling pointer points to memory that has been freed or deallocated. Accessing it leads to undefined behavior. Always set pointers to NULL after freeing.",
    difficulty: 'medium', topicTags: ['Pointers', 'Memory Management', 'C Language']
  },
  {
    id: 64, subject: "C/C++ Programming",
    questionText: "Which OOP concept allows a derived class to provide a specific implementation of a method already defined in its base class?",
    options: ["Encapsulation", "Abstraction", "Method Overriding (Polymorphism)", "Data Hiding"],
    correctAnswer: 2,
    explanation: "Method overriding (runtime polymorphism) allows a derived class to provide its own specific implementation of a virtual method defined in the base class.",
    difficulty: 'easy', topicTags: ['OOP', 'Polymorphism', 'C++']
  },
  {
    id: 65, subject: "C/C++ Programming",
    questionText: "What is the output of: int a = 5; printf(\"%d\", a++ + ++a);",
    options: ["11", "12", "10", "Undefined behavior"],
    correctAnswer: 3,
    explanation: "Modifying a variable more than once between sequence points is undefined behavior in C/C++. The expression a++ + ++a modifies 'a' twice, so the result is undefined.",
    difficulty: 'hard', topicTags: ['C Language', 'Undefined Behavior', 'Sequence Points']
  },

  // ============ DIGITAL LOGIC & COMPUTER ARCHITECTURE (Q66-Q70) ============
  {
    id: 66, subject: "Digital Logic",
    questionText: "The Boolean expression A + A'B simplifies to:",
    options: ["A", "A + B", "B", "A'B"],
    correctAnswer: 1,
    explanation: "A + A'B = A + B (by absorption/consensus). Proof: A + A'B = (A + A')(A + B) = 1·(A + B) = A + B.",
    difficulty: 'medium', topicTags: ['Boolean Algebra', 'Simplification']
  },
  {
    id: 67, subject: "Digital Logic",
    questionText: "A JK flip-flop with J=1 and K=1 acts as a:",
    options: ["Set flip-flop", "Reset flip-flop", "Toggle flip-flop", "No change"],
    correctAnswer: 2,
    explanation: "When J=K=1, the JK flip-flop toggles its output on every clock edge. J=1,K=0 sets; J=0,K=1 resets; J=0,K=0 holds state.",
    difficulty: 'medium', topicTags: ['Flip-Flops', 'JK Flip-Flop', 'Sequential Circuits']
  },
  {
    id: 68, subject: "Digital Logic",
    questionText: "The 2's complement representation of -7 in 4-bit binary is:",
    options: ["1001", "0111", "1111", "1000"],
    correctAnswer: 0,
    explanation: "7 in 4-bit binary = 0111. 1's complement = 1000. 2's complement = 1000 + 1 = 1001. So -7 in 4-bit 2's complement is 1001.",
    difficulty: 'medium', topicTags: ['Number Systems', "2's Complement"]
  },
  {
    id: 69, subject: "Computer Architecture",
    questionText: "In a 5-stage instruction pipeline, if there are no stalls, the speedup compared to non-pipelined execution approaches:",
    options: ["2x", "3x", "5x", "10x"],
    correctAnswer: 2,
    explanation: "Ideal speedup of a k-stage pipeline is k times. With 5 stages and no stalls/hazards, the speedup approaches 5x for a large number of instructions.",
    difficulty: 'medium', topicTags: ['Pipelining', 'Speedup', 'Computer Architecture']
  },
  {
    id: 70, subject: "Computer Architecture",
    questionText: "Which type of memory has the fastest access time?",
    options: ["Main memory (RAM)", "Hard disk", "Cache memory", "Registers"],
    correctAnswer: 3,
    explanation: "Registers are the fastest memory, located inside the CPU. Memory hierarchy (fastest to slowest): Registers > Cache > RAM > SSD/HDD.",
    difficulty: 'easy', topicTags: ['Memory Hierarchy', 'Registers']
  },

  // ============ MIXED SUBJECTS — CUET PG CS PYQ STYLE (Q71-Q75) ============
  {
    id: 71, subject: "Data Structures",
    questionText: "The postfix expression for the infix expression A + B * C is:",
    options: ["ABC*+", "AB+C*", "+A*BC", "A+BC*"],
    correctAnswer: 0,
    explanation: "Using operator precedence: B*C is evaluated first → BC*, then A + (BC*) → ABC*+. In postfix, operators follow their operands.",
    difficulty: 'medium', topicTags: ['Expression Conversion', 'Postfix', 'Stack']
  },
  {
    id: 72, subject: "Algorithms",
    questionText: "Which of the following is true about BFS traversal of a graph?",
    options: ["It uses a stack", "It uses a queue", "It always finds the shortest path in weighted graphs", "It cannot detect cycles"],
    correctAnswer: 1,
    explanation: "BFS uses a queue (FIFO) for traversal, exploring all neighbors at the current depth before moving deeper. It finds shortest paths in unweighted graphs only.",
    difficulty: 'easy', topicTags: ['BFS', 'Graph Traversal', 'Queue']
  },
  {
    id: 73, subject: "Operating Systems",
    questionText: "The technique of loading a process into memory only when it is needed is called:",
    options: ["Swapping", "Demand Paging", "Segmentation", "Compaction"],
    correctAnswer: 1,
    explanation: "Demand paging loads pages into memory only when they are referenced (on demand), reducing memory usage. A page fault triggers loading from disk.",
    difficulty: 'easy', topicTags: ['Demand Paging', 'Memory Management']
  },
  {
    id: 74, subject: "DBMS",
    questionText: "A superkey is:",
    options: ["Always a candidate key", "A set of attributes that uniquely identifies a tuple", "The smallest possible key", "A foreign key"],
    correctAnswer: 1,
    explanation: "A superkey is any set of attributes that can uniquely identify a tuple in a relation. A candidate key is a minimal superkey (no proper subset is a superkey).",
    difficulty: 'easy', topicTags: ['Keys', 'Superkey', 'Candidate Key']
  },
  {
    id: 75, subject: "Computer Networks",
    questionText: "The minimum length of an Ethernet frame is:",
    options: ["32 bytes", "46 bytes", "64 bytes", "128 bytes"],
    correctAnswer: 2,
    explanation: "Minimum Ethernet frame size is 64 bytes (includes 14-byte header + 46-byte minimum payload + 4-byte CRC). This ensures collision detection in CSMA/CD within the slot time.",
    difficulty: 'medium', topicTags: ['Ethernet', 'Frame Format', 'Data Link Layer']
  }
];
