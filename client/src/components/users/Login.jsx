import { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";

const URL = "http://localhost:5000/api/auth/login";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLs } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const res_data = await response.json();
        storeTokenInLs(res_data.token);
        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      }
      console.log(response);
    } catch (error) {
      console.log("Register", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="login-image"></div>
        <div className="login-area">
          <h2>Welcome to YelpCamp by Tuhar Damahe</h2>
          <p>Please log-in to your account and start the adventure</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <button type="submit">Login</button>
          </form>

          <p>
            New on our platform?
            <Link to="/register"> Create an account</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
