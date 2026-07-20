import {
  FaHome,
  FaBookOpen,
  FaClipboardList,
  FaChartLine,
  FaUser,
  FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2 className="sidebar-logo">EduNova</h2>

      <ul>

        <li>
          <FaHome />
          Dashboard
        </li>

        <li>
          <FaBookOpen />
          My Courses
        </li>

        <li>
          <FaClipboardList />
          Quizzes
        </li>

        <li>
          <FaChartLine />
          Progress
        </li>

        <li>
          <FaUser />
          Profile
        </li>

        <li>
          <FaSignOutAlt />
          Logout
        </li>

      </ul>

    </aside>
  );
}

export default Sidebar;