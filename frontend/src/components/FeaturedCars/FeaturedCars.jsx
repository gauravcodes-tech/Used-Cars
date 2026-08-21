import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../Services/api";
import CarCard from "../CarCard/CarCard";

import "./FeaturedCars.css";

function FeaturedCars() {

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchFeaturedCars = async () => {

      try {

        const res = await API.get("/cars");

        const featuredCars = res.data.data
          .filter((car) => car.featured)
          .slice(0, 8);

        setCars(featuredCars);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    };

    fetchFeaturedCars();

  }, []);

  return (

    <section className="featured-section">

      <div className="featured-top">

        <div>

          <span className="section-tag">
            PREMIUM COLLECTION
          </span>

          <h2>
            Featured Used Cars
          </h2>

          <p>

            Explore our hand-picked Featured collection of premium verified used cars from trusted sellers across India.

          </p>

        </div>

        <Link
          to="/cars"
          className="view-all-btn"
        >
          View All Cars →
        </Link>

      </div>

      {

        loading ?

        <div className="loading-cars">

          Loading Featured Cars...

        </div>

        :

        <div className="featured-grid">

          {

            cars.map((car)=>(

              <CarCard

                key={car._id}

                {...car}

              />

            ))

          }

        </div>

      }

    </section>

  );

}

export default FeaturedCars;