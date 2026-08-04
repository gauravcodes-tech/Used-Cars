import { useEffect, useState } from "react";
import {
  FaCar,
  FaUsers,
  FaStar,
  FaAward,
} from "react-icons/fa";

import API from "../../Services/api";

import "./Statistics.css";

function Statistics() {

  const [stats, setStats] = useState({

    totalCars: 0,

    featuredCars: 0,

    averagePrice: 0,

  });

  useEffect(() => {

    const loadStats = async () => {

      try {

        const res = await API.get("/cars/dashboard");

        setStats(res.data.data);

      } catch (err) {

        console.log(err);

      }

    };

    loadStats();

  }, []);

  return (

<section className="stats">

<div className="container">

<div className="row">

<div className="col-lg-3 col-md-6">

<div className="stat-card">

<FaCar className="icon"/>

<h2>{stats.totalCars}+</h2>

<p>Total Cars</p>

</div>

</div>

<div className="col-lg-3 col-md-6">

<div className="stat-card">

<FaStar className="icon"/>

<h2>{stats.featuredCars}</h2>

<p>Featured Cars</p>

</div>

</div>

<div className="col-lg-3 col-md-6">

<div className="stat-card">

<FaUsers className="icon"/>

<h2>5000+</h2>

<p>Happy Customers</p>

</div>

</div>

<div className="col-lg-3 col-md-6">

<div className="stat-card">

<FaAward className="icon"/>

<h2>10+</h2>

<p>Years Experience</p>

</div>

</div>

</div>

</div>

</section>

  );

}

export default Statistics;