import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function QuizResult() {
  return (
    <>
      <Navbar />

      <div className="result-page">

        <div className="result-card">

          <h1>🎉 Quiz Completed</h1>

          <h2>Score : 8 / 10</h2>

          <p>
            Great Job! Keep practicing to improve your score.
          </p>

          <button className="primary-btn">
            Back to Dashboard
          </button>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default QuizResult;