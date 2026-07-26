import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { Link } from "react-router-dom";

function StudentDashboard() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="dashboard-header">
          <h1>👋 Welcome Back, {user.name || "Student"}!</h1>
          <p>
            Keep learning every day and achieve your goals with LearnVista.
          </p>
        </div>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h2>8</h2>
            <p>📚 Enrolled Courses</p>
          </div>

          <div className="dashboard-card">
            <h2>24</h2>
            <p>🎥 Lessons Completed</p>
          </div>

          <div className="dashboard-card">
            <h2>6</h2>
            <p>📝 Quizzes Taken</p>
          </div>

          <div className="dashboard-card">
            <h2>92%</h2>
            <p>📈 Overall Progress</p>
          </div>

        </div>

        <div className="dashboard-section">

          <h2>Continue Learning</h2>

          <div className="dashboard-course">

            <h3>React Development</h3>

            <p>Lesson 12 of 24 Completed</p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "50%" }}
              ></div>
            </div>

            <Link to="/courses">
              <button className="primary-btn">
                Resume Course
              </button>
            </Link>

          </div>

          <div className="dashboard-course">

            <h3>Node.js & Express</h3>

            <p>Lesson 18 of 30 Completed</p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "60%" }}
              ></div>
            </div>

            <Link to="/courses">
              <button className="primary-btn">
                Resume Course
              </button>
            </Link>

          </div>

        </div>

        <div className="dashboard-section">

          <h2>Quick Actions</h2>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            <Link to="/courses">
              <button className="primary-btn">
                Browse Courses
              </button>
            </Link>

            <Link to="/progress">
              <button className="primary-btn">
                View Progress
              </button>
            </Link>

            <Link to="/result">
              <button className="primary-btn">
                Quiz Results
              </button>
            </Link>
          </div>

        </div>

        <div className="dashboard-section">

          <h2>Recent Activity</h2>

          <ul className="activity-list">
            <li>✅ Completed React Quiz - Score: 9/10</li>
            <li>📚 Finished Lesson: React Hooks</li>
            <li>🎯 Enrolled in MongoDB Mastery</li>
            <li>🏆 Earned "Frontend Basics" Badge</li>
          </ul>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default StudentDashboard;