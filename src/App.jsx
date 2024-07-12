import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Case from './components/Data/case';
import CaseFan from './components/Data/casefan';
import CpuCooler from './components/Data/cpucooler';
import Memory from './components/Data/memory';
import Motherboard from './components/Data/motherboard';
import Powersupply from './components/Data/powersupply';
import { CartProvider } from './components/CartContext/CartContext';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <CartProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<Products />} />
        <Route path="/category/case" element={<Case />} />
        <Route path="/category/case-fan" element={<CaseFan />} />
        <Route path="/category/cpu-cooler" element={<CpuCooler />} />
        <Route path="/category/memory" element={<Memory />} />
        <Route path="/category/motherboard" element={<Motherboard />} />
        <Route path="/category/powersupply" element={<Powersupply />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      {/* <Products /> */}
    </Router>
    </CartProvider>
  );
};

export default App;
