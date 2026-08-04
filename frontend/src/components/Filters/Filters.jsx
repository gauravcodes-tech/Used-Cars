import "./Filters.css";

function Filters({
  brand,
  setBrand,
  fuel,
  setFuel,
  transmission,
  setTransmission,
  price,
  setPrice,
  sort,
  setSort,
}) {
  return (
    <div className="filters-wrapper">

      <select
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      >
        <option value="All">All Brands</option>
        <option value="Toyota">Toyota</option>
        <option value="Hyundai">Hyundai</option>
        <option value="Honda">Honda</option>
        <option value="Maruti Suzuki">Maruti Suzuki</option>
        <option value="Tata">Tata</option>
        <option value="Mahindra">Mahindra</option>
        <option value="Kia">Kia</option>
        <option value="BMW">BMW</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Audi">Audi</option>
      </select>

      <select
        value={fuel}
        onChange={(e) => setFuel(e.target.value)}
      >
        <option value="All">Fuel</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="CNG">CNG</option>
        <option value="Electric">Electric</option>
      </select>

      <select
        value={transmission}
        onChange={(e) => setTransmission(e.target.value)}
      >
        <option value="All">Transmission</option>
        <option value="Manual">Manual</option>
        <option value="Automatic">Automatic</option>
      </select>

      <select
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      >
        <option value="All">Budget</option>
        <option value="10">Under ₹10L</option>
        <option value="15">Under ₹15L</option>
        <option value="20">Under ₹20L</option>
        <option value="30">Under ₹30L</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="low">Price ↑</option>
        <option value="high">Price ↓</option>
        <option value="new">Newest</option>
        <option value="old">Oldest</option>
      </select>

    </div>
  );
}

export default Filters;