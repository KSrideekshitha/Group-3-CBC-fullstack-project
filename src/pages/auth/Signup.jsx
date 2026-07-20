import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";


function Signup() {

  return (

    <>

      <Navbar />


      <section className="signup-page">


        <div className="auth-card">


          <h1>
            Create Account
          </h1>


          <p>
            Join LearnVista and start your learning journey.
          </p>




          <form>


            <label>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
            />



            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
            />



            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
            />



            <label>
              Select Role
            </label>


            <select>

              <option>
                Student
              </option>

              <option>
                Instructor
              </option>

            </select>




            <button className="auth-btn">

              Create Account

            </button>



          </form>




          <p className="switch-page">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>



        </div>


      </section>


      <Footer />

    </>

  );

}


export default Signup;