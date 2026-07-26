import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import api from "../../services/api";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/courses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCourses(response.data.courses);
    } catch (error) {
      console.log(error);
      alert("Failed to load courses");
    }
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <section className="courses-page">
        <h1>Explore Courses</h1>

        <p className="courses-subtitle">
          Discover expert-led courses and upgrade your skills.
        </p>

        <div className="course-filter">
          <input
            type="text"
            placeholder="Search courses..."
            className="course-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select className="category-select">
            <option>All Categories</option>
          </select>
        </div>

        <div className="all-courses">
          {filteredCourses.length === 0 ? (
            <h3>No Courses Available</h3>
          ) : (
            filteredCourses.map((course) => (
              <div className="course-card" key={course._id}>
                <h2>{course.title}</h2>

                <p>{course.description}</p>

                <button>View Course</button>
              </div>
            ))
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Courses;