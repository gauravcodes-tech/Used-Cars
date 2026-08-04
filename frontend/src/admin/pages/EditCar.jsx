import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../Services/api";

function EditCar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    model: "",
    variant: "",
    year: "",
    price: "",
    kmDriven: "",
    location: "",
    color: "",
    image: "",
    fuel: "Petrol",
    transmission: "Manual",
    owner: "First Owner",
    rating: "",
    featured: false,
  });

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await API.get(`/cars/${id}`);
        setFormData(res.data.data);
      } catch (err) {
        alert("Failed to load car");
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/cars/${id}`, formData);

      alert("Car Updated Successfully");

      navigate("/admin/view-cars");
    } catch (err) {
      alert("Failed to Update Car");
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container py-4">

      <h2 className="mb-4">
        Edit Used Car
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="row">

          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              placeholder="Car Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              placeholder="Brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              placeholder="Model"
              name="model"
              value={formData.model}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              placeholder="Variant"
              name="variant"
              value={formData.variant}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Year"
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="KM Driven"
              name="kmDriven"
              value={formData.kmDriven}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              placeholder="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              placeholder="Color"
              name="color"
              value={formData.color}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              placeholder="Image URL"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <select
              className="form-select"
              name="fuel"
              value={formData.fuel}
              onChange={handleChange}
            >
              <option>Petrol</option>
              <option>Diesel</option>
              <option>CNG</option>
              <option>Electric</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <select
              className="form-select"
              name="transmission"
              value={formData.transmission}
              onChange={handleChange}
            >
              <option>Manual</option>
              <option>Automatic</option>
              <option>CVT</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <select
              className="form-select"
              name="owner"
              value={formData.owner}
              onChange={handleChange}
            >
              <option>First Owner</option>
              <option>Second Owner</option>
              <option>Third Owner</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="number"
              step="0.1"
              className="form-control"
              placeholder="Rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12 mb-3">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />

            <label className="ms-2">
              Featured Car
            </label>
          </div>

        </div>

        <button
          className="btn btn-primary"
          type="submit"
        >
          Update Car
        </button>

      </form>

    </div>
  );
}

export default EditCar;