import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import api from "../../services/api";

function CreateQuiz() {
  const [courses, setCourses] = useState([]);

  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");

  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");

  const [correctAnswer, setCorrectAnswer] = useState(0);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await api.get("/courses");

      setCourses(response.data.courses);

      if (response.data.courses.length > 0) {
        setCourse(response.data.courses[0]._id);
      }
    } catch (error) {
      console.log(error);
      alert("Failed to load courses");
    }
  };

  const handleCreateQuiz = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/quizzes",
        {
          title,
          course,
          questions: [
            {
              question,
              options: [
                optionA,
                optionB,
                optionC,
                optionD,
              ],
              correctAnswer: Number(correctAnswer),
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Quiz Created Successfully");

      setTitle("");
      setQuestion("");
      setOptionA("");
      setOptionB("");
      setOptionC("");
      setOptionD("");
      setCorrectAnswer(0);

    } catch (error) {
      alert(error.response?.data?.message || "Failed to create quiz");
    }
  };

  return (
    <>
      <Navbar />

      <div className="form-page">
        <div className="form-card">

          <h1>Create Quiz</h1>

          <form onSubmit={handleCreateQuiz}>

            <input
              type="text"
              placeholder="Quiz Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            >
              {courses.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.title}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Option A"
              value={optionA}
              onChange={(e) => setOptionA(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Option B"
              value={optionB}
              onChange={(e) => setOptionB(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Option C"
              value={optionC}
              onChange={(e) => setOptionC(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Option D"
              value={optionD}
              onChange={(e) => setOptionD(e.target.value)}
              required
            />

            <label>Correct Answer</label>

            <select
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
            >
              <option value={0}>Option A</option>
              <option value={1}>Option B</option>
              <option value={2}>Option C</option>
              <option value={3}>Option D</option>
            </select>

            <button
              type="submit"
              className="primary-btn"
            >
              Create Quiz
            </button>

          </form>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default CreateQuiz;