import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function Progress() {
  return (
    <>
      <Navbar />

      <section className="progress-page">

        <div className="progress-header">

          <h1>My Learning Progress</h1>

          <p>
            Track your enrolled courses, quiz scores, and achievements.
          </p>

        </div>

        {/* Summary Cards */}

        <div className="summary-grid">

          <div className="summary-card">

            <h2>8</h2>

            <p>Courses Enrolled</p>

          </div>

          <div className="summary-card">

            <h2>5</h2>

            <p>Courses Completed</p>

          </div>

          <div className="summary-card">

            <h2>92%</h2>

            <p>Average Quiz Score</p>

          </div>

          <div className="summary-card">

            <h2>4</h2>

            <p>Certificates</p>

          </div>

        </div>

        {/* Course Progress */}

        <div className="progress-table">

          <h2>Course Progress</h2>

          <table>

            <thead>

              <tr>

                <th>Course</th>

                <th>Progress</th>

                <th>Quiz Score</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>React Development</td>

                <td>80%</td>

                <td>9/10</td>

                <td>In Progress</td>

              </tr>

              <tr>

                <td>Node.js</td>

                <td>100%</td>

                <td>10/10</td>

                <td>Completed</td>

              </tr>

              <tr>

                <td>MongoDB</td>

                <td>45%</td>

                <td>--</td>

                <td>Learning</td>

              </tr>

              <tr>

                <td>Java Programming</td>

                <td>70%</td>

                <td>8/10</td>

                <td>In Progress</td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* Recent Activity */}

        <div className="activity-box">

          <h2>Recent Activity</h2>

          <ul>

            <li>✅ Completed React Quiz (9/10)</li>

            <li>📚 Finished Lesson 12 - React Hooks</li>

            <li>🏆 Earned Node.js Certificate</li>

            <li>🎯 Enrolled in MongoDB Course</li>

          </ul>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Progress;