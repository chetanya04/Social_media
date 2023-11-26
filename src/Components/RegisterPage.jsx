import { useState } from "react";
import {Link} from "react-router-dom"
import React from 'react'
function Main({inputChange}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfrimPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");
  const[username,setUsername]=useState('');


  const handleUsernameChange = (event) => {
    const inputUsername = event.target.value;
    setUsername(inputUsername);
    inputChange(inputUsername); // Pass the entered username to the App
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data, perhaps register the user
  };
  function validate(e) {
    e.preventDefault();

    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setEmailColor("red");
      setErrorEmail("Email should have @gmail");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password should be 8 letters long ");
      setPasswordColor("red");
    }

    if (password != "" && password == confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Passwords didn't matched.");
      setConfirmPasswordColor("red");
    }
  }
  
  return (
    <>
      <div className="card">
        <div className="card-image"></div>

        <form onSubmit={handleSubmit}>
          <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          onClick={validate}
          className="Username"
            placeholder="Username"
            style={{ borderColor: userColor }}
            
          />
          
          <input
            type="text"
            onClick={validate}
            placeholder="Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errorEmail}</p>

          <input
            type="password"
            placeholder="Password"
            onClick={validate}
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errorPassword}</p>
          <input
            type="password"
            placeholder="Confirm Password"
            onClick={validate}
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="error">{errorConfrimPassword}</p>

          <button className="submit-btn" onClick={validate}
          >
          <Link to="/post">
            Submit
            </Link>
          </button>
        </form>
      </div>
       
    </>
  );
}

export default Main;