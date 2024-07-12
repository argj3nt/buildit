import React, { useState, useEffect } from 'react';
import './Products.css';
import Article from '../../assets/cpu.png';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(16); // Initial display limit

  useEffect(() => {
    fetch(`/data/cpu.json`) // Dynamically load based on category
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
    setDisplayLimit(displayLimit + 16); // Increase display limit by 5 when "Load More" button is clicked
  };

  return (
    <div className='productslist'>
      <div className='psucat'>
        <p>Products - <span className='casespan'>CPU</span></p>
      </div>
      <div className='articlecontain'>
        {displayedProducts.map((product, index) => (
          <div className='article' key={index}>
            <h2>{product.name}</h2>
            <p>Core Count: {product.core_count}</p>
            <p>Core Clock: {product.core_clock} GHz</p>
            <p>Boost Clock: {product.boost_clock} GHz</p>
            <p>TDP: {product.tdp} W</p>
            <p>Graphics: {product.graphics || 'N/A'}</p>
            <p>SMT: {product.smt ? 'Yes' : 'No'}</p>
            <img src={Article} alt={product.name} />
            <div className='price-and-button'>
              <h2 className='price'>${product.price}</h2>
              <button className='detailsart'>ADD TO CART</button>
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

export default Products;
