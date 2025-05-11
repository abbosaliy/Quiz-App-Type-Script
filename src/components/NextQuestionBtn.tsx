import './NextQuestionBtn.css';

type NextQuestionProps = {
  handleNextQuestion: () => void;
};

function NextQuestion({ handleNextQuestion }: NextQuestionProps) {
  function renderQuestion() {
    handleNextQuestion();
  }

  return (
    <button
      onClick={() => renderQuestion()}
      className="nextQuestion"
    >
      Weiter
    </button>
  );
}

export default NextQuestion;
