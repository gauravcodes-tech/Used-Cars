import "./Sidebar.css";

import { NavLink, useNavigate } from "react-router-dom";

import {
  FaCarSide,
  FaTachometerAlt,
  FaCar,
  FaPlusCircle,
  FaGlobe,
  FaSignOutAlt,
} from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

function Sidebar() {

  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleLogout = () => {

    if (window.confirm("Logout from Admin Panel?")) {

      logout();

      navigate("/login");

    }

  };

  return (

    <aside className="admin-sidebar">

      {/* ================= LOGO ================= */}

      <div
        className="sidebar-logo"
        onClick={() => navigate("/")}
      >

        <div className="logo-icon">

          <FaCarSide />

        </div>

        <div>

          <h2>UsedCars</h2>

          <span>Premium Admin</span>

        </div>

      </div>

      {/* ================= MENU ================= */}

      <nav className="sidebar-menu">

        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >

          <FaTachometerAlt />

          <span>Dashboard</span>

        </NavLink>

        <NavLink
          to="/admin/view-cars"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >

          <FaCar />

          <span>Manage Cars</span>

        </NavLink>

        <NavLink
          to="/admin/add-car"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >

          <FaPlusCircle />

          <span>Add New Car</span>

        </NavLink>

      </nav>

      {/* ================= BOTTOM ================= */}

      <div className="sidebar-footer">

        <button
          className="website-btn"
          onClick={() => navigate("/")}
        >

          <FaGlobe />

          Main Website

        </button>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>

  );

}

export default Sidebar;