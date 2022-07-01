import React, { useState, useEffect } from "react";
import { base_url } from "../../constants/constantes";

const Orders = () => {
  const [orders, setOrders] = useState(null);

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
    body: JSON.stringify(),
  };

  useEffect(() => {
    fetch(`${base_url}/api/orders`, params)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].waiter);
        setOrders(data);
      });
  }, []);

  return <div>{orders ? <h1>Orders</h1> : null}</div>;
};

export default Orders;
