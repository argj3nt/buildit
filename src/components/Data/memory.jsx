import React, { useState, useEffect, useContext } from 'react';
import Article from '../../assets/cpu.png';
import { useParams } from 'react-router-dom';
import CartContext from '../CartContext/CartContext';
import RamPic from '../../assets/pcram.png'

const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(32); // Initial display limit
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`/data/memory.json`) // Dynamically load based on category
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
        <p>Products - <span className='casespan'>MEMORY</span></p>
      </div>
      <div className='articlecontain'>
        {displayedProducts.map((product, index) => (
          <div className='article' key={index}>
            <h2>{product.name}</h2>
            {product.core_count !== undefined && <p>Core Count: {product.core_count}</p>}
            {product.core_clock !== undefined && <p>Core Clock: {product.core_clock} GHz</p>}
            {product.boost_clock !== undefined && <p>Boost Clock: {product.boost_clock} GHz</p>}
            {product.tdp !== undefined && <p>TDP: {product.tdp} W</p>}
            {product.graphics !== undefined && <p>Graphics: {product.graphics || 'N/A'}</p>}
            {product.smt !== undefined && <p>SMT: {product.smt ? 'Yes' : 'No'}</p>}
            {product.speed && <p>Speed: {product.speed.join(', ')}</p>}
            {product.modules && <p>Modules: {product.modules.join(' x ')}</p>}
            {product.price_per_gb !== undefined && <p>Price per GB: ${product.price_per_gb.toFixed(2)}</p>}
            {product.color && <p>Color: {product.color}</p>}
            {product.first_word_latency !== undefined && <p>First Word Latency: {product.first_word_latency}</p>}
            {product.cas_latency !== undefined && <p>CAS Latency: {product.cas_latency}</p>}
            <img src={RamPic} alt={product.name} />
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

export default Products;
