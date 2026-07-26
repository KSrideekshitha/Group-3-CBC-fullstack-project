function CourseCard({ title, level, lessons, description }) {
  return (
    <div className="course-card">

      <div className="course-image">
        <h2>{title ? title.charAt(0).toUpperCase() : "C"}</h2>
      </div>

      <div className="course-content">

        <span className="level">{level}</span>

        <h3>{title}</h3>

        <p className="course-description">
          {description || "Enhance your skills with this interactive course."}
        </p>

        <p>📚 {lessons}</p>

        <p>⭐ 4.8 Rating</p>

        <p>👨‍🎓 2,300+ Students</p>

        <button className="primary-btn">
          View Course
        </button>

      </div>

    </div>
  );
}

export default CourseCard;