import CarCard from "../components/CarCard";
import cars from "../data/cars";

function Cars() {
  return (
    <div className="container py-5">

      <h1 className="mb-3">Available Used Cars</h1>

      <p className="text-secondary mb-5">
        Browse our latest collection of certified used cars.
      </p>

      <div className="row">

        {cars.map((car) => (

          <div
            className="col-lg-4 col-md-6 mb-4"
            key={car.id}
          >

            <CarCard
              id={car.id}
              image={car.image}
              name={car.name}
              price={car.price}
              year={car.year}
              fuel={car.fuel}
              transmission={car.transmission}
            />

          </div>

        ))}

      </div>

    </div>
  );
}

export default Cars;