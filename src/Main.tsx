import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="quiz-app">
      <App />
    </div>
  </React.StrictMode>
);
