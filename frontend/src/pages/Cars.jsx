import { useMemo, useState } from "react";

import cars from "../data/cars";
import CarCard from "../components/CarCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";

function Cars() {

  const [search, setSearch] = useState("");

  const [fuel, setFuel] = useState("All");

  const [sort, setSort] = useState("");

  const filteredCars = useMemo(() => {

    let data = [...cars];

    // Search

    data = data.filter((car) =>
      car.name.toLowerCase().includes(search.toLowerCase())
    );

    // Fuel Filter

    if (fuel !== "All") {
      data = data.filter((car) => car.fuel === fuel);
    }

    // Sorting

    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;

  }, [search, fuel, sort]);

  return (

    <div className="container py-5">

      <h1 className="mb-3">
        Available Used Cars
      </h1>

      <p className="text-secondary mb-4">
        Browse certified used cars.
      </p>

      <SearchBar

        search={search}

        setSearch={setSearch}

      />

      <Filters

        fuel={fuel}

        setFuel={setFuel}

        sort={sort}

        setSort={setSort}

      />

      <div className="row">

        {filteredCars.length === 0 ? (

          <h3>No Cars Found</h3>

        ) : (

          filteredCars.map((car) => (

            <div
              className="col-lg-4 col-md-6 mb-4"
              key={car.id}
            >

              <CarCard {...car} />

            </div>

          ))

        )}

      </div>

    </div>

  );

}

export default Cars;