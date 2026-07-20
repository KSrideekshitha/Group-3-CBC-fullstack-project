import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function StudentDashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="dashboard-header">
          <h1>👋 Welcome Back, Student</h1>
          <p>Continue your learning journey with LearnVista.</p>
        </div>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h2>8</h2>
            <p>Enrolled Courses</p>
          </div>

          <div className="dashboard-card">
            <h2>24</h2>
            <p>Completed Lessons</p>
          </div>

          <div className="dashboard-card">
            <h2>6</h2>
            <p>Quizzes Taken</p>
          </div>

          <div className="dashboard-card">
            <h2>92%</h2>
            <p>Overall Progress</p>
          </div>

        </div>

        <div className="dashboard-section">

          <h2>Continue Learning</h2>

          <div className="dashboard-course">

            <h3>React Development</h3>

            <p>Lesson 12 of 24 Completed</p>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "50%" }}></div>
            </div>

            <button className="primary-btn">
              Resume Course
            </button>

          </div>

          <div className="dashboard-course">

            <h3>Node.js & Express</h3>

            <p>Lesson 18 of 30 Completed</p>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "60%" }}></div>
            </div>

            <button className="primary-btn">
              Resume Course
            </button>

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