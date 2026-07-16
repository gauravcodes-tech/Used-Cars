import { Link } from "react-router-dom";
import Button from "./Button";
import "./CarCard.css";
import { FaHeart } from "react-icons/fa";

function CarCard({
  id,
  image,
  name,
  price,
  year,
  fuel,
  transmission,
}) {
  return (
    <div className="card">

      <img src={image} alt={name} />

      <div className="wishlist">

    <FaHeart />

</div>

      <div className="card-body">

        <h2>{name}</h2>

        <h3>₹ {price.toLocaleString("en-IN")}</h3>

        <div className="car-info">

          <span>{year}</span>

          <span>{fuel}</span>

          <span>{transmission}</span>

        </div>

        <Link to={`/cars/${id}`}>

          <Button text="View Details" />

        </Link>

      </div>

    </div>
  );
}

export default CarCard;