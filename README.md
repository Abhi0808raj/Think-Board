# ThinkBoard 📝

A full-stack MERN (MongoDB, Express.js, React, Node.js) note-taking application built for hands-on practice with modern web development technologies.

## 🚀 Features

- **Create Notes**: Add new notes with title and content
- **View Notes**: Browse all your notes in a clean, organized layout
- **Edit Notes**: Update existing notes with real-time changes
- **Delete Notes**: Remove notes you no longer need
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Rate Limiting**: Built-in protection against spam requests
- **Real-time Feedback**: Toast notifications for user actions

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (with Mongoose ODM)
- **Upstash Redis** - Rate limiting and caching
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications

## 📁 Project Structure

```
mern-thinkboard/
├── backend/
│   ├── src/
│   │   ├── config/          # Database and Upstash configuration
│   │   ├── controllers/     # Route handlers
│   │   ├── middleware/      # Rate limiting middleware
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API routes
│   │   └── server.js        # Entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── lib/             # Utilities and API configuration
│   │   ├── pages/           # Page components
│   │   └── main.jsx         # Entry point
│   └── package.json
└── package.json             # Root package.json for deployment
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB database
- Upstash Redis account (optional, for rate limiting)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhi0808raj/Think-Board.git
   cd Think-Board
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the `backend` directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5001
   NODE_ENV=development
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   ```

4. **Run the application**
   
   **Development mode:**
   ```bash
   # Start backend (from backend directory)
   npm run dev
   
   # Start frontend (from frontend directory)
   npm run dev
   ```
   
   **Production mode:**
   ```bash
   # Build the project
   npm run build
   
   # Start production server
   npm start
   ```

## 📚 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get note by ID |
| POST | `/api/notes` | Create new note |
| PUT | `/api/notes/:id` | Update note |
| DELETE | `/api/notes/:id` | Delete note |

## 🎨 UI Components

- **NavBar**: Navigation header with create note button
- **NoteCard**: Individual note display with actions
- **NotesNotFound**: Empty state component
- **RateLimitedUI**: Rate limit warning display

## 🚀 Deployment

The project is configured for deployment on platforms like Heroku, Railway, or Render:

1. **Build command**: `npm run build`
2. **Start command**: `npm start`
3. Set environment variables on your deployment platform
4. The app serves the React build from the Express server in production

## 🛡️ Rate Limiting

The application includes rate limiting (100 requests per 60 seconds) using Upstash Redis to prevent abuse and ensure fair usage.

## 🎯 Learning Objectives

This project was created to practice:
- Full-stack JavaScript development
- RESTful API design
- MongoDB database operations
- React hooks and state management
- Responsive web design
- Error handling and user feedback
- Environment configuration
- Production deployment

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the [ISC License](LICENSE).

---

**Built with ❤️ for MERN stack learning**
