import { useEffect, useMemo, useState } from "react";

import API from "../services/api";

import CarCard from "../components/CarCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";

function Cars() {

  const [cars, setCars] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [fuel, setFuel] = useState("All");

  const [sort, setSort] = useState("");

  useEffect(() => {

    const fetchCars = async () => {

      try {

        const res = await API.get("/cars");

        setCars(res.data.data);

      } catch (err) {

        setError("Failed to load cars.");

      } finally {

        setLoading(false);

      }

    };

    fetchCars();

  }, []);

  const filteredCars = useMemo(() => {

    let data = [...cars];

    data = data.filter((car) =>
      car.name.toLowerCase().includes(search.toLowerCase())
    );

    if (fuel !== "All") {

      data = data.filter((car) => car.fuel === fuel);

    }

    if (sort === "low") {

      data.sort((a, b) => a.price - b.price);

    }

    if (sort === "high") {

      data.sort((a, b) => b.price - a.price);

    }

    return data;

  }, [cars, search, fuel, sort]);

  if (loading) {

    return <h2 className="text-center mt-5">Loading Cars...</h2>;

  }

  if (error) {

    return <h2 className="text-center mt-5">{error}</h2>;

  }

  return (

    <div className="container py-5">

      <h1 className="mb-3">
        Available Used Cars
      </h1>

      <p className="text-secondary">
        Browse cars directly from MongoDB.
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

        {

          filteredCars.map((car)=>(

            <div

              className="col-lg-4 col-md-6 mb-4"

              key={car._id}

            >

              <CarCard {...car}/>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default Cars;