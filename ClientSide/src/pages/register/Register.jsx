import "./register.css";
import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">SOCIIFY</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on SOCIIFY.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder="Username" className="registerInput" />
            <input placeholder="Email" className="registerInput" />
            <input placeholder="Password" className="registerInput" />
            <input placeholder="Password Again" className="registerInput" />
            <button className="registerButton">Sign Up</button>
            <NavLink to='/login' className="registerRegisterButton">
              Log into Account
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
