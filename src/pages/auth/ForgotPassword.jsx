import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="forgot-page">

      <div className="auth-card">

        <h1>Reset Password</h1>

        <p>
          Enter your email and we will send you a password reset link.
        </p>

        <form>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button className="auth-btn">
            Send Reset Link
          </button>

        </form>

        <p className="switch-page">
          Remember your password?
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;