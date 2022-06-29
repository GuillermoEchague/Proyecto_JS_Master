import React, { useState } from "react";
import "./LoginForm.css";
import { signInApi } from "../../api/user";

export default function LoginForm() {
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
  });

  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();

    const result = await signInApi(inputs);
    console.log(result);
    //  if(result.message){
    //     notification["error"]({
    //     message:result.message
    // });
    //  } else {
    //  const {accessToken, refreshToken} = result;
    //  localStorage.setItem(ACCESS_TOKEN, accessToken);
    //  localStorage.setItem(REFRESH_TOKEN, refreshToken);
    //        notification["success"]({
    //          message: "Login Correcto."
    //      });
    //      window.location.href = "/delivery";
    //  }
    //  console.log(result);
  };

  return (
    <form className="login-form" onChange={changeForm} onSubmit={login}>
      <input
        type="text"
        name="name"
        onChange={(e) => e.preventDefault()}
        placeholder="Usuario"
        className="login-form__input"
      />

      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        className="login-form__input"
      />

      <button type="submit" className="login-form__button">Acceder</button>
    </form>
  );
}
