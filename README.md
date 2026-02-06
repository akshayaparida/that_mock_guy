# That Mock Guy 🎓
> Minimalist Mock Exam Platform for CUET PG CS Aspirants.

![That Mock Guy](public/og-image.png)

A high-performance, distraction-free mock exam application designed to mimic the strict NTA (National Testing Agency) exam pattern while offering a flexible study mode for learning.

## 🚀 Features

### 1. **Exam Mode** (Simulation)
- **Strict Timer**: 105-minute countdown (auto-submit on zero).
- **NTA Interface**: Exact color palette for question status (Not Visited, Answered, Marked for Review).
- **No Distractions**: Full-screen focus, no explanations until submission.

### 2. **Study Mode** (Learning)
- **Untimed Practice**: Learn at your own pace.
- **Instant Feedback**: "Check Answer" button reveals correct options immediately.
- **Detailed Explanations**: Understand the *why* behind every answer.

### 3. **Live Visitor Counter**
- **Real-time Tracking**: Powered by **Vercel KV (Redis)**.
- **Unique Logic**: Counts unique aspirants using local storage persistence.

## 🛠️ Tech Stack
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Runtime**: [Bun](https://bun.sh/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Database**: [Vercel KV](https://vercel.com/docs/storage/vercel-kv) (Redis)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🏃‍♂️ Getting Started

### Prerequisites
- [Bun](https://bun.sh/) installed (`curl -fsSL https://bun.sh/install | bash`).

### Installation
```bash
git clone https://github.com/akshayaparida/that_mock_guy.git
cd that_mock_guy
bun install
```

### Environment Variables
For the visitor counter to work in production, you need Vercel KV.
Locally, it falls back to a file (`local-visitor-count.txt`), so **no .env is required for local dev**.

For production (Vercel):
```env
KV_REST_API_URL="your_vercel_kv_url"
KV_REST_API_TOKEN="your_vercel_kv_token"
```

### Run Locally
```bash
bun dev
```
Open [http://localhost:3000](http://localhost:3000).

## 🤝 Contributing
1. Fork the repo.
2. Create feature branch (`git checkout -b feature/amazing-feature`).
3. Commit changes (`git commit -m 'Add amazing feature'`).
4. Push to branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## 📄 License
MIT License.
