import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">beta</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on beta.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">
              <Link to="/" style={{ textDecoration: "none" }}>
                Sign Up
              </Link>
            </button>
            <button className="loginRegisterButton">
              <Link to="/login" style={{ textDecoration: "none" }}>
                Log into Account
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
