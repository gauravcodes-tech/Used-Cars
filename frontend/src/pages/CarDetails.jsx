import { useParams } from "react-router-dom";
import cars from "../data/cars";

function CarDetails() {

  const { id } = useParams();

  const car = cars.find((item) => item.id === Number(id));

  if (!car) {
    return <h2>Car Not Found</h2>;
  }

  return (

    <div className="container py-5">

      <img
        src={car.image}
        alt={car.name}
        style={{
          width: "100%",
          maxWidth: "700px",
          borderRadius: "10px",
        }}
      />

      <br />
      <br />

      <h1>{car.name}</h1>

      <h2 className="text-primary">
        ₹ {car.price.toLocaleString("en-IN")}
      </h2>

      <hr />

      <h5>Year : {car.year}</h5>

      <h5>Fuel : {car.fuel}</h5>

      <h5>Transmission : {car.transmission}</h5>

    </div>

  );
}

export default CarDetails;