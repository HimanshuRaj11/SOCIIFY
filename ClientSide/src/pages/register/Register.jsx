import "./register.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [user, setUser] =useState({
    username:"", email:"", password:"", confirmPassword:""
  })
  let name, value;
 const handleInput = (e)=>{
  name = e.target.name;
  value = e.target.value;
  setUser({...user, [name]:value})
 }

 const PostData =async(e)=>{
  e.preventDefault();
    const {username, email, password, confirmPassword} = user;
    const res = await fetch("/register",{
      method:"POST",
      headers:{
        "Content-type": "application/json"
      },
      body:JSON.stringify({username, email, password, confirmPassword})
    })
    const data = await res.json();
    if (data.status === 422 || !data) {
      console.log("error ! Invalid Data");
    }
    else{
      console.log("Registration Success");
    }
 }
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">SOCIIFY</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on SOCIIFY.
          </span>
        </div>
        <form className="RegisterForm" action="" method="POST">
          <div className="registerRight">
            <div className="registerBox">
              <input value={user.username} name="username" onChange={handleInput} placeholder="Username" className="registerInput" />
              <input value={user.email} name="email" onChange={handleInput} placeholder="Email" className="registerInput" />
              <input value={user.password} name="password" onChange={handleInput} placeholder="Password" className="registerInput" />
              <input value={user.confirmPassword} name="confirmPassword" onChange={handleInput} placeholder="Password Again" className="registerInput" />
              <button className="registerButton" onClick={PostData}>Sign Up</button>
              <NavLink to='/login' className="registerRegisterButton">
                Log into Account
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
