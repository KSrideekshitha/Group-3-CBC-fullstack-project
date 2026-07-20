import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function ManageCourses() {
  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1>My Courses</h1>

        <div className="dashboard-section">

          <h3>React Development</h3>
          <p>120 Students Enrolled</p>

        </div>

        <div className="dashboard-section">

          <h3>Node.js Masterclass</h3>
          <p>95 Students Enrolled</p>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default ManageCourses;