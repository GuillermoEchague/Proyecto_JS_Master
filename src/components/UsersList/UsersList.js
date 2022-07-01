import React , { useState, useEffect } from "react";
// import { userApi } from "../../api/user";
import { base_url } from "../../constants/constantes";
import Users from "../Users/Users";


const UsersList = () => {
    const [users, setUsers] = useState(null)

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiTWFkb25uYSIsInVzZXIiOiJtYWRvbm5hIiwicm9sZXMiOlsiYWRtaW4iXX0.5l4DWWWWhxarAzv9NIiUfoFYiSe6QpmjT2B1SkQjpV4";
    // const result = await userApi(token);
    // console.log(result);
    // setUser(result)
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify()
    };
  
    useEffect(() => {
      fetch(`${base_url}/api/users`,params)
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
          <Users items={users} />
        </>
      ) : null}
    </div>
  );
};

export default UsersList