import { useEffect, useState } from "react";

import QuestionCard from "../components/QuestionCard";

import {
  getQuiz,
  submitQuiz
} from "../services/quizService";

import QuizResult from "./QuizResult";

import "../styles/Quiz.css";


const Quiz = ({ quizId }) => {

  const [quiz, setQuiz] = useState(null);

  const [answers, setAnswers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [result, setResult] = useState(null);


  // Load quiz
  useEffect(() => {

    const loadQuiz = async () => {

      try {

        const token =
          localStorage.getItem("token");

        const data = await getQuiz(
          quizId,
          token
        );

        setQuiz(data);

        setAnswers(
          new Array(data.questions.length)
            .fill(null)
        );

      } catch (error) {

        setError(error.message);

      } finally {

        setLoading(false);

      }

    };

    loadQuiz();

  }, [quizId]);


  // Select answer
  const handleAnswerSelect = (
    questionIndex,
    answerIndex
  ) => {

    const updatedAnswers = [...answers];

    updatedAnswers[questionIndex] =
      answerIndex;

    setAnswers(updatedAnswers);

  };


  // Submit quiz
  const handleSubmit = async () => {

    const unansweredQuestion =
      answers.some(
        (answer) => answer === null
      );


    if (unansweredQuestion) {

      alert(
        "Please answer all questions before submitting."
      );

      return;

    }


    try {

      const token =
        localStorage.getItem("token");

      const data = await submitQuiz(
        quizId,
        answers,
        token
      );

      setResult(data);

    } catch (error) {

      setError(error.message);

    }

  };


  if (loading) {

    return (

      <div className="status-message">

        Loading Quiz...

      </div>

    );

  }


  if (error) {

    return (

      <div className="error-message">

        {error}

      </div>

    );

  }


  if (result) {

    return (

      <QuizResult
        score={result.score}
        total={result.total}
      />

    );

  }


  return (

    <div className="quiz-page">

      <div className="quiz-header">

        <h1>{quiz.title}</h1>

        <p>
          Answer all questions and submit your quiz.
        </p>

      </div>


      <div className="questions-container">

        {quiz.questions.map(
          (question, index) => (

            <QuestionCard

              key={question._id || index}

              question={question}

              questionNumber={index + 1}

              selectedAnswer={
                answers[index]
              }

              onAnswerSelect={(
                answerIndex
              ) =>
                handleAnswerSelect(
                  index,
                  answerIndex
                )
              }

            />

          )
        )}

      </div>


      <button
        type="button"

        className="submit-button"

        onClick={handleSubmit}
      >

        Submit Quiz

      </button>

    </div>

  );

};


export default Quiz;