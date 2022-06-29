import { audience, base_url, grantType, ACCESS_TOKEN, REFRESH_TOKEN } from "../constants/constantes";
// import jwtDecode from "jwt-decode";

export function signInApi(data) {
  const url = `${base_url}/oauth/token`;

  const argumentos = {
    client_id: data.name,
    client_secret: data.password,
    audience: audience,
    grant_type: grantType,
  };
  const params = {
    method: "POST",
    body: JSON.stringify(argumentos),
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      "Accept-Encoding": "",
      Connection: "keep-alive",
      Accept: "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}


export function logout() {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
}

// function willExpireToken(token) {
//   const seconds = 60;
//   const metaToken = jwtDecode(token);
//   const { exp } = metaToken;
//   const now = (Date.now() + seconds) / 1000;
//   return now > exp;
// }