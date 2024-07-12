import React from 'react';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FaRegCreditCard } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import Footer from '../Footer/Footer'; 

import PSUImage from '../../assets/psuimage.jpg';
import GPU from '../../assets/gpu.jpg';
import Cooling from '../../assets/cooling.jpg';
import RAM from '../../assets/ram.jpg';
import CPU from '../../assets/cpu.jpg';
import SSD from '../../assets/ssd.jpg';

const HomePage = () => {
    return (
        <>
            <div className='mainhomepage'>
                <div className='homepc'>
                    <h1 className='firstpc'>H150i PRO RGB<br></br>360mm Liquid CPU Cooler</h1>
                    <h5 className='secondpc'> The MSI Hydro Series H150i PRO is an all-in-one RGB<br></br>liquid CPU cooler with a 360mm radiator built for low-noise<br></br>cooling and bold styling with an RGB LED pump head.</h5>
                    <h2 className='prices'>$189.99</h2>
                    <a href="#" className="addtocart">ADD TO CART<FontAwesomeIcon icon={faCaretRight} className="cart-icon" style={{ color: '#000' }} /></a>
                </div>
            </div>

            <div className='categories'>
                <h1 className='boc'>Browse Our Categories</h1>
                <div className='pcontainer'>
                    <div className="pc-panel">
                        <h2>PSU</h2>
                        <img src={PSUImage} alt="PSU" />
                    </div>

                    <div className="pc-panel">
                        <h2>GPU</h2>
                        <img src={GPU} alt="GPU" />
                    </div>

                    <div className="pc-panel">
                        <h2>Cooling</h2>
                        <img src={Cooling} alt="Cooling" />
                    </div>

                    <div className="pc-panel">
                        <h2>RAM</h2>
                        <img src={RAM} alt="RAM" />
                    </div>

                    <div className="pc-panel">
                        <h2>CPU</h2>
                        <img src={CPU} alt="CPU" />
                    </div>

                    <div className="pc-panel">
                        <h2>SSD/SATA</h2>
                        <img src={SSD} alt="SSD" />
                    </div>
                </div>
            </div>
            <div className='haha'>
            <h1 className='abus'>About Us</h1>
            
            <div className='aboutus'>
                <p className='moreinfos'>Thanks to a dedicated team of experts, Build-It supports companies in their digital transformation by offering consulting, development and technical support services. Our personalized approach creates effective solutions that optimize business processes and improve overall performance. At Build-It, we believe in the importance of collaboration and work closely with our clients to understand their challenges and goals.</p>
                <p className='moreinfos'>Build-It is a Belgian IT company specializing in the design and implementation of innovative technological solutions. Founded on expertise and passion for technology, Build-It offers a full range of services ranging from custom software development to IT infrastructure management. We are committed to providing high-quality solutions tailored to each customer's specific needs, with a focus on innovation, reliability and customer satisfaction.</p>
            </div>
            </div>
            
            <div className='ouradv'>
                <h1 className='ourh1'>Our Advantages</h1>
                <div className='advcategory'>
                    <div className='advantage'>
                        <div className='icon-wrapper'>
                            <FaRegCreditCard className='ccicon' />
                        </div>
                        <p className='adv-text'>Secure Payments</p>
                    </div>
                    <div className='advantage'>
                        <div className='icon-wrapper'>
                            <FaShippingFast className='ccicon' />
                        </div>
                        <p className='adv-text'>Fast Shipping</p>
                    </div>
                    <div className='advantage'>
                        <div className='icon-wrapper'>
                            <FaDollarSign className='ccicon' />
                        </div>
                        <p className='adv-text'>Best Prices</p>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default HomePage;
