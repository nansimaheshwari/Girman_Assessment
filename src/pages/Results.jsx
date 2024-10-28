import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import usersData from "../data/users.json";
import Navbar from "./components/Navbar";

const Results = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(location.search).get("search") || "";

  useEffect(() => {
    console.log(query, "query");
    if (query) {
      const filteredResults = usersData.filter(
        (user) =>
          user.first_name.toLowerCase().includes(query.toLowerCase()) ||
          user.last_name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    }
  }, [query]);

  return (
    <div>
      {results.length ? (
        <>
          <Navbar />
          <SearchResults results={results} />
        </>
      ) : (
        <p>No results found for "{query}"</p>
      )}
    </div>
  );
};

export default Results;
