import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "./components/SearchBox";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", marginTop: "20vh" }}>
        <div>
          {" "}
          <img
            id="search-logo"
            src="https://www.girmantech.com/Logo2.svg"
            alt="Girman Tech"
            width={160}
            height={70}
          />
        </div>
        <SearchBox />
      </div>
    </div>
  );
};

export default Home;
