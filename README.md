# 🏴‍☠️ Pixel Pirates

An adaptive learning platform for coding education with AI-powered features, built with a state-of-the-art tech stack.

## 🌟 Overview

Pixel Pirates is a full-stack educational web application that provides personalized coding education through AI-powered mock tests, interactive quizzes, curated video recommendations, and comprehensive progress tracking.

## 🛠️ Tech Stack

### Backend
- **Framework:** FastAPI (Python)
- **Database:** MongoDB (Motor async driver)
- **AI Integration:** Gemini 2.5 Flash, OpenRouter API
- **Video:** YouTube API for curated learning content

### Frontend
- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 12

### Infrastructure
- **Containerization:** Docker, Docker Compose

## 🚀 Features

- 🔐 **JWT Authentication** (Sign Up, Sign In, Logout)
- 🤖 **AI-Powered Mock Tests** (Gemini 2.5 Flash + OpenRouter)
- 🎥 **YouTube Video Integration**
- 📊 **Adaptive Quizzes**
- 📈 **Progress Analytics**
- 🛡️ **Anti-Cheat Mock Test Security**
- 📝 **Note-Taking & Study Materials**
- 💬 **AI-Powered Chat Assistance**

## 📂 Project Structure

```text
pixel-pirates/
├── backend/                 # FastAPI Backend
│   ├── .env                 # Backend environment variables
│   ├── app/                 # Application source code
│   ├── docs/                # Backend specific documentation
│   ├── scripts/             # Utility and database seeding scripts
│   ├── tests/               # API and unit tests
│   └── requirements.txt     # Python dependencies
│
├── frontend/                # React Frontend
│   ├── src/                 # React components and pages
│   ├── public/              # Static assets
│   └── docs/                # Frontend documentation
│
├── docs/                    # Global project documentation
├── docker-compose.yml       # Docker orchestration
└── README.md                # This file
```

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- Python 3.11+
- Docker & Docker Compose (Optional, but recommended)

### 🐳 Docker Deployment (Recommended)

1. Make sure your `.env` is present in the root or `backend/` directory.
2. Run the following command:
```bash
docker compose up -d --build
```
3. The Frontend will be available at `http://localhost:3000` and the Backend API at `http://localhost:8000`.

### 💻 Local Development (Manual Setup)

#### 1. Backend Setup

```bash
cd backend

# Create and activate a virtual environment (optional)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the server
python main.py
```
*The API will be available at `http://localhost:8000`*

#### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```
*The app will be available at `http://localhost:5173`*

## 📚 API Documentation

Once the backend is running, visit `http://localhost:8000/docs` for the interactive Swagger UI API documentation.

## ⚙️ Environment Variables Configuration

Create a `.env` file in the `backend/` directory with the following variables:

```ini
# YouTube API Configuration
YOUTUBE_API_KEY=your-youtube-api-key

# OpenRouter API Configuration
OPENROUTER_API_KEY=your-openrouter-api-key
OPENROUTER_MODEL=mistralai/mistral-7b-instruct

# Ollama Configuration
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=llama3.1

# Gemini API Configuration
GEMINI_API_KEY=your-gemini-api-key
GEMINI_BASE_URL=https://generativelanguage.googleapis.com/v1beta
GEMINI_MODEL=gemini-2.0-flash

# JWT Authentication
JWT_SECRET_KEY=your-secret-key-change-this-in-production

# Security
SECRET_KEY=your-app-secret-key

# Application URLs
API_BASE_URL=http://localhost:5000
CORS_ORIGINS=http://localhost:5173,http://localhost:3000

# Database Configuration
DATABASE_URL=sqlite:///./pixel_pirates.db
MONGODB_URL=mongodb://localhost:27017/
MONGODB_DATABASE=pixel_pirates
```

## 📄 License

MIT