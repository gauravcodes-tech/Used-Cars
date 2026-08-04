import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SearchHero.css";

function SearchHero() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [brand, setBrand] = useState("");

  const handleSearch = () => {

    navigate(

      `/cars?search=${search}&brand=${brand}`

    );

  };

  return (

<section className="searchHero">

<div className="container">

<div className="searchBox">

<div className="row">

<div className="col-lg-5">

<input

type="text"

className="form-control"

placeholder="Search BMW, Audi, Fortuner..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

</div>

<div className="col-lg-4">

<select

className="form-select"

value={brand}

onChange={(e)=>setBrand(e.target.value)}

>

<option value="">

All Brands

</option>

<option>

BMW

</option>

<option>

Audi

</option>

<option>

Mercedes

</option>

<option>

Toyota

</option>

<option>

Hyundai

</option>

<option>

Tata

</option>

<option>

Mahindra

</option>

</select>

</div>

<div className="col-lg-3">

<button

className="btn btn-dark w-100"

onClick={handleSearch}

>

Search Cars

</button>

</div>

</div>

</div>

</div>

</section>

  );

}

export default SearchHero;