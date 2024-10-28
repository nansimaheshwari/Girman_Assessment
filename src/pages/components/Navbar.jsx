import { Link, useLocation } from "react-router-dom";
import SearchBox from "./SearchBox";

const Navbar = () => {
  const location = useLocation();

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
        <SearchBox />
      ) : (
        <ul className="nav-items-list">
          <Link to="/">
            <li className="nav-item">SEARCH</li>
          </Link>
          <Link to="https://www.girmantech.com/">
            <li className="nav-item">WEBSITE</li>
          </Link>
          <Link to="https://www.linkedin.com/company/girmantech/">
            <li className="nav-item">LINKEDIN</li>
          </Link>
          <Link to="mailto:contact@girmantech.com">
            <li className="nav-item">CONTACT</li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
