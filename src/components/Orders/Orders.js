import React, { useState, useEffect, Fragment } from "react";
import { base_url, ACCESS_TOKEN } from "../../constants/constantes";
import Order from "../Order/Order";
import PickUp from "../PickUp/PickUp"


const Orders = () => {

  const [platos, setPlatos] = useState(null);
 

  useEffect(() => {
    fetch(`${base_url}/api/menus`)
      .then((res) => res.json())
      .then((data) => {
        setPlatos(data);
      });
  }, []);


  const [orders, setOrders] = useState(null);
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
    fetch(`${base_url}/api/orders`, params)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);


  return (
    <div>
      {orders ? (
        <Fragment>
          <h1>Orders</h1>
          <Order items={orders} product={platos}/>
        </Fragment>
      ) : null}
    </div>
  );
};

export default Orders;
