import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  FaTachometerAlt,
  FaCar,
  FaPlusCircle,
  FaEdit,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (

    <div className="sidebar">

      <div className="logo">

  <h2>🚗 UsedCars</h2>

  <span>Admin Panel</span>

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


      </ul>

     <div
  className="logout"
  onClick={() => {

  if(window.confirm("Logout from Admin Panel?")){

      logout();

navigate("/login");

  }

}}
>

  <FaSignOutAlt />

  Logout

</div>

    </div>
  );
}

export default Sidebar;