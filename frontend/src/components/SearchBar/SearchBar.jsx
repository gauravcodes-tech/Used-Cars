import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">

      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search by brand, model or car name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

export default SearchBar;