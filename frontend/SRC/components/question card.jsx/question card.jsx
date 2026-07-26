const QuestionCard = ({
  question,
  questionNumber,
  selectedAnswer,
  onAnswerSelect
}) => {
  return (
    <div className="question-card">

      <h3>
        {questionNumber}. {question.text}
      </h3>

      <div className="options">

        {question.options.map((option, index) => (

          <button
            key={index}

            className={
              selectedAnswer === index
                ? "option selected"
                : "option"
            }

            onClick={() => onAnswerSelect(index)}
          >
            {option}
          </button>

        ))}

      </div>

    </div>
  );
};

export default QuestionCard;