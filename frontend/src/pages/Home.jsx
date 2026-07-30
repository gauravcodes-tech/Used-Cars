import Hero from "../components/Hero";
import CarCard from "../components/CarCard";
import cars from "../Data/Cars";

function Home() {

  return (

    <>

      <Hero />

      <div className="container py-5">

        <h2 className="mb-4">
          Featured Cars
        </h2>

        <div className="row">

          {cars.slice(0,3).map((car)=>(

            <div
              className="col-lg-4"
              key={car.id}
            >

              <CarCard
                {...car}
              />

            </div>

          ))}

        </div>

      </div>

    </>

  );

}

export default Home;
