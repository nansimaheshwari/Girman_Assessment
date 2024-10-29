import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import SearchBox from "./SearchBox";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navigation-bar">
      <div className="logo-container">
        <Link to="/">
          <img
            id="main-logo"
            src="https://www.girmantech.com/Logo2.svg"
            alt="Girman Tech"
            width={160}
            height={70}
          />
        </Link>
      </div>

      {location.pathname.includes("results") ? (
        <div className="searchbox-wrapper">
          <SearchBox />
        </div>
      ) : (
        <>
          <div className="hamburger-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <div className={`nav-items ${isMobileMenuOpen ? "show" : ""}`}>
            <ul className="nav-items-list">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <li className="nav-item">SEARCH</li>
              </Link>
              <Link
                to="https://www.girmantech.com/"
                onClick={() => setMobileMenuOpen(false)}
              >
                <li className="nav-item">WEBSITE</li>
              </Link>
              <Link
                to="https://www.linkedin.com/company/girmantech/"
                onClick={() => setMobileMenuOpen(false)}
              >
                <li className="nav-item">LINKEDIN</li>
              </Link>
              <Link
                to="mailto:contact@girmantech.com"
                onClick={() => setMobileMenuOpen(false)}
              >
                <li className="nav-item">CONTACT</li>
              </Link>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
