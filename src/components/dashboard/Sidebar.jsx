import {
  FaHome,
  FaBookOpen,
  FaClipboardList,
  FaChartLine,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <aside className="sidebar">

      <h2 className="sidebar-logo">🎓 EduNova</h2>

      <ul>

        <li>
          <Link to="/student/dashboard">
            <FaHome /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/student/courses">
            <FaBookOpen /> Courses
          </Link>
        </li>

        <li>
          <Link to="/student/quiz">
            <FaClipboardList /> Quizzes
          </Link>
        </li>

        <li>
          <Link to="/student/result">
            <FaChartLine /> Results
          </Link>
        </li>

        <li>
          <Link to="#">
            <FaUser /> Profile
          </Link>
        </li>

        <li onClick={handleLogout} className="logout-btn">
          <FaSignOutAlt /> Logout
        </li>

      </ul>

    </aside>
  );
}

export default Sidebar;