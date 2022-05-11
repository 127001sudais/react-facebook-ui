import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
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
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />

            <button className="loginButton">
              <Link to="/" style={{ textDecoration: "none" }}>
                Log In
              </Link>
            </button>

            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              <Link to="/register" style={{ textDecoration: "none" }}>
                {" "}
                Create a New Account
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
