import React from 'react';
import './SectionThree.css';
import { FaCircleNotch } from 'react-icons/fa';
import Image1 from '../../assets/images/furniture/1.jpg';
import Image2 from '../../assets/images/furniture/2.jpg';
import Image3 from '../../assets/images/furniture/3.jpg';
import Image4 from '../../assets/images/furniture/4.jpg';
import Image5 from '../../assets/images/furniture/5.jpg';
import Image6 from '../../assets/images/furniture/6.jpg';
import Image7 from '../../assets/images/furniture/7.jpg';
import Image8 from '../../assets/images/furniture/8.jpg';
import Image9 from '../../assets/images/furniture/9.jpg';
import Image10 from '../../assets/images/furniture/10.jpg';

const SectionThree = () => {
  return (
    <div>
      <div className="sectionthree-headingbox">
        <h1 className="services-heading">Our Services</h1>
      </div>

      <section className="main-grid">
        {/* First Column */}
        <div className="sectionthree-column column-1">
          {/* 2x2 Grid of Boxes (First Row) */}
          <div className="grid-of-4">
            <div className="product-card">
              <img src={Image6} alt="Product 1" className="product-image" />
              <p className="product-description">The Emily Credenza</p>
            </div>
            <div className="product-card">
              <img src={Image7} alt="Product 2" className="product-image" />
              <p className="product-description">The Rachel Nightstand</p>
            </div>
            <div className="product-card">
              <img src={Image1} alt="Product 3" className="product-image" />
              <p className="product-description">
                The Thornhill Entryway Storage Bench
              </p>
            </div>
            <div className="product-card">
              <img src={Image8} alt="Product 4" className="product-image" />
              <p className="product-description">The Erik Entryway Table</p>
            </div>
          </div>

          {/* Single Box (Second Row) */}
          <div className="product-card single-box">
            <img src={Image9} alt="Product 5" className="product-image" />
            <p className="product-description">The Foxy Box Bed Frame</p>
          </div>
        </div>

        {/* Second Column */}
        <div className="sectionthree-column ">
          {/* Single Box (First Row) */}
          <div className="product-card single-box">
            <img src={Image10} alt="Product 6" className="product-image" />
            <p className="product-description">The Armand Corner Bookshelf</p>
          </div>

          {/* Single Box (Second Row) */}
          <div className="product-card single-box">
            <img src={Image3} alt="Product 7" className="product-image" />
            <p className="product-description">The Adrian Bookshel</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionThree;
