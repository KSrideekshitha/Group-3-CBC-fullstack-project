function DashboardCard({ number, title }) {
  return (
    <div className="dashboard-card">

      <div className="dashboard-card-content">
        <h2>{number}</h2>
        <p>{title}</p>
      </div>

    </div>
  );
}

export default DashboardCard;