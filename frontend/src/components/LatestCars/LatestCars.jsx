import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../Services/api";
import CarCard from "../CarCard/CarCard";

import "./LatestCars.css";

function LatestCars() {

  const [cars, setCars] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchLatestCars = async () => {

      try {

        const res = await API.get("/cars");

        const latest = res.data.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 4);

        setCars(latest);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    };

    fetchLatestCars();

  }, []);

  if (loading) {

    return (

      <section className="latest-section">

        <h2>Loading Latest Cars...</h2>

      </section>

    );

  }

  return (

    <section className="latest-section">

      <div className="latest-header">

        <div>

          <h2>Latest Arrivals</h2>

          <p>

            Recently added cars from our marketplace.

          </p>

        </div>

        <Link

          to="/cars"

          className="view-all"

        >

          View All →

        </Link>

      </div>

      <div className="latest-grid">

        {

          cars.map((car) => (

            <CarCard

              key={car._id}

              {...car}

            />

          ))

        }

      </div>

    </section>

  );

}

export default LatestCars;