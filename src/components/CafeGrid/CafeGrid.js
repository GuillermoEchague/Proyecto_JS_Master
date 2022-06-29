import React, { useEffect, useState } from "react";
import { base_url } from "../../constants/constantes";
import Menu from "../Menu/Menu";

const CafeGrid = () => {
  const [foods, setFoods] = useState(null);
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);

  useEffect(() => {
    fetch(`${base_url}/api/menus`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  const dato1 = (valor) => {
    if (valor) {
      return foods.entradas;
    } else {
      return foods.entradas.slice(0, 3);
    }
  };

  const dato2 = (valor) => {
    if (valor) {
      return foods.fondo;
    } else {
      return foods.fondo.slice(0, 3);
    }
  };

  const dato3 = (valor) => {
    if (valor) {
      return foods["jugos-bebidas"];
    } else {
      return foods["jugos-bebidas"].slice(0, 3);
    }
  };

  return (
    <div className="App">
      {foods ? (
        <>
          <h1>Entradas</h1>
          <Menu items={dato1(button1)} />
          <button onClick={(e) => setButton1(!button1)}>
            {!button1 ? "Cargar mas" : "Cargar menos"}
          </button>
          <h1>Platos de Fondo</h1>
          <Menu items={dato2(button2)} />
          <button onClick={(e) => setButton2(!button2)}>
            {!button2 ? "Cargar mas" : "Cargar menos"}
          </button>

          <h1>Para beber</h1>
          <Menu items={dato3(button3)} />
          <button onClick={(e) => setButton3(!button3)}>
            {!button3 ? "Cargar mas" : "Cargar menos"}
          </button>
        </>
      ) : null}
    </div>
  );
};

export default CafeGrid;
