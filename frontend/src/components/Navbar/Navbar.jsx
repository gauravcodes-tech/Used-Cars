import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaCarSide,
  FaHeart,
  FaBell,
  FaUserCircle,
  FaChevronDown,
  FaSignOutAlt,
} from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

function Navbar() {

  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {

    logout();

    navigate("/login");

  };

  return (

    <header className="header">

      <nav className="navbar">

        {/* Logo */}

        <div
          className="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >

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

                Admin Dashboard

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

                  <small>

                    {user.role === "admin"
                      ? "Administrator"
                      : "User"}

                  </small>

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

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >

              <NavLink
                to="/login"
                className="btn btn-outline-dark"
              >

                Login

              </NavLink>

              <NavLink
                to="/register"
                className="btn btn-dark"
              >

                Register

              </NavLink>

            </div>

          )}

        </div>

      </nav>

    </header>

  );

}

export default Navbar;