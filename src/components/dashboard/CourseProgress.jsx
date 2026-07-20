function CourseProgress({ course, progress }) {
  return (
    <div className="course-progress">

      <div className="course-header">
        <span>{course}</span>

        <span>{progress}%</span>
      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>

      </div>

    </div>
  );
}

export default CourseProgress;