import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function LessonViewer() {
  return (
    <>
      <Navbar />

      <div className="lesson-page">

        <h1>React Components</h1>

        <p>
          Components are reusable building blocks of a React
          application. They help organize UI into independent,
          reusable pieces.
        </p>

        <h3>Key Points</h3>

        <ul>

          <li>Functional Components</li>
          <li>Props</li>
          <li>State</li>
          <li>Component Reusability</li>

        </ul>

        <button className="primary-btn">
          Mark as Completed
        </button>

      </div>

      <Footer />
    </>
  );
}

export default LessonViewer;