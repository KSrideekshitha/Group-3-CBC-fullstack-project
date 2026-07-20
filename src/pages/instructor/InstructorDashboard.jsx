import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function InstructorDashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="dashboard-header">
          <h1>👨‍🏫 Instructor Dashboard</h1>
          <p>Manage your courses and monitor student performance.</p>
        </div>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h2>12</h2>
            <p>Total Courses</p>
          </div>

          <div className="dashboard-card">
            <h2>540</h2>
            <p>Total Students</p>
          </div>

          <div className="dashboard-card">
            <h2>45</h2>
            <p>Quizzes Created</p>
          </div>

          <div className="dashboard-card">
            <h2>4.9⭐</h2>
            <p>Average Rating</p>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default InstructorDashboard;