import React from "react";

const Order = ({ items }) => {
  const dates = (date) => {
    return new Date().toLocaleDateString(date);
  };

  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, created_at, table, waiter, order } = item;
        console.log("order");
        console.log(order);
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
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Order;
