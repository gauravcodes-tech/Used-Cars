import { Link } from "react-router-dom";
import { FaHeart, FaMapMarkerAlt, FaGasPump, FaCog, FaUser, FaRoad } from "react-icons/fa";
import Button from "./Button";
import "./CarCard.css";

function CarCard({
  _id,
  id,
  image,
  name,
  brand,
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
  const carId = _id ?? id;
  const variantText = [brand, variant].filter(Boolean).join(" - ");
  const formattedKm = typeof kmDriven === "number"
    ? `${kmDriven.toLocaleString()} km`
    : "KM not listed";
  const formattedPrice = typeof price === "number"
    ? `Rs. ${(price / 100000).toFixed(2)} Lakh`
    : "Price on request";
  const detailFields = [
    { icon: <FaRoad />, value: formattedKm },
    { icon: <FaUser />, value: owner ?? "Owner not listed" },
    { icon: <FaGasPump />, value: fuel ?? "Fuel not listed" },
    { icon: <FaCog />, value: transmission ?? "Transmission not listed" },
  ];

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

        {rating && (
          <div className="rating">
            Rating {rating}
          </div>
        )}

        <h2>{name}</h2>

        {variantText && (
          <p className="variant">
            {variantText}
          </p>
        )}

        {location && (
          <div className="location">
            <FaMapMarkerAlt />
            <span>{location}</span>
          </div>
        )}

        <div className="details-grid">

          {detailFields.map((field) => (
            <div key={field.value}>
              {field.icon}
              <span>{field.value}</span>
            </div>
          ))}

        </div>

        <div className="extra-info">
          {year && <span>{year}</span>}
          {color && <span>{color}</span>}
        </div>

        <h3>
          {formattedPrice}
        </h3>

        {carId && (
          <Link to={`/cars/${carId}`}>
            <Button text="View Details" />
          </Link>
        )}

      </div>

    </div>
  );
}

export default CarCard;
