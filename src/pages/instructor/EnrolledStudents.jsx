import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function EnrolledStudents() {
  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1>Enrolled Students</h1>

        <table className="students-table">

          <thead>

            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Quiz Score</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>Rahul</td>
              <td>React</td>
              <td>9/10</td>
            </tr>

            <tr>
              <td>Priya</td>
              <td>Node.js</td>
              <td>10/10</td>
            </tr>

            <tr>
              <td>Arjun</td>
              <td>MongoDB</td>
              <td>8/10</td>
            </tr>

          </tbody>

        </table>

      </div>

      <Footer />
    </>
  );
}

export default EnrolledStudents;