function ActivityCard({ activity }) {
  return (
    <div className="activity-card">

      <div className="activity-icon">
        📌
      </div>

      <div className="activity-content">
        <p>{activity}</p>
      </div>

    </div>
  );
}

export default ActivityCard;