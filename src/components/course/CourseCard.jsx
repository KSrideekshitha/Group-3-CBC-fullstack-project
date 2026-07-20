function CourseCard({ title, level, lessons }) {
  return (
    <div className="course-card">

      <div className="course-image">

        <h2>{title.charAt(0)}</h2>

      </div>

      <div className="course-content">

        <span className="level">{level}</span>

        <h3>{title}</h3>

        <p>📖 {lessons}</p>

        <p>⭐ 4.8 (1,250 Reviews)</p>

        <p>👨‍🎓 2,300 Students</p>

        <button>
          View Course
        </button>

      </div>

    </div>
  );
}

export default CourseCard;