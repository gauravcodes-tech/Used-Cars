import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaCarSide,
  FaHeart,
  FaBell,
  FaUserCircle,
  FaChevronDown,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

function Navbar() {

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/login");

  };

  return (

    <header className="header">

      <nav className="navbar">

        {/* Logo */}

        <div className="logo">

          <div className="logo-box">
            <FaCarSide />
          </div>

          <div className="logo-text">

            <h2>UsedCars</h2>

            <span>Premium Marketplace</span>

          </div>

        </div>

        {/* Menu */}

        <ul className="menu">

          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/cars">Cars</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>

          {user?.role === "admin" && (

            <li>

              <NavLink to="/admin">

                Dashboard

              </NavLink>

            </li>

          )}

        </ul>

        {/* Right */}

        <div className="right">

          {user ? (

            <>

              <button className="circle-btn">

                <FaHeart />

                <span>0</span>

              </button>

              <button className="circle-btn">

                <FaBell />

                <span>0</span>

              </button>

              <div className="profile">

                <FaUserCircle className="user-icon" />

                <div>

                  <h4>{user.name}</h4>

                  <small>{user.role}</small>

                </div>

                <FaChevronDown />

              </div>

              <button

                className="logout"

                onClick={handleLogout}

              >

                <FaSignOutAlt />

              </button>

            </>

          ) : (

            <>

              <NavLink
                className="btn btn-outline-primary"
                to="/login"
              >
                Login
              </NavLink>

              <NavLink
                className="btn btn-primary"
                to="/register"
              >
                Register
              </NavLink>

            </>

          )}

        </div>

      </nav>

    </header>

  );

}

export default Navbar;