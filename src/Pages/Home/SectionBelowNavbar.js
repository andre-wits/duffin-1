import { FaCircle, FaCircleNotch } from 'react-icons/fa'; // Example icon (grey star)
import './SectionBelowNavbar.css';
import Woodshop from '../../assets/images/a_beautiful_woodsh_image.jpg';

const SectionBelowNavbar = () => {
  return (
    <section className="below-navbar">
      {/* Left Side (1/3 of the screen) */}
      <div className="left-side">
        <h1 className="home-left-side-heading">
          <mark>
            Handcrafted Woodwork from the Foothills of the Drakensberg
          </mark>
        </h1>
        <p>
          Beautifully made bunks, beds, cots, and storage—crafted with care,
          tradition, and local pride.
        </p>
      </div>

      {/* Right Side (2/3 of the screen) */}
      <div className="right-side">
        <div
          className="black-box"
          style={{ backgroundImage: `url(${Woodshop})` }}
        >
          {/* Top Heading */}
          <div className="top-heading">
            <h1 className="box-heading1">
              <FaCircle className="FaCircle" />
              Welcome to our Woodshop
            </h1>
          </div>

          {/* Bottom Left Intro Section */}
          <div className="box-bottom">
            <div className="intro-text">
              <h2>Craftsmanship at Its Best</h2>
              <p>
                Discover the beauty of handcrafted woodwork. Each piece is a
                unique blend of artistry and functionality.
              </p>
            </div>

            {/* Bottom Right Icon */}
            <div className="icon">
              <FaCircleNotch size={35} color="#bbbaba" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBelowNavbar;
