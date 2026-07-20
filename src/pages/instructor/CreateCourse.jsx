import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function CreateCourse() {
  return (
    <>
      <Navbar />

      <div className="form-page">

        <div className="form-card">

          <h1>Create Course</h1>

          <input type="text" placeholder="Course Title" />

          <textarea
            rows="5"
            placeholder="Course Description"
          ></textarea>

          <button className="primary-btn">
            Create Course
          </button>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default CreateCourse;