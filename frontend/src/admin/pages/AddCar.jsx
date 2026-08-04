import { useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

function AddCar() {

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    model: "",
    variant: "",
    year: "",
    fuel: "Petrol",
    transmission: "Manual",
    kmDriven: "",
    owner: "First Owner",
    location: "",
    color: "",
    price: "",
    image: "",
    featured: false,
    rating: 4.5
  });
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await API.post("/cars", formData);

      alert("✅ Car Added Successfully");


      setFormData({
        name: "",
        brand: "",
        model: "",
        variant: "",
        year: "",
        fuel: "Petrol",
        transmission: "Manual",
        kmDriven: "",
        owner: "First Owner",
        location: "",
        color: "",
        price: "",
        image: "",
        featured: false,
        rating: 4.5
      });

    } catch (error) {

      console.log("Full Error:", error);

      console.log("Response:", error.response);

      console.log("Data:", error.response?.data);

      alert(error.response?.data?.message || "Failed to Add Car");
      alert("✅ Car Added Successfully");

      navigate("/admin/view-cars");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="container py-4">

      <h2 className="mb-2">
🚗 Add New Used Car
</h2>

<p className="text-muted mb-4">
Fill all required details to publish a used car.
</p>

      <form onSubmit={handleSubmit}>

        <div className="row">

          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              name="name"
              placeholder="Car Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              name="brand"
              placeholder="Brand"
              value={formData.brand}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              name="model"
              placeholder="Model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              name="variant"
              placeholder="Variant"
              value={formData.variant}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="number"
              className="form-control"
              name="year"
              placeholder="Year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="number"
              className="form-control"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="number"
              className="form-control"
              name="kmDriven"
              placeholder="KM Driven"
              value={formData.kmDriven}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              name="color"
              placeholder="Color"
              value={formData.color}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              required
            />
            {formData.image && (
              <div className="mt-3">

                <img
                  src={formData.image}
                  alt="Preview"
                  style={{
                    width: "250px",
                    borderRadius: "12px",
                    border: "1px solid #ddd",
                  }}
                />

              </div>
            )}
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
              <option>Electric</option>
              <option>CNG</option>
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
              className="form-control"
              step="0.1"
              min="1"
              max="5"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            />
          </div>

          <div className="col-12 mb-3">

            <div className="form-check">

              <input
                className="form-check-input"
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
              />

              <label className="form-check-label">

                Featured Car

              </label>

            </div>

          </div>

        </div>

        <button
          className="btn btn-success px-4"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Car"}
        </button>

      </form>

    </div>

  );

}

export default AddCar;