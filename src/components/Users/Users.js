import React from "react";

const Users = ({ items }) => {

const dates = (date) => {
return new Date().toLocaleDateString(date)
} 

  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, name, email, phone,roles,birthday, img } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={name} className="photo" />
            <div className="item-info">
              <header>
                <h4 >{name}</h4>
              </header>
              <p >Email: {email}</p>
              <p >Telefono: {phone}</p>
              <p >Rol: {roles}</p>
              <p >Cumpleaños: {dates(birthday)}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Users;
