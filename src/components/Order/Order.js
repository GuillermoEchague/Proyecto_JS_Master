import React from "react";

const Order = ({ items, product }) => {
  const dates = (date) => {
    return new Date().toLocaleDateString(date);
  };

  const array1 = product.agregados.concat(product.entradas);
  const comida = array1.concat(product["jugos-bebidas"]);

  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, created_at, table, waiter, order } = item;
        const resultComida = [];
        order.forEach((element) => {
          comida.forEach((product) => {
            if (element.product === product.id) {
              const pedido = {
                id: product.id,
                cantidad: element.quantity,
                pedido: element.product,
                nombre: product.name,
              };
              resultComida.push(pedido);
            }
          });
        });

        return (
          <article key={id} className="menu-item">
            {/* <img src={img} alt={name} className="photo" /> */}
            <div className="item-info">
              <header>
                <h4>
                  Fecha: {dates(created_at)} ID: {id} Mesero(a): {waiter}
                </h4>
              </header>
              <p>Mesa: {table}</p>

              {resultComida.map((list) => (
                <ul>
                  <li> Producto: {list.nombre} </li>
                  <li> Cantidad: {list.cantidad}</li>
                </ul>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Order;
