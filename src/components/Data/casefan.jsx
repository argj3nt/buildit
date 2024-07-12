import React, { useState, useEffect, useContext } from 'react';
import Article from '../../assets/cpu.png';
import { useParams } from 'react-router-dom';
import CartContext from '../CartContext/CartContext';
import CaseFanPic from '../../assets/casefan.png'

const CaseFan = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(8); // Initial display limit
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`/data/case-fan.json`)
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
    setDisplayLimit(displayLimit + 16);
  };

  return (
    <div className='productslist'>
      <div className='psucat'>
        <p>Products - <span className='casespan'>CASE-FAN</span></p>
      </div>
      <div className='articlecontain'>
        {displayedProducts.map((product, index) => (
          <div className='article' key={index}>
            <h2>{product.name}</h2>
            <p>Size: {product.size}mm</p>
            <p>Color: {product.color}</p>
            <p>AirFlow: {product.airflow}</p>
            <img src={CaseFanPic} alt={product.name} />
            <div className='price-and-button'>
              <h2 className='price'>${product.price}</h2>
              <button className='detailsart' onClick={() => addToCart(product)}>ADD TO CART</button>
            </div>
          </div>
        ))}
        {products.length > displayedProducts.length && (
          <button onClick={loadMoreProducts} className='buttloadmore'>
          <h4>Load More</h4>
          </button>
        )}
      </div>
    </div>
  );
};

export default CaseFan;
