import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import { signInApi } from "../../api/user";
import "../../css/login-register.css";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants/constantes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {
  const [inputs, setInputs] = useState({
    name: "madonna",
    password: "mad0nna",
  });

  const [errorLogin, setErrorLogin] = useState(0);

  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();

    const result = await signInApi(inputs);

    if (result.error) {
      const notify1 = () => toast(result.error_description);
      notify1();
      setErrorLogin(errorLogin + 1);
    } else {
      setErrorLogin(0);
      const { access_token, refresh_token } = result;
      localStorage.setItem(ACCESS_TOKEN, access_token);
      localStorage.setItem(REFRESH_TOKEN, refresh_token);
      const notify = () => toast("Login Correcto.!");
      notify();

      setTimeout(() => {
        window.location.href = "/delivery";
      }, 1000);
    }
  };

  return (
    <form
      className="login100-form validate-form flex-sb flex-w"
      onChange={changeForm}
      onSubmit={login}
    >
      <span className="login100-form-title mb-3">Acceso Trabajadores</span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
          name="name"
          onChange={(e) => e.preventDefault()}
          placeholder="Usuario"
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="password"
          name="password"
          placeholder="Contraseña"
          // value={form.password}
          // onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="container-login100-form-btn m-t-17">
        {errorLogin < 3 ? (
          <button
            type="submit"
            className="login100-form-btn"
            // disabled={!todoOk()}
          >
            Acceder
          </button>
        ) : (
          <h1>{`Debe Esperar 15 min `}</h1>
        )}
      </div>
      <ToastContainer />
    </form>
  );
}
