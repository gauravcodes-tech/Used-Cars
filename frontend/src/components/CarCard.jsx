import { Link } from "react-router-dom";
import { FaHeart, FaMapMarkerAlt, FaGasPump, FaCog, FaUser, FaRoad } from "react-icons/fa";
import Button from "./Button";
import "./CarCard.css";

function CarCard({
  _id,
  image,
  name,
  brand,
  model,
  variant,
  year,
  fuel,
  transmission,
  kmDriven,
  owner,
  location,
  color,
  price,
  featured,
  rating,
}) {
  return (
    <div className="card">

      <div className="wishlist">
        <FaHeart />
      </div>

      {featured && (
        <div className="featured-badge">
          Featured
        </div>
      )}

      <img src={image} alt={name} />

      <div className="card-body">

        <div className="rating">
          ⭐ {rating}
        </div>

        <h2>{name}</h2>

        <p className="variant">
          {brand} • {variant}
        </p>

        <div className="location">
          <FaMapMarkerAlt />
          <span>{location}</span>
        </div>

        <div className="details-grid">

          <div>
            <FaRoad />
            <span>{kmDriven.toLocaleString()} km</span>
          </div>

          <div>
            <FaUser />
            <span>{owner}</span>
          </div>

          <div>
            <FaGasPump />
            <span>{fuel}</span>
          </div>

          <div>
            <FaCog />
            <span>{transmission}</span>
          </div>

        </div>

        <div className="extra-info">
          <span>{year}</span>
          <span>{color}</span>
        </div>

        <h3>
  ₹ {(price / 100000).toFixed(2)} Lakh
</h3>

        <Link to={`/cars/${_id}`}>
          <Button text="View Details" />
        </Link>

      </div>

    </div>
  );
}

export default CarCard;