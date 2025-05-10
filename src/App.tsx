import { useState } from 'react';
import './App.css';
import QuizQuestion from './components/QuizContainer';

function App() {
  const [start, setStart] = useState(false);

  return (
    <div>
      {!start && (
        <button
          onClick={() => setStart(true)}
          className="start-btn"
        >
          Quiz Starten
        </button>
      )}
      {start && <QuizQuestion />}
    </div>
  );
}

export default App;
