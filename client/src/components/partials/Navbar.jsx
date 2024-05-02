import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";

const Navbar = () => {
  const { isLoggedIn, user } = useAuth();
  console.log(user);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <NavLink to="/" className="navbar-logo">
            YelpCamp by Tushar Damahe
          </NavLink>
        </div>

        <div className="navbar-right">
          {user && <h3>Hello, {user.userData[0].username}</h3>}
          <NavLink to="/campgrounds" className="navbar-link">
            Campgrounds
          </NavLink>

          {isLoggedIn ? (
            <NavLink to="/logout" className="navbar-link">
              Logout
            </NavLink>
          ) : (
            <>
              <NavLink to="/login" className="navbar-link">
                Login
              </NavLink>
              <NavLink to="/register" className="navbar-link">
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
