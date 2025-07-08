import React from 'react';
import { FaArrowDown } from 'react-icons/fa'; // Arrow icon for the bottom-middle
import './SectionTwo.css';
import ImageOne from '../../assets/images/drakensburg.jpg';
import ImageTwo from '../../assets/images/wood4.jpg';
import ImageThree from '../../assets/images/wood2.jpg';

const SectionTwo = () => {
  return (
    <>
      <h1 className="boxes-heading">
        <mark>Our Craftsmanship</mark>
      </h1>
      <section className="three-boxes">
        {/* Box 1 */}
        <div className="box">
          <img
            src={ImageOne} // Placeholder image
            alt="Placeholder"
            className="box-image"
          />
          <div className="box-content">
            <span className="box-number">/01</span>
            <h3 className="box-heading">Simple.</h3>
            <h3 className="box-heading">Modern.</h3>
            <h3 className="box-heading">Stylish.</h3>
            <FaArrowDown className="box-arrow" />
          </div>
          <div className="box-hover">
            <p>
              Nestled in the foothills of the Drakensberg Mountains, our
              workshop creates a select range of beds, bunks, baby cots, and
              storage units. Every piece is built by hand, combining traditional
              carpentry skills with modern finishing techniques for lasting
              quality and value.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="box">
          <img src={ImageTwo} alt="Placeholder" className="box-image" />
          <div className="box-content">
            <span className="box-number">/02</span>
            <h3 className="box-heading">Creativity.</h3>
            <h3 className="box-heading">Functionality.</h3>
            <FaArrowDown className="box-arrow" />
          </div>
          <div className="box-hover">
            <p>
              Our products are made using only A-grade, locally sourced
              materials and fittings. Each item is finished with a professional
              paint system for a look and durability that lasts.
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="box">
          <img src={ImageThree} alt="Placeholder" className="box-image" />
          <div className="box-content">
            <span className="box-number">/03</span>
            <h3 className="box-heading">Refined.</h3>
            <FaArrowDown className="box-arrow" />
          </div>
          <div className="box-hover">
            <p>
              We don’t use CAD, CNC, or lasers. Instead, we rely on time-honored
              carpentry—supported by a modern, thoughtful approach.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
