import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../Services/api";
import CarCard from "../CarCard/CarCard";

function LatestCars() {

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchLatestCars = async () => {

      try {

        const res = await API.get("/cars");

        const latest = res.data.data
          .sort(
            (a, b) =>
              new Date(b.createdAt) -
              new Date(a.createdAt)
          )
          .slice(0, 6);

        setCars(latest);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    };

    fetchLatestCars();

  }, []);

  if (loading) {

    return (
      <div className="container text-center py-5">

        <div className="spinner-border"></div>

      </div>
    );

  }

  return (

<section className="container py-5">

<div className="d-flex justify-content-between align-items-center mb-4">

<div>

<h2>

Latest Arrivals

</h2>

<p className="text-muted">

Recently Added Cars

</p>

</div>

<Link

to="/cars"

className="btn btn-outline-dark"

>

View All

</Link>

</div>

<div className="row">

{

cars.map((car)=>(

<div

className="col-lg-4 col-md-6 mb-4"

key={car._id}

>

<CarCard {...car}/>

</div>

))

}

</div>

</section>

  );

}

export default LatestCars;