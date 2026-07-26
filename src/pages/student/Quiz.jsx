import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import api from "../../services/api";

function Quiz() {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      const response = await api.get("/quizzes");

      if (response.data.quizzes.length > 0) {
        const firstQuiz = response.data.quizzes[0];
        setQuiz(firstQuiz);
        setAnswers(new Array(firstQuiz.questions.length).fill(-1));
      }
    } catch (error) {
      console.log(error);
      alert("Failed to load quiz");
    }
  };

  const handleOptionChange = (questionIndex, optionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = optionIndex;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.post(
        "/quizzes/submit",
        {
          quizId: quiz._id,
          answers,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(
        `Quiz Submitted Successfully!\n\nScore: ${response.data.result.score}/${response.data.result.totalQuestions}`
      );
    } catch (error) {
      alert(error.response?.data?.message || "Failed to submit quiz");
    }
  };

  if (!quiz) {
    return (
      <>
        <Navbar />
        <div className="quiz-page">
          <h2>No Quiz Available</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="quiz-page">

        <h1>{quiz.title}</h1>

        {quiz.questions.map((q, questionIndex) => (
          <div className="quiz-card" key={questionIndex}>

            <h3>
              {questionIndex + 1}. {q.question}
            </h3>

            {q.options.map((option, optionIndex) => (
              <label
                key={optionIndex}
                style={{ display: "block", marginBottom: "10px" }}
              >
                <input
                  type="radio"
                  name={`question-${questionIndex}`}
                  checked={answers[questionIndex] === optionIndex}
                  onChange={() =>
                    handleOptionChange(questionIndex, optionIndex)
                  }
                />

                {" "}

                {option}
              </label>
            ))}

          </div>
        ))}

        <button
          className="primary-btn"
          onClick={handleSubmit}
        >
          Submit Quiz
        </button>

      </div>

      <Footer />
    </>
  );
}

export default Quiz;