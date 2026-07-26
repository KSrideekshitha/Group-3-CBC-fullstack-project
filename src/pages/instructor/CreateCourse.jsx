import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import api from "../../services/api";

function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const handleCreateCourse = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/courses",
        {
          title,
          description,
          category,
          thumbnail,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Course Created Successfully");

      setTitle("");
      setDescription("");
      setCategory("");
      setThumbnail("");

    } catch (error) {
      alert(error.response?.data?.message || "Failed to create course");
    }
  };

  return (
    <>
      <Navbar />

      <div className="form-page">
        <div className="form-card">

          <h1>Create Course</h1>

          <form onSubmit={handleCreateCourse}>

            <input
              type="text"
              placeholder="Course Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <textarea
              rows="5"
              placeholder="Course Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>

            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Thumbnail URL"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />

            <button
              type="submit"
              className="primary-btn"
            >
              Create Course
            </button>

          </form>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default CreateCourse;