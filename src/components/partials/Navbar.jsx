import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <NavLink to="/" className="navbar-logo">
            YelpCamp by Tushar Damahe
          </NavLink>
        </div>

        <div className="navbar-right">
          <NavLink to="/campgrounds" className="navbar-link">
            Campgrounds
          </NavLink>
          <NavLink to="/login" className="navbar-link">
            Login
          </NavLink>
          <NavLink to="/register" className="navbar-link">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
