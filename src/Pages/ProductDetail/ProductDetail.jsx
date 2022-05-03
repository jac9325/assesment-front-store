import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './__ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  // eslint-disable-next-line no-unused-vars
  const [producto, setProdcut] = useState([]);

  const getProducto = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}/`);
    const result = await response.json();
    setProdcut(result);
    console.log(result);
  };

  useEffect(() => {
    getProducto();
  }, []);
  const { title, description, image, price, category } = producto;
  return (
    <div className="content">
      <div className="content__imagen">
        <img src={image} alt="porducto" />
      </div>
      <div className="content__datos">
        <div className="content__datos--title">{title}</div>
        <div className="content__datos--category">
          <span className="">
            Category: <p>{category}</p>
          </span>
        </div>
        <div className="content__datos--description">{description}</div>
        <div className="content__datos--price">
          <span className="">
            Price: <p>$ {price}</p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
