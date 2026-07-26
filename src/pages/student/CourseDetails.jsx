import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { Link } from "react-router-dom";

function CourseDetails() {
  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="dashboard-header">
          <h1>📚 React Development</h1>
          <p>
            Master React from beginner to advanced level through practical
            projects, quizzes, and real-world examples.
          </p>
        </div>

        <div className="dashboard-section">

          <h2>📖 About This Course</h2>

          <p style={{ marginTop: "15px", lineHeight: "1.8" }}>
            This course is designed to help students build modern web
            applications using React. You will learn concepts step by step,
            complete hands-on exercises, and strengthen your frontend
            development skills.
          </p>

          <br />

          <button className="primary-btn">
            🚀 Enroll Now
          </button>

        </div>

        <div className="dashboard-section">

          <h2>📋 Course Content</h2>

          <ul className="activity-list" style={{ marginTop: "20px" }}>
            <li>✅ Introduction to React</li>
            <li>✅ JSX Fundamentals</li>
            <li>✅ Components & Props</li>
            <li>✅ State & Event Handling</li>
            <li>✅ React Hooks</li>
            <li>✅ React Router</li>
            <li>✅ API Integration</li>
            <li>✅ Mini Project</li>
            <li>✅ Final Quiz</li>
          </ul>

        </div>

        <div className="dashboard-section">

          <h2>📊 Course Details</h2>

          <table
            style={{
              width: "100%",
              marginTop: "20px",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <td><strong>Instructor</strong></td>
                <td>LearnVista Team</td>
              </tr>

              <tr>
                <td><strong>Duration</strong></td>
                <td>8 Weeks</td>
              </tr>

              <tr>
                <td><strong>Lessons</strong></td>
                <td>24 Lessons</td>
              </tr>

              <tr>
                <td><strong>Projects</strong></td>
                <td>3 Hands-on Projects</td>
              </tr>

              <tr>
                <td><strong>Certificate</strong></td>
                <td>Available</td>
              </tr>
            </tbody>
          </table>

        </div>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <Link to="/lesson/1">
            <button className="primary-btn">
              ▶ Start Learning
            </button>
          </Link>

          <Link to="/courses">
            <button className="primary-btn">
              📚 Back to Courses
            </button>
          </Link>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default CourseDetails;