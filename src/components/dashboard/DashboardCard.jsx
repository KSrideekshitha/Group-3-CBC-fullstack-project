function DashboardCard({ number, title }) {
  return (
    <div className="dashboard-card">

      <h2>{number}</h2>

      <p>{title}</p>

    </div>
  );
}

export default DashboardCard;