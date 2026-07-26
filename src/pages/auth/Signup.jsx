import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../services/auth";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";


function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleSignup = async (e) => {
  e.preventDefault();

  try {
    await registerUser({
      name,
      email,
      password,
      role,
    });

    alert("Registration Successful");
    navigate("/login");

  } catch (error) {
    alert(error.response?.data?.message || "Registration Failed");
  }
 };
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




          <form onSubmit={handleSignup}>


            <label>
              Full Name
            </label>

            <input
            type="text"
            placeholder="Enter your full name"
           value={name}
           onChange={(e) => setName(e.target.value)}
           />



            <label>
              Email
            </label>

            <input
            type="email"
           placeholder="Enter your email"
           value={email}
            onChange={(e) => setEmail(e.target.value)}
            />



            <label>
              Password
            </label>

            <input
             type="password"
            placeholder="Create password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           />



            <label>
              Select Role
            </label>


            <select
             value={role}
             onChange={(e) => setRole(e.target.value)}
             >
              <option value="student">Student</option>

             <option value="instructor">Instructor</option>
                
            </select>




            <button  type="submit"
              className="auth-btn">

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