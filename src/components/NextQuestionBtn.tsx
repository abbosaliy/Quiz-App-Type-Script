import './NextQuestionBtn.css';

type NextQuestionProps = {
  handleNextQuestion: () => void;
};

function NextQuestion({ handleNextQuestion }: NextQuestionProps) {
  return (
    <button
      onClick={() => handleNextQuestion()}
      className="nextQuestion"
    >
      Weiter
    </button>
  );
}

export default NextQuestion;
