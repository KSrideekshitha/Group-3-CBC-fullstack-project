import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { Link } from "react-router-dom";

function LessonViewer() {
  return (
    <>
      <Navbar />

      <section className="dashboard">

        <div className="dashboard-header">
          <h1>📘 React Components</h1>
          <p>
            Learn the fundamentals of React Components and how they help build
            reusable, maintainable user interfaces.
          </p>
        </div>

        <div className="dashboard-section">

          <h2>📖 Lesson Overview</h2>

          <p style={{ marginTop: "15px", lineHeight: "1.8" }}>
            Components are reusable building blocks of a React application.
            They allow developers to divide the user interface into independent,
            reusable pieces, making applications easier to develop, maintain,
            and scale.
          </p>

        </div>

        <div className="dashboard-section">

          <h2>🎯 Key Learning Points</h2>

          <ul
            className="activity-list"
            style={{ marginTop: "20px" }}
          >
            <li>✅ Functional Components</li>
            <li>✅ JSX Syntax</li>
            <li>✅ Props</li>
            <li>✅ State Management</li>
            <li>✅ Component Reusability</li>
            <li>✅ Component Composition</li>
          </ul>

        </div>

        <div className="dashboard-section">

          <h2>📌 Summary</h2>

          <p style={{ lineHeight: "1.8", marginTop: "15px" }}>
            React components help organize applications into smaller reusable
            pieces. By combining components, developers can build complex user
            interfaces while keeping the code clean and maintainable.
          </p>

        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <button className="primary-btn">
            ✅ Mark as Completed
          </button>

          <Link to="/courses">
            <button className="primary-btn">
              📚 Back to Courses
            </button>
          </Link>
        </div>

      </section>

      <Footer />
    </>
  );
}

export default LessonViewer;