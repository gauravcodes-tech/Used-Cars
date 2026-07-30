import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API from "../Services/api";
import staticCars from "../Data/Cars";

function CarDetails() {
  const { id } = useParams();
  const staticCar = staticCars.find((item) => String(item.id) === id);

  const [car, setCar] = useState(staticCar ?? null);
  const [loading, setLoading] = useState(!staticCar);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await API.get(`/cars/${id}`);
        setCar(res.data.data);
      } catch (err) {
        if (staticCar) {
          setCar(staticCar);
        } else {
          setError("Car not found.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id, staticCar]);

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  if (error || !car) {
    return <h2 className="text-center mt-5">{error || "Car not found."}</h2>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6">
          <img
            src={car.image}
            alt={car.name}
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-lg-6">
          <h1>{car.name}</h1>

          <h2 className="text-primary">
            Rs. {car.price.toLocaleString("en-IN")}
          </h2>

          <hr />

          <p>
            <strong>Year:</strong> {car.year}
          </p>

          <p>
            <strong>Fuel:</strong> {car.fuel}
          </p>

          <p>
            <strong>Transmission:</strong> {car.transmission}
          </p>

          <button className="btn btn-success mt-3">
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
