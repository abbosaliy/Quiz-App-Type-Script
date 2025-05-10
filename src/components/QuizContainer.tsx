import { useState } from 'react';
import './QuizContainer.css';
import NextQuestion from './NextQuestionBtn';

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
};

function QuizQuestion() {
  const [question, setQuestion] = useState(0);

  const renderQuestion: Question[] = [
    {
      question: '1.  Wie lang ist die Große Mauer von China?',
      options: ['5000 km', '6500 km', '4500 km', '6000 km'],
      correctAnswer: 3,
    },
    {
      question: '2. Was ist die größte Insel der Welt?',
      options: [' Sumatra', 'Neuguinea', 'Grönland', '	Madagaskar'],
      correctAnswer: 2,
    },
    {
      question: '3. Welches Land hat die meisten Einwohner der Welt?',
      options: ['China', 'Japan', 'Russland', 'Indien'],
      correctAnswer: 0,
    },
    {
      question: '4. Welcher Musiker wird oft „King of Pop“ genannt?',
      options: ['Michael Jackson', 'Elvis Presley', 'Justin Bieber', 'Prince'],
      correctAnswer: 0,
    },
    {
      question: '5. Was war das erste Computerspiel der Geschichte?',
      options: ['Super Mario Bros', 'Pong', 'Tetris', 'Minecraft'],
      correctAnswer: 1,
    },
  ];

  function handleNext() {
    if (question + 1 < renderQuestion.length) {
      setQuestion(question + 1);
      setAnswer(null);
    } else {
      alert('Gut gemacht! Du hast das Quiz erfolgreich abgeschlossen.');
    }
  }

  const [answer, setAnswer] = useState<number | null>(null);

  function handleAnswer(answerIndex: number) {
    setAnswer(answerIndex);
  }

  return (
    <div className="quizBox">
      <h2 className="quiz-text">{renderQuestion[question].question}</h2>

      <div className="quizBox-options">
        {renderQuestion[question].options.map((quiz, index) => {
          let className = ' optionsBtn';
          if (answer !== null) {
            if (index === renderQuestion[question].correctAnswer) {
              className += ' correct';
            } else if (index === answer) {
              className += ' wrong';
            }
          }
          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={className}
            >
              {quiz}
            </button>
          );
        })}
      </div>
      <NextQuestion handleNextQuestion={handleNext} />
    </div>
  );
}

export default QuizQuestion;
