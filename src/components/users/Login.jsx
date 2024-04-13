import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="login-image"></div>
        <div className="login-area">
          <h2>Welcome to YelpCamp by Tuhar Damahe</h2>
          <p>Please log-in to your account and start the adventure</p>
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
          <button>Login</button>
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
