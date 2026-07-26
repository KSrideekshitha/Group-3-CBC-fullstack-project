function CourseProgress({ course, progress }) {
  return (
    <div className="course-progress">

      <div className="course-header">
        <h4>{course}</h4>
        <span>{progress}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <small>
        {progress === 100
          ? "✅ Course Completed"
          : `${100 - progress}% remaining`}
      </small>

    </div>
  );
}

export default CourseProgress;