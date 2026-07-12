import "./Topbar.css";
import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

function Topbar() {
  return (
    <div className="topbar">

      <div className="search-box">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search cars..."
        />
      </div>

      <div className="topbar-right">

        <FaBell className="icon" />

        <div className="admin-profile">

          <FaUserCircle className="profile-icon" />

          <div>
            <h5>Gaurav</h5>
            <p>Administrator</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Topbar;