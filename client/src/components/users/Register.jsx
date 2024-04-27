import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container-registration">
        <div className="container grid grid-two-cols">
          <div className="registration-image">
            <img src="/images/login.jpeg" alt="" width="700" height="500" />
          </div>
          <div className="registration-form">
            <h2>Adventure starts here</h2>
            <p>Make your adventure easy and fun!</p>

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  required
                  autoComplete="off"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="username">Email</label>
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
                <label htmlFor="username">Password</label>
                <input
                  type="password"
                  name="password"
                  id="passsword"
                  placeholder="Password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>

            <p>
              Already have an account?
              <Link to="/login"> Login instead</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
