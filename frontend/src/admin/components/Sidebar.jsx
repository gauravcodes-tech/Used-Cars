import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaCar,
  FaPlusCircle,
  FaEdit,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo">
        🚗 Used Cars
      </div>

      <ul>

        <li>
          <NavLink to="/admin">
            <FaTachometerAlt />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/view-cars">
            <FaCar />
            View Cars
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/add-car">
            <FaPlusCircle />
            Add Car
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/edit-car">
            <FaEdit />
            Edit Car
          </NavLink>
        </li>

      </ul>

      <div className="logout">

        <FaSignOutAlt />

        Logout

      </div>

    </div>
  );
}

export default Sidebar;