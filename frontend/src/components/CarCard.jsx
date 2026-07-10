import Button from "./Button";
import "./CarCard.css";

function CarCard() {

    return (

        <div className="card">

            <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600"
                alt="car"
            />

            <h2>BMW X5</h2>

            <h3>₹18,50,000</h3>

            <Button text="View Details" />

        </div>

    );

}

export default CarCard;