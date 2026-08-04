import "./Topbar.css";

import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaChevronDown,
} from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

function Topbar() {

  const { user } = useAuth();

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (

    <header className="admin-topbar">

      {/* Left */}

      <div className="topbar-left">

        <h2>

          Welcome Back 👋

        </h2>

        <span>

          {today}

        </span>

      </div>

      {/* Center */}

      <div className="topbar-search">

        <FaSearch />

        <input
          type="text"
          placeholder="Search Cars..."
        />

      </div>

      {/* Right */}

      <div className="topbar-right">

        <button className="notification-btn">

          <FaBell />

          <span className="notification-badge">

            0

          </span>

        </button>

        <div className="profile-card">

          <FaUserCircle className="profile-icon" />

          <div>

            <h4>

              {user?.name || "Admin"}

            </h4>

            <small>

              {user?.role === "admin"
                ? "Administrator"
                : "User"}

            </small>

          </div>

          <FaChevronDown />

        </div>

      </div>

    </header>

  );

}

export default Topbar;