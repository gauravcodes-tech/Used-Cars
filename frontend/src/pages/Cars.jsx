import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API from "../Services/api";

import CarCard from "../components/CarCard/CarCard";
import SearchBar from "../components/SearchBar/SearchBar";
import Filters from "../components/Filters/Filters";

import "./Cars.css";

function Cars() {

  const [searchParams] = useSearchParams();

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [brand, setBrand] = useState(
    searchParams.get("brand") || "All"
  );

  const [fuel, setFuel] = useState("All");
  const [transmission, setTransmission] = useState("All");
  const [price, setPrice] = useState("All");
  const [sort, setSort] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const carsPerPage = 12;

  // =========================
  // Fetch Cars
  // =========================

  useEffect(() => {

    const fetchCars = async () => {

      try {

        const res = await API.get("/cars");

        setCars(res.data.data);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    };

    fetchCars();

  }, []);

  // =========================
  // Brand From URL
  // =========================

  useEffect(() => {

    const selectedBrand = searchParams.get("brand");

    if (selectedBrand) {

      setBrand(selectedBrand);

    } else {

      setBrand("All");

    }

    setCurrentPage(1);

  }, [searchParams]);

  // =========================
  // Filter Cars
  // =========================

  const filteredCars = useMemo(() => {

    let data = [...cars];

    const keyword = search.toLowerCase().trim();

    if (keyword) {

      data = data.filter(

        (car) =>

          car.name?.toLowerCase().includes(keyword) ||

          car.brand?.toLowerCase().includes(keyword) ||

          car.model?.toLowerCase().includes(keyword)

      );

    }

    if (brand !== "All") {

      data = data.filter(

        (car) => car.brand === brand

      );

    }

    if (fuel !== "All") {

      data = data.filter(

        (car) => car.fuel === fuel

      );

    }

    if (transmission !== "All") {

      data = data.filter(

        (car) => car.transmission === transmission

      );

    }

    if (price === "10") {

      data = data.filter(

        (car) => car.price <= 1000000

      );

    }

    if (price === "15") {

      data = data.filter(

        (car) => car.price <= 1500000

      );

    }

    if (price === "20") {

      data = data.filter(

        (car) => car.price <= 2000000

      );

    }

    if (price === "30") {

      data = data.filter(

        (car) => car.price <= 3000000

      );

    }

    if (sort === "low") {

      data.sort((a, b) => a.price - b.price);

    }

    if (sort === "high") {

      data.sort((a, b) => b.price - a.price);

    }

    if (sort === "new") {

      data.sort((a, b) => b.year - a.year);

    }

    if (sort === "old") {

      data.sort((a, b) => a.year - b.year);

    }

    return data;

  }, [

    cars,

    search,

    brand,

    fuel,

    transmission,

    price,

    sort,

  ]);

  const indexOfLastCar = currentPage * carsPerPage;

  const indexOfFirstCar = indexOfLastCar - carsPerPage;

  const currentCars = filteredCars.slice(

    indexOfFirstCar,

    indexOfLastCar

  );

  const totalPages = Math.ceil(

    filteredCars.length / carsPerPage

  );

  if (loading) {

    return (

      <div className="loading-page">

        Loading Cars...

      </div>

    );

  }

  return (

    <div className="cars-page">

      <div className="cars-header">

        <div>

          <h1>

            Explore Premium Used Cars

          </h1>

          <p>

            Find verified used cars from trusted sellers.

          </p>

        </div>

        <div className="cars-stats">

          <div className="stat-box">

            <h2>

              {cars.length}+

            </h2>

            <span>

              Cars

            </span>

          </div>

          <div className="stat-box">

            <h2>

              100%

            </h2>

            <span>

              Verified

            </span>

          </div>

        </div>

      </div>

      <div className="filters-card">

        <SearchBar

          search={search}

          setSearch={setSearch}

        />

        <Filters

          brand={brand}

          setBrand={setBrand}

          fuel={fuel}

          setFuel={setFuel}

          transmission={transmission}

          setTransmission={setTransmission}

          price={price}

          setPrice={setPrice}

          sort={sort}

          setSort={setSort}

        />

      </div>

      <div className="results-bar">

        <span>

          Showing

          <strong>

            {" "}

            {filteredCars.length}

          </strong>

          {" "}Cars

        </span>

      </div>

      <div className="cars-grid">

        {

          currentCars.map((car)=>(

            <CarCard

              key={car._id}

              {...car}

            />

          ))

        }

      </div>

      {

        totalPages > 1 && (

          <div className="pagination">

            <button

              disabled={currentPage===1}

              onClick={()=>setCurrentPage(currentPage-1)}

            >

              Previous...

            </button>

            <span>

              {currentPage} / {totalPages}

            </span>

            <button

              disabled={currentPage===totalPages}

              onClick={()=>setCurrentPage(currentPage+1)}

            >

              Next...

            </button>

          </div>

        )

      }

    </div>

  );

}

export default Cars;