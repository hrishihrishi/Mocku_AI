# Mocku AI 🤡

> **Expect the unexpected. Prepare to be roasted.**

Mocku AI is a "friendly-offensive" AI application that takes your input and generates short, witty, and slightly insulting mocking sentences. Powered by Google's Gemini AI, it's designed to bring a bit of humor (and a lot of shade) to your day.

---

## 🏗 Architecture

The project follows a modern microservices-inspired architecture:

- **Frontend (`react_frontend`)**: A sleek, reactive UI built with **React**, **TypeScript**, and **Vite**.
- **AI Core (`python_ai_service`)**: A high-performance **FastAPI** service written in **Python**, serving as the brain of the operation via the **Gemini 2.5 Flash** model.
- **Backend Orchestrator (`node_backend`)**: A **Node.js + Express** server designed to handle routing, authentication, and service orchestration.

---

## 🛠 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) |
| **AI Service** | ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) ![FastAPI](https://img.shields.io/badge/FastAPI-05998B?style=for-the-badge&logo=fastapi&logoColor=white) ![Google Gemini](https://img.shields.io/badge/Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white) |
| **Orchestration** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) |

---

## 🚀 Getting Started

### 1. Prerequisites
- [Google Gemini API Key](https://aistudio.google.com/)
- Node.js (v18+)
- Python (3.10+)

### 2. Installation & Setup

#### **Python AI Service**
```bash
cd python_ai_service
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```
Create `.env` in `python_ai_service/`:
```env
GEMINI_API_KEY=your_key_here
```

#### **Node Backend**
```bash
cd node_backend
npm install
```

#### **React Frontend**
```bash
cd react_frontend
npm install
```

### 3. Running the App

You'll need three terminal windows:

1. **AI Service**: `python python_ai_service/main.py` (Runs on port 8000)
2. **Node Backend**: `node node_backend/server.js` (Runs on port 4000)
3. **Frontend**: `cd react_frontend && npm run dev` (Runs on port 5173)

---

## 🤡 Usage

1. Open `http://localhost:5173` in your browser.
2. Enter any sentence.
3. Click **Send**.
4. Witness the AI's brilliance in mockery.

---

## 🛡 License
Distributed under the MIT License. See `LICENSE` for more information.

---
*Created with ❤️ by Hrishikesh*
