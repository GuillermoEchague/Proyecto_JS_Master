import React, { useState, useEffect } from "react";
// import { userApi } from "../../api/user";
import { ACCESS_TOKEN, base_url } from "../../constants/constantes";
import Users from "../Users/Users";

const UsersList = () => {
  const [users, setUsers] = useState(null);
  const token = localStorage.getItem(ACCESS_TOKEN);

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(),
  };

  useEffect(() => {
    fetch(`${base_url}/api/users`, params)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  
  return (
    <div className="App">
      {users ? (
        <>
          <h1>Usuarios</h1>

          {!users.error ? (
            <Users items={users} />
          ) : (
            <h1>No tienes acceso de Administrador</h1>
          )}
        </>
      ) : null}
    </div>
  );
};

export default UsersList;
