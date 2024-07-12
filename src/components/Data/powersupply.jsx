import React, { useState, useEffect, useContext } from 'react';
import Article from '../../assets/cpu.png';
import { useParams } from 'react-router-dom';
import CartContext from '../CartContext/CartContext';
import Power from '../../assets/power.png'

const Powersupply = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(32); // Initial display limit
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`/data/power-supply.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(products => {
        setProducts(products);
        setDisplayedProducts(products.slice(0, displayLimit)); // Display initial subset
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, [category, displayLimit]);

  const loadMoreProducts = () => {
    setDisplayLimit(displayLimit + 16); // Increase display limit by 16 when "Load More" button is clicked
  };

  return (
    <div className='productslist'>
      <div className='psucat'>
        <p>Products - <span className='casespan'>POWER-SUPPLY</span></p>
      </div>
      <div className='articlecontain'>
        {displayedProducts.map((product, index) => (
          <div className='article' key={index}>
            <h2>{product.name}</h2>
            {product.socket && <p>Socket: {product.socket}</p>}
            {product.form_factor && <p>Form Factor: {product.form_factor}</p>}
            {product.max_memory !== undefined && <p>Max Memory: {product.max_memory} GB</p>}
            {product.memory_slots !== undefined && <p>Memory Slots: {product.memory_slots}</p>}
            {product.color && <p>Color: {product.color}</p>}
            <img src={Power} alt={product.name} />
            <div className='price-and-button'>
              <h2 className='price'>${product.price}</h2>
              <button className='detailsart' onClick={() => addToCart(product)}>ADD TO CART</button>
            </div>
          </div>
        ))}
        {products.length > displayedProducts.length && (
          <button onClick={loadMoreProducts} className='buttloadmore'>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Powersupply;
