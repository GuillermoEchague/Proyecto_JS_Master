import React, { useState, useEffect, Fragment } from "react";
import { useForm } from "react-hook-form";
import { base_url, ACCESS_TOKEN } from "../../constants/constantes";

const PickUp = () => {
  const [tables, setTables] = useState(null);
  const [platos, setPlatos] = useState(null);
  const { register, handleSubmit } = useForm();
  const [addPedido, setAddPedido] = useState(1);
  const [pedidos, setPedidos] = useState();
  const [result, setResult] = useState(null);

 
  function clickMe() {
    setAddPedido(addPedido + 1);
  }
  const token = localStorage.getItem(ACCESS_TOKEN);
  const tablesA = [];
  if (tables) {
    tables.forEach((table) => {
      if (table.available) {
        const pedido = {
          id: table.id,
          available: table.available,
          name: table.name,
        };
        tablesA.push(pedido);
      }
    });
  }
  const payload = token.split(".")[1];

  const mesero = JSON.parse(atob(payload));

  const pedir = async (base_url, paramsPut) => {
    await fetch(`${base_url}/api/orders`, paramsPut)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResult(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (data) => {
    const producto = {
      id: 630,
      waiter: parseInt(mesero.id),
      table: parseInt(data.table),
      order: [
        {
          product: data.product,
          quantity: data.quantity,
        },
      ],
    };
    setPedidos(producto);
    const paramsPut = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(pedidos),
    };

    pedir(base_url, paramsPut);
  };

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
    fetch(`${base_url}/api/tables`, params)
      .then((res) => res.json())
      .then((data) => {
        setTables(data);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(`${base_url}/api/menus`)
      .then((res) => res.json())
      .then((data) => {
        const array1 = data.agregados.concat(data.entradas);
        const comida = array1.concat(data["jugos-bebidas"]);
        setPlatos(comida);
        console.log(comida);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>FORMULARIO</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Mesa</label>
          <select {...register("table")}>
            {tablesA.map((element) => {
              if (element.available === true) {
                return (
                  <>
                    <option value={element.id}>{element.name}</option>
                  </>
                );
              }
              return true;
            })}
          </select>
        </div>
        <div>
          <label>Producto</label>
          <select {...register("product")}>
            {platos.map((element) => {
              if (element.id) {
                return (
                  <>
                    <option value={element.id}>{element.name}</option>
                  </>
                );
              }
              return true;
            })}
          </select>
        </div>
        <div>
          <label>Cantidad</label>
          <input
            type="number"
            {...register("quantity", {
              required: true,
            })}
          ></input>
        </div>
        <input type="submit" value="Enviar" />
      </form>




      <div>
        
          <button  onClick={clickMe}>Agregar Pedido</button>
         
      </div>
    </>
  );
};
export default PickUp;
