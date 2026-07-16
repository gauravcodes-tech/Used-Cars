import "./Filters.css";

function Filters({
  fuel,
  setFuel,
  sort,
  setSort,
}) {
  return (
    <div className="filters">

      <select
        value={fuel}
        onChange={(e) => setFuel(e.target.value)}
      >

        <option value="All">
          All Fuel
        </option>

        <option value="Petrol">
          Petrol
        </option>

        <option value="Diesel">
          Diesel
        </option>

      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >

        <option value="">
          Sort Price
        </option>

        <option value="low">
          Low to High
        </option>

        <option value="high">
          High to Low
        </option>

      </select>

    </div>
  );
}

export default Filters;