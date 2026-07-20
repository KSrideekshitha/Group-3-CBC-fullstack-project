import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function CreateQuiz() {
  return (
    <>
      <Navbar />

      <div className="form-page">

        <div className="form-card">

          <h1>Create Quiz</h1>

          <input type="text" placeholder="Question" />

          <input type="text" placeholder="Option A" />

          <input type="text" placeholder="Option B" />

          <input type="text" placeholder="Option C" />

          <input type="text" placeholder="Option D" />

          <button className="primary-btn">
            Add Question
          </button>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default CreateQuiz;