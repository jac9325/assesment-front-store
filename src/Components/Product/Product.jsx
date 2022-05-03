import React, { useState } from 'react';
import './__Product.scss';
import { Link } from 'react-router-dom';

/* Modulo que inicia el timer
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const Product = ({ id, title, image }) => {
  const numeroAleatorio = getRandomInt(1, 4);
  const url = `/detalle/${id}`;
  const [value, setValue] = useState(url);

  setInterval(() => {
    setValue('#');
  }, numeroAleatorio * 1000 * 60);

  return (
    <div className="contenedor" key={id}>
      <div className="contenedor__imagen">
        <img className="imagen" src={image}></img>
      </div>
      <div className="contenedor__title">{title}</div>
      <div class="contenedor__datos">
        <p class="contenedor__datos--time">{numeroAleatorio}</p>
        <Link to={value}>
          <p class="contenedor__datos--detalle">
            <b> Ver detalle</b>
          </p>
        </Link>
      </div>
    </div>
  );
};
export default Product;
