import React from 'react';
import { FaArrowDown } from 'react-icons/fa'; // Arrow icon for the bottom-middle
import './SectionTwo.css';
import ImageOne from '../../assets/images/1.jpg';
import ImageTwo from '../../assets/images/2.jpg';
import ImageThree from '../../assets/images/3.jpg';

const SectionTwo = () => {
  return (
    <section className="three-boxes">
      {/* Box 1 */}
      <div className="box">
        <img
          src={ImageTwo} // Placeholder image
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>

      {/* Box 2 */}
      <div className="box">
        <img src={ImageThree} alt="Placeholder" className="box-image" />
        <div className="box-content">
          <span className="box-number">/02</span>
          <h3 className="box-heading">Box Two</h3>
          <FaArrowDown className="box-arrow" />
        </div>
        <div className="box-hover">
          <p>This is some placeholder text for Box Two.</p>
        </div>
      </div>

      {/* Box 3 */}
      <div className="box">
        <img src={ImageOne} alt="Placeholder" className="box-image" />
        <div className="box-content">
          <span className="box-number">/03</span>
          <h3 className="box-heading">Box Three</h3>
          <FaArrowDown className="box-arrow" />
        </div>
        <div className="box-hover">
          <p>This is some placeholder text for Box Three.</p>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
