import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function Quiz() {
  return (
    <>
      <Navbar />

      <div className="quiz-page">

        <h1>React Quiz</h1>

        <div className="quiz-card">

          <h3>1. React is developed by?</h3>

          <label>
            <input type="radio" name="q1" />
            Google
          </label>

          <label>
            <input type="radio" name="q1" />
            Microsoft
          </label>

          <label>
            <input type="radio" name="q1" />
            Meta
          </label>

          <label>
            <input type="radio" name="q1" />
            Amazon
          </label>

          <button className="primary-btn">
            Submit Quiz
          </button>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Quiz;