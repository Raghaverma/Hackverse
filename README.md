# Hackverse

A modern full-stack hackathon platform for discovering, joining, and managing hackathons, built with a React (shadcn, Tailwind CSS, TypeScript) frontend and a Node.js/Express backend (JSON file persistence).

---

## 🚀 Project Overview
Hackverse is a platform for:
- Showcasing upcoming and past hackathons
- Team and user management
- Resource sharing and community engagement
- Admin dashboard for analytics and moderation

## ✨ Features
- Beautiful, light-themed UI with blue accents
- Interactive hero and background effects (particles, SplashCursor)
- Hackathon discovery, stats, and schedule
- User/team registration and authentication
- Resource library with community submissions
- Admin dashboard (analytics, logs, moderation)
- No database required: JSON file persistence for easy setup

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, shadcn/ui, Tailwind CSS, Vite
- **Backend:** Node.js, Express, JWT, bcrypt, JSON file storage
- **Deployment:** Vercel/Netlify (frontend), Render (backend)

## 📁 Project Structure
```
Hackverse/
├── client/   # React frontend
├── server/   # Node.js/Express backend
│   ├── data/         # JSON files for users, teams, hackathons, etc.
│   ├── routes/       # Express route handlers
│   ├── utils/        # Helper functions (auth, file I/O)
│   └── index.js      # Server entry point
└── README.md
```

## ⚡ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Raghaverma/Hackverse.git
cd Hackverse
```

### 2. Setup the Backend
```bash
cd server
npm install
# Start the server (default: http://localhost:5000)
npm start
```

### 3. Setup the Frontend
```bash
cd ../client
npm install
# Start the React app (default: http://localhost:5173)
npm run dev
```

### 4. Environment Variables
- Backend: See `.env.example` in `server/` (for JWT secret, etc.)
- Frontend: Update API URLs in `client/src/config` if needed

## 🌐 Deployment
- **Frontend:** Deploy `client/` to Vercel or Netlify
- **Backend:** Deploy `server/` to Render or similar (note: JSON file persistence is not suitable for production-scale apps)

## 🤝 Contributing
1. Fork the repo & create a new branch
2. Make your changes
3. Submit a pull request

## 📄 License
MIT

---

### Contact & Credits
- Created by Raghav Verma
- Contributions welcome! Open an issue or PR to get involved. 