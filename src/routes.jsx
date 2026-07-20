import { Routes, Route } from "react-router-dom";

// Shared Pages
import Home from "./pages/shared/Home";
import NotFound from "./pages/shared/NotFound";

// Auth Pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Student Pages
import StudentDashboard from "./pages/student/StudentDashboard";
import Courses from "./pages/student/Courses";
import CourseDetails from "./pages/student/CourseDetails";
import LessonViewer from "./pages/student/LessonViewer";
import Quiz from "./pages/student/Quiz";
import QuizResult from "./pages/student/QuizResult";
import Progress from "./pages/student/Progress";
import Profile from "./pages/student/Profile";

// Instructor Pages
import InstructorDashboard from "./pages/instructor/InstructorDashboard";
import CreateCourse from "./pages/instructor/CreateCourse";
import CreateQuiz from "./pages/instructor/CreateQuiz";
import ManageCourses from "./pages/instructor/ManageCourses";
import EnrolledStudents from "./pages/instructor/EnrolledStudents";


function AppRoutes() {

  return (

    <Routes>

      {/* ================= SHARED ================= */}

      <Route path="/" element={<Home />} />


      {/* ================= AUTH ================= */}

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route 
        path="/forgot-password" 
        element={<ForgotPassword />} 
      />


      {/* ================= STUDENT ================= */}

      <Route 
        path="/student/dashboard" 
        element={<StudentDashboard />} 
      />

      <Route 
        path="/courses" 
        element={<Courses />} 
      />

      <Route 
        path="/course/:id" 
        element={<CourseDetails />} 
      />

      <Route 
        path="/lesson/:id" 
        element={<LessonViewer />} 
      />

      <Route 
        path="/quiz/:id" 
        element={<Quiz />} 
      />

      <Route 
        path="/result" 
        element={<QuizResult />} 
      />

      <Route 
        path="/progress" 
        element={<Progress />} 
      />

      <Route 
        path="/profile" 
        element={<Profile />} 
      />


      {/* ================= INSTRUCTOR ================= */}

      <Route 
        path="/instructor/dashboard" 
        element={<InstructorDashboard />} 
      />

      <Route 
        path="/create-course" 
        element={<CreateCourse />} 
      />

      <Route 
        path="/create-quiz" 
        element={<CreateQuiz />} 
      />

      <Route 
        path="/manage-courses" 
        element={<ManageCourses />} 
      />

      <Route 
        path="/students" 
        element={<EnrolledStudents />} 
      />


      {/* ================= 404 ================= */}

      <Route 
        path="*" 
        element={<NotFound />} 
      />

    </Routes>

  );
}


export default AppRoutes;