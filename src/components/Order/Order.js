import React from "react";

const Order = ({ items, product, users }) => {
  const dates = (date) => {
    return new Date().toLocaleDateString(date);
  };

  const array1 = product.agregados.concat(product.entradas);
  const comida = array1.concat(product["jugos-bebidas"]);

  return (
    <div className="section-center">
      {items.map((item) => {
        users.map((user) => {
          if (user.id === item.waiter) {
            item.img = user.img;
            item.name = user.name;
          }
        });
        console.log(items);
        const { id, created_at, table, order, name, img } = item;
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
            <img src={img} alt={name} className="photo" />

            <div className="item-info">
              <header>
                <h4>Fecha: {dates(created_at)}</h4>
              </header>

              <h4>ID: {id}</h4>
              <h4>Mesero: {name}</h4>
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
