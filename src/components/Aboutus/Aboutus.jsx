import React from 'react'
import './Aboutus.css';
import Build from '../../assets/build.jpg'

const Aboutus = () => {
  return (
    <>
    <div className='abus'>
        <div className='pres'>
            <h1 className='h1abs'>About us</h1>
            <p className='abustxt'>Thanks to a dedicated team of experts, Build-It supports companies in their digital transformation by offering consulting, development and technical support services. Our personalized approach creates effective solutions that optimize business processes and improve overall performance. At Build-It, we believe in the importance of collaboration and work closely with our clients to understand their challenges and goals.
            </p>
            <p className='abustxt'>Build-It is a Belgian IT company specializing in the design and implementation of innovative technological solutions. Founded on expertise and passion for technology, Build-It offers a full range of services ranging from custom software development to IT infrastructure management. We are committed to providing high-quality solutions tailored to each customer's specific needs, with a focus on innovation, reliability and customer satisfaction.
            </p>
        </div>
        <img src={Build} alt='aaa' className='imgbuild'/>

    </div>
    </>
  )
}

export default Aboutus