import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="dashboard-header">
          <h1>👤 My Profile</h1>
          <p>Manage your account information.</p>
        </div>

        <div className="dashboard-section">

          <h3>Name</h3>
          <p>{user.name || "Student"}</p>

          <br />

          <h3>Email</h3>
          <p>{user.email || "Not Available"}</p>

          <br />

          <h3>Role</h3>
          <p>{user.role || "Student"}</p>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Profile;