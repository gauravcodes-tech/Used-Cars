import "./Dashboard.css";
import {
  FaCar,
  FaUsers,
  FaMoneyBillWave,
  FaClipboardList,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div>

      <h2 className="dashboard-title">
        Dashboard
      </h2>

      <div className="dashboard-cards">

        <div className="card-box">
          <FaCar className="card-icon" />
          <h3>120</h3>
          <p>Total Cars</p>
        </div>

        <div className="card-box">
          <FaUsers className="card-icon" />
          <h3>58</h3>
          <p>Users</p>
        </div>

        <div className="card-box">
          <FaClipboardList className="card-icon" />
          <h3>42</h3>
          <p>Bookings</p>
        </div>

        <div className="card-box">
          <FaMoneyBillWave className="card-icon" />
          <h3>₹12L</h3>
          <p>Revenue</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;