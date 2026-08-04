import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import API from "../../Services/api";

function ViewCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const res = await API.get("/cars");
      setCars(res.data.data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  };

  const deleteCar = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this car?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/cars/${id}`);

      alert("✅ Car Deleted Successfully");

      fetchCars();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-center py-5">
        <h3>Loading Cars...</h3>
      </div>
    );
  }

  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>

          <h2>🚗 View Cars</h2>

          <p className="text-muted">
            Manage all available cars
          </p>

        </div>

        <div className="alert alert-primary mb-0">

          <strong>Total Cars : {cars.length}</strong>

        </div>

      </div>

      <div className="row mb-4">

        <div className="col-md-5">

          <div className="input-group">

            <span className="input-group-text">
              <FaSearch />
            </span>

            <input
              type="text"
              className="form-control"
              placeholder="Search by Car Name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </div>

      </div>

      <div className="table-responsive">

        <table className="table table-hover table-bordered align-middle">

          <thead className="table-dark">

            <tr>

              <th>Image</th>

              <th>Name</th>

              <th>Brand</th>

              <th>Year</th>

              <th>Price</th>

              <th>Status</th>

              <th>Edit</th>

              <th>Delete</th>

            </tr>

          </thead>

          <tbody>

            {filteredCars.length === 0 ? (

              <tr>

                <td
                  colSpan="8"
                  className="text-center py-4"
                >
                  No Cars Found
                </td>

              </tr>

            ) : (

              filteredCars.map((car) => (

                <tr key={car._id}>

                  <td>

                    <img
                      src={car.image}
                      alt={car.name}
                      style={{
                        width: "120px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />

                  </td>

                  <td>

                    <strong>{car.name}</strong>

                  </td>

                  <td>{car.brand}</td>

                  <td>{car.year}</td>

                  <td>

                    ₹ {Number(car.price).toLocaleString("en-IN")}

                  </td>

                  <td>

                    {car.featured ? (

                      <span className="badge bg-success">

                        Featured

                      </span>

                    ) : (

                      <span className="badge bg-secondary">

                        Normal

                      </span>

                    )}

                  </td>

                  <td>

                    <Link
                      to={`/admin/edit-car/${car._id}`}
                      className="btn btn-warning"
                    >
                      <FaEdit />
                    </Link>

                  </td>

                  <td>

                    <button
                      className="btn btn-outline-danger"
                      onClick={() => deleteCar(car._id)}
                    >
                      <FaTrash />
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ViewCars;