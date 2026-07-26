import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">🎓 LearnVista</Link>
      </div>

      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>

        <li><Link to="/student/courses">Courses</Link></li>

        <li><Link to="/student/quiz">Quiz</Link></li>

        <li><Link to="/login">Login</Link></li>

        <li>
          <Link className="signup-btn" to="/signup">
            Get Started
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;