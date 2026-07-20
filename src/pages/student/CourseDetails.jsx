import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function CourseDetails() {
  return (
    <>
      <Navbar />

      <div className="course-details">

        <div className="course-banner">
          <h1>React Development</h1>
          <p>
            Learn React from basics to advanced concepts with
            hands-on projects and quizzes.
          </p>

          <button className="primary-btn">
            Enroll Now
          </button>
        </div>

        <div className="course-info">

          <h2>Course Content</h2>

          <ul>

            <li>✅ Introduction to React</li>
            <li>✅ JSX & Components</li>
            <li>✅ Props & State</li>
            <li>✅ Hooks</li>
            <li>✅ Routing</li>
            <li>✅ API Integration</li>

          </ul>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default CourseDetails;