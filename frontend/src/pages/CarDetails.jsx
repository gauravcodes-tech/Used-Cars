import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API from "../services/api";

function CarDetails() {

  const { id } = useParams();

  const [car, setCar] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    const fetchCar = async () => {

      try {

        const res = await API.get(`/cars/${id}`);

        setCar(res.data.data);

      } catch (err) {

        setError("Car not found.");

      } finally {

        setLoading(false);

      }

    };

    fetchCar();

  }, [id]);

  if (loading) {

    return <h2 className="text-center mt-5">Loading...</h2>;

  }

  if (error) {

    return <h2 className="text-center mt-5">{error}</h2>;

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

            ₹ {car.price.toLocaleString("en-IN")}

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