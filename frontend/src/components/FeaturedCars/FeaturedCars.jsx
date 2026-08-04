import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../Services/api";
import CarCard from "../CarCard/CarCard";

function FeaturedCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedCars = async () => {
      try {
        const res = await API.get("/cars");

        const featured = res.data.data
          .filter((car) => car.featured)
          .slice(0, 6);

        setCars(featured);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedCars();
  }, []);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  return (
    <section className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>

          <h2>Featured Cars</h2>

          <p className="text-muted">
            Hand-picked premium used cars
          </p>

        </div>

        <Link
          to="/cars"
          className="btn btn-dark"
        >
          View All Cars
        </Link>

      </div>

      <div className="row">

        {cars.length === 0 ? (

          <div className="col-12 text-center">

            <h5>No Featured Cars Available</h5>

          </div>

        ) : (

          cars.map((car) => (

            <div
              className="col-lg-4 col-md-6 mb-4"
              key={car._id}
            >
              <CarCard {...car} />
            </div>

          ))

        )}

      </div>

    </section>
  );
}

export default FeaturedCars;