import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="container-registration">
        <div className="container grid grid-two-cols">
          <div className="registration-image">
            <img src="/images/login.jpeg" alt="" width="700" height="500"/>
          </div>
          <div className="registration-form">
            <h2>Adventure starts here</h2>
            <p>Make your adventure easy and fun!</p>
            <input type="text" name="" id="" placeholder="Username" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Password" />
            <button>Sign Up</button>
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
