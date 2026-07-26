import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import api from "../../services/api";

function QuizResult() {
  const navigate = useNavigate();

  const [result, setResult] = useState(null);

  useEffect(() => {
    fetchResult();
  }, []);

  const fetchResult = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/quizzes/results/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.results.length > 0) {
        setResult(response.data.results[response.data.results.length - 1]);
      }
    } catch (error) {
      console.log(error);
      alert("Failed to load result");
    }
  };

  if (!result) {
    return (
      <>
        <Navbar />
        <div className="result-page">
          <div className="result-card">
            <h2>No Results Available</h2>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="result-page">
        <div className="result-card">

          <h1>🎉 Quiz Completed</h1>

          <h2>
            Score : {result.score} / {result.totalQuestions}
          </h2>

          <p>
            Great Job! Keep practicing to improve your score.
          </p>

          <button
            className="primary-btn"
            onClick={() => navigate("/student/dashboard")}
          >
            Back to Dashboard
          </button>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default QuizResult;