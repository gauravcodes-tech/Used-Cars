import CarCard from "../components/CarCard";
import cars from "../data/cars";

function Home() {
  return (
    <div style={{ padding: "40px" }}>

      <h1>Find Your Dream Used Car</h1>

      <p>Best marketplace to buy quality used cars.</p>

      <br />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {cars.slice(0, 3).map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            image={car.image}
            name={car.name}
            price={car.price}
            year={car.year}
            fuel={car.fuel}
            transmission={car.transmission}
          />
        ))}
      </div>

    </div>
  );
}

export default Home;