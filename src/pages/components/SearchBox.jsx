import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    console.log(query, "search");
    if (e.key === "Enter") {
      navigate(`/results?search=${query}`);
    }
  };

  return (
    <div className="searchbox-container">
      <div className="search-input-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Search"
          className="searchbox"
        />
      </div>
    </div>
  );
};

export default SearchBox;
