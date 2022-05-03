import React, { useEffect, useState } from 'react';
import Product from '../../Components/Product/Product';
import './__Home.scss';

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [productos, setProducts] = useState([]);

  const getProducts = async () => {
    const result = await fetch('https://fakestoreapi.com/products').then(
      (res) => res.json()
    );
    setProducts(result);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      {productos.map(({ id, title, image, time }) => (
        <Product id={id} title={title} image={image} time={1} />
      ))}
    </div>
  );
}
export default Home;
