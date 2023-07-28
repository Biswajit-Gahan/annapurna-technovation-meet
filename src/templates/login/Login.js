import React, { useState } from "react";
import { LoginContainer } from "./login.styles";
import admindb from "../../db/admindb";
import { useDispatch } from "react-redux";
import { updateAdminLogin } from "../../redux/adminSlice";
import { useNavigate } from "react-router-dom";
import { encryptStorage } from "../../app/App";

const Login = () => {
  const [userInput, setUserInput] = useState(() => ({ userid: "", password: "" }));

  const [invalid, setInvalid] = useState(() => (false));

  const dispatch = useDispatch();

  const navigate = useNavigate();

  //  HANDLE USER INPUT
  const handleUserInput = (event) => {
    setInvalid((prevData) => (prevData = false));
    setUserInput((prevData) => ({ ...prevData, [event.target.id]: event.target.value }));
  };

  // HANDLE LOGIN BUTTON
  const handleLoginButton = () => {
    setUserInput((prevData) => ({ ...prevData, userid: "", password: "" }));
    if (userInput.userid !== admindb.userid || userInput.password !== admindb.password || !userInput.userid || !userInput.password) {
      setInvalid((prevData) => (prevData = true));
    } else {
      dispatch(updateAdminLogin({ isLoggedIn: true }));
      navigate("/location");
      encryptStorage.setItem("login", { value: true });
    }
  }

  return (
    <LoginContainer>
      <div className="login-form-container">
        <h3 className="login-greet">Please Login !</h3>
        <input type="text" value={userInput.userid} name="userid" id="userid" className="login-input" placeholder="User ID" onInput={(event) => (handleUserInput(event))} />
        <input type="password" value={userInput.password} name="password" id="password" className="login-input" placeholder="Password" onInput={(event) => (handleUserInput(event))} />
        <button type="button" className="login-button" onClick={handleLoginButton}>Login</button>
        {
          invalid && <p className="credential-error">*Invalid Credentials !</p>
        }
      </div>
    </LoginContainer>
  );
};

export default Login;