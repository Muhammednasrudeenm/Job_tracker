import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// index.js (Node.js backend)
import cors from 'cors';
app.use(cors()); // allow all origins

// or restrict to your frontend URL
app.use(cors({
  origin: 'https://your-frontend.vercel.app'
}));


createRoot(document.getElementById('root')).render(<App />);
