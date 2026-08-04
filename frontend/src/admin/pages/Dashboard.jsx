import { useEffect, useState } from "react";
import {
  FaCar,
  FaStar,
  FaRupeeSign,
  FaClock,
  FaPlusCircle,
  FaListAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
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
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <h3>Loading Dashboard...</h3>
      </div>
    );
  }

  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2>🚗 Admin Dashboard</h2>
          <p className="text-muted">
            Welcome back! Here's an overview of your inventory.
          </p>
        </div>

        <div>

          <Link
            to="/admin/add-car"
            className="btn btn-success me-2"
          >
            <FaPlusCircle /> Add Car
          </Link>

          <Link
            to="/admin/view-cars"
            className="btn btn-primary"
          >
            <FaListAlt /> View Cars
          </Link>

        </div>

      </div>

      <div className="row">

        <div className="col-lg-3 col-md-6 mb-4">

          <div className="card shadow border-0 h-100">

            <div className="card-body text-center">

              <FaCar
                size={38}
                className="text-primary mb-3"
              />

              <h3>{stats.totalCars}</h3>

              <p className="text-muted">
                Total Cars
              </p>

            </div>

          </div>

        </div>

        <div className="col-lg-3 col-md-6 mb-4">

          <div className="card shadow border-0 h-100">

            <div className="card-body text-center">

              <FaStar
                size={38}
                className="text-warning mb-3"
              />

              <h3>{stats.featuredCars}</h3>

              <p className="text-muted">
                Featured Cars
              </p>

            </div>

          </div>

        </div>

        <div className="col-lg-3 col-md-6 mb-4">

          <div className="card shadow border-0 h-100">

            <div className="card-body text-center">

              <FaRupeeSign
                size={38}
                className="text-success mb-3"
              />

              <h5>
                ₹ {Number(stats.averagePrice).toLocaleString("en-IN")}
              </h5>

              <p className="text-muted">
                Average Price
              </p>

            </div>

          </div>

        </div>

        <div className="col-lg-3 col-md-6 mb-4">

          <div className="card shadow border-0 h-100">

            <div className="card-body text-center">

              <FaClock
                size={38}
                className="text-danger mb-3"
              />

              <h5>
                {stats.latestCar?.name || "N/A"}
              </h5>

              <p className="text-muted">
                Latest Car
              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="card shadow border-0">

        <div className="card-header bg-dark text-white">

          <h5 className="mb-0">
            Recent Cars
          </h5>

        </div>

        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-hover align-middle">

              <thead className="table-light">

                <tr>

                  <th>Name</th>

                  <th>Brand</th>

                  <th>Year</th>

                  <th>Price</th>

                </tr>

              </thead>

              <tbody>

                {stats.recentCars.length === 0 ? (

                  <tr>

                    <td
                      colSpan="4"
                      className="text-center py-4"
                    >
                      No Cars Available
                    </td>

                  </tr>

                ) : (

                  stats.recentCars.map((car) => (

                    <tr key={car._id}>

                      <td>{car.name}</td>

                      <td>{car.brand}</td>

                      <td>{car.year}</td>

                      <td>
                        ₹ {Number(car.price).toLocaleString("en-IN")}
                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;