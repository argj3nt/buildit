import React, { useContext } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CartContext from '../CartContext/CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.length;

  return (
    <div className='mainheader'>
      <nav>
        <ul className='header-category'>
          <li className='logotitle'>BUILD-IT</li>
          <li><Link to="/">HOME</Link></li>
          <li className='products'>
            PRODUCTS
            <ul className='dropdown'>
              <li><Link to="/category/case">Case</Link></li>
              <li><Link to="/category/Case-Fan">Case-Fan</Link></li>
              <li><Link to="/category/CPU">CPU</Link></li>
              <li><Link to="/category/cpu-cooler">CPU-Cooler</Link></li>
              <li><Link to="/category/Memory">Memory</Link></li>
              <li><Link to="/category/motherboard">Motherboard</Link></li>
              <li><Link to="/category/powersupply">Power-Supply</Link></li>
            </ul>
          </li>
          <li className='products'>
            PERIPHERIQUE
            <ul className='dropdown'>
              <li><Link to="/category/keyboard">Keyboard</Link></li>
              <li><Link to="/category/Case-Fan">Mouse</Link></li>
              <li><Link to="/category/CPU">Headphones</Link></li>
              <li><Link to="/category/cpu-cooler">Monitor</Link></li>
              <li><Link to="/category/Memory">Speakers</Link></li>
            </ul>
          </li>
          <li>ABOUT US</li>
          <li>SUPPORT</li>
          <li className="iconsearch">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li className="icon">
            <Link to="/cart">
              <div className='cartclass'>
                <FontAwesomeIcon icon={faCartShopping} className='carticonclass'/>
                {cartItemCount > 0 && <span className="cart-item-count">{cartItemCount}</span>}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
