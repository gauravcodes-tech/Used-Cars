import { Link } from "react-router-dom";
import API from "../../Services/api";
import {
  FaHeart,
  FaGasPump,
  FaCog,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar
} from "react-icons/fa";

import "./CarCard.css";

function CarCard({
  _id,
  image,
  name,
  brand,
  year,
  fuel,
  transmission,
  location,
  rating,
  price,
  featured,
  
})
{
    const token = localStorage.getItem("token");

  const addWishlist = async () => {

    if (!token) {
      alert("Please Login First");
      return;
    }

    try {

      await API.post(`/wishlist/${_id}`);

      alert("Added To Wishlist ❤️");

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Already Added"
      );

    }

  };
  return (
    <div className="premium-card">

      <div className="card-image">

        <img src={image} alt={name} />

        {featured && (
          <div className="featured-badge">
            Featured
          </div>
        )}

        <button
  className="wishlist-btn"
  onClick={addWishlist}
>
  <FaHeart />
</button>

      </div>

      <div className="card-body">

        <div className="rating">
          <FaStar />
          {rating || "4.8"}
        </div>

        <h3>{name}</h3>

        <p className="brand">
          {brand}
        </p>

        <div className="specs">

          <span>
            <FaCalendarAlt />
            {year}
          </span>

          <span>
            <FaGasPump />
            {fuel}
          </span>

          <span>
            <FaCog />
            {transmission}
          </span>

        </div>

        <div className="location">

          <FaMapMarkerAlt />

          {location || "New Delhi"}

        </div>

        <div className="price-row">

          <div>

            <small>Starting From</small>

            <h2>

              ₹ {price.toLocaleString("en-IN")}

            </h2>

          </div>

        </div>

        <Link
          to={`/cars/${_id}`}
          className="details-btn"
        >
          View Details →
        </Link>

      </div>

    </div>
  );
}

export default CarCard;