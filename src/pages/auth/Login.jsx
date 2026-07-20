import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";


function Login() {

  const navigate = useNavigate();

  const [role, setRole] = useState("student");


  const handleLogin = () => {

    if(role === "student"){

      navigate("/student/dashboard");

    }
    else if(role === "instructor"){

      navigate("/instructor/dashboard");

    }

  };


  return (

    <>

      <Navbar />


      <section className="auth-page">


        <div className="auth-left">


          <h1>
            Welcome Back to LearnVista
          </h1>


          <p>
            Continue your learning journey,
            access courses, track progress,
            and achieve your goals.
          </p>


          <ul>

            <li>
              📚 Access Premium Courses
            </li>

            <li>
              📝 Take Interactive Quizzes
            </li>

            <li>
              📈 Track Learning Progress
            </li>

            <li>
              🏆 Earn Certificates
            </li>


          </ul>


        </div>



        <div className="auth-right">


          <div className="auth-card">


            <h2>
              Login
            </h2>


            <p>
              Sign in to continue learning.
            </p>



            <form>


              <div className="form-group">

                <label>
                  Email
                </label>


                <input
                  type="email"
                  placeholder="Enter your email"
                />


              </div>




              <div className="form-group">


                <label>
                  Password
                </label>


                <input
                  type="password"
                  placeholder="Enter password"
                />


              </div>





              <div className="form-group">


                <label>
                  Login As
                </label>


                <select

                  value={role}

                  onChange={(e)=>setRole(e.target.value)}

                >

                  <option value="student">
                    Student
                  </option>


                  <option value="instructor">
                    Instructor
                  </option>


                </select>


              </div>




              <div className="forgot-password">

                <Link to="/forgot-password">
                  Forgot Password?
                </Link>

              </div>




              <button

                type="button"

                className="auth-btn"

                onClick={handleLogin}

              >

                Login

              </button>



            </form>



            <p className="switch-page">

              Don't have an account?

              <Link to="/signup">
                Sign Up
              </Link>


            </p>



          </div>


        </div>


      </section>



      <Footer />


    </>

  );

}


export default Login;