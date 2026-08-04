import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import API from "../../Services/api";

import "./Brands.css";

const brands = [
  {
    name: "BMW",
    image: "/brands/bmw.png",
  },
  {
    name: "Mercedes",
    image: "/brands/mercedes.png",
  },
  {
    name: "Audi",
    image: "/brands/audi.png",
  },
  {
    name: "Toyota",
    image: "/brands/toyota.png",
  },
  {
    name: "Volkswagen",
    image: "/brands/volkswagen.png",
  },
  {
    name: "Hyundai",
    image: "/brands/hyundai.png",
  },
  {
    name: "Mahindra",
    image: "/brands/mahindra.png",
  },
  {
    name: "Tata",
    image: "/brands/tata.png",
  },
];

function Brands() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================
  // FETCH LIVE CARS
  // =========================

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await API.get("/cars");

        setCars(res.data.data || []);
      } catch (error) {
        console.error("Failed to load brand counts:", error);
        setCars([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // =========================
  // LIVE BRAND COUNTS
  // =========================

  const brandCounts = useMemo(() => {
    const counts = {};

    cars.forEach((car) => {
      if (!car.brand) return;

      const carBrand = car.brand.trim().toLowerCase();

      counts[carBrand] = (counts[carBrand] || 0) + 1;
    });

    return counts;
  }, [cars]);

  // =========================
  // GET COUNT
  // =========================

  const getBrandCount = (brandName) => {
    return brandCounts[brandName.toLowerCase()] || 0;
  };

  return (
    <section className="brands-section">

      <div className="brands-header">

        <div>

          <span className="section-tag">
            POPULAR BRANDS
          </span>

          <h2>
            Browse by Brand
          </h2>

          <p>
            Choose from India's most trusted car manufacturers.
          </p>

        </div>

        <Link
          to="/cars"
          className="brands-btn"
        >
          View All Cars →
        </Link>

      </div>

      <div className="brands-grid">

        {brands.map((brand) => {
          const count = getBrandCount(brand.name);

          return (
            <Link
              key={brand.name}
              to={`/cars?brand=${encodeURIComponent(brand.name)}`}
              className="brand-card"
            >

              <img
                src={brand.image}
                alt={`${brand.name} logo`}
              />

              <h4>
                {brand.name}
              </h4>

              <span>
                {loading
                  ? "Loading..."
                  : `${count} ${count === 1 ? "Car" : "Cars"}`}
              </span>

            </Link>
          );
        })}

      </div>

    </section>
  );
}

export default Brands;