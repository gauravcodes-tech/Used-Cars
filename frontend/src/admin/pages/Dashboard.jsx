import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaCar,
  FaStar,
  FaRupeeSign,
  FaClock,
  FaPlusCircle,
  FaListAlt,
  FaArrowUp,
} from "react-icons/fa";

import API from "../../Services/api";

import "./Dashboard.css";

function Dashboard() {

  const [stats, setStats] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        const res = await API.get("/cars/dashboard");

        setStats(res.data.data);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    };

    fetchDashboard();

  }, []);

  if (loading) {

    return (

      <div className="dashboard-loading">

        Loading Dashboard...

      </div>

    );

  }

  return (

    <div className="dashboard-page">

      {/* Header */}

      <div className="dashboard-header">

        <div>

          <h1>

            Dashboard Overview

          </h1>

          <p>

            Welcome back! Here's your dealership summary.

          </p>

        </div>

        <div className="dashboard-buttons">

          <Link
            to="/admin/add-car"
            className="add-btn"
          >

            <FaPlusCircle />

            Add Car

          </Link>

          <Link
            to="/admin/view-cars"
            className="view-btn"
          >

            <FaListAlt />

            Manage Cars

          </Link>

        </div>

      </div>

      {/* Stats */}

      <div className="stats-grid">

        <div className="stat-card">

          <div className="stat-icon blue">

            <FaCar />

          </div>

          <div>

            <h2>

              {stats.totalCars}

            </h2>

            <span>Total Cars</span>

          </div>

        </div>

        <div className="stat-card">

          <div className="stat-icon yellow">

            <FaStar />

          </div>

          <div>

            <h2>

              {stats.featuredCars}

            </h2>

            <span>Featured Cars</span>

          </div>

        </div>

        <div className="stat-card">

          <div className="stat-icon green">

            <FaRupeeSign />

          </div>

          <div>

            <h2>

              ₹ {(stats.averagePrice / 100000).toFixed(1)}L

            </h2>

            <span>Average Price</span>

          </div>

        </div>

        <div className="stat-card">

          <div className="stat-icon red">

            <FaClock />

          </div>

          <div>

            <h2>

              {stats.latestCar?.year || "--"}

            </h2>

            <span>Latest Model</span>

          </div>

        </div>

      </div>

      {/* Recent Cars */}

      <div className="recent-card">

        <div className="recent-header">

          <h2>

            Recently Added Cars

          </h2>

          <span>

            <FaArrowUp />

            Live Inventory

          </span>

        </div>

        <div className="table-responsive">

          <table className="recent-table">

            <thead>

              <tr>

                <th>Image</th>

                <th>Name</th>

                <th>Brand</th>

                <th>Year</th>

                <th>Fuel</th>

                <th>Price</th>

              </tr>

            </thead>

            <tbody>

              {

                stats.recentCars.map((car)=>(

                  <tr key={car._id}>

                    <td>

                      <img

                        src={car.image}

                        alt={car.name}

                      />

                    </td>

                    <td>

                      {car.name}

                    </td>

                    <td>

                      {car.brand}

                    </td>

                    <td>

                      {car.year}

                    </td>

                    <td>

                      {car.fuel}

                    </td>

                    <td>

                      ₹ {Number(car.price).toLocaleString("en-IN")}

                    </td>

                  </tr>

                ))

              }

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;