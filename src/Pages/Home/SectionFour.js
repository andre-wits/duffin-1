import React from 'react';
import './SectionFour.css';
import { NavLink } from 'react-router-dom';

const SectionFour = () => {
  return (
    <section className="sectionfour-layout">
      {/* First Column */}
      <div className="sectionfour-column-1">
        <h1 className="sectionfour-header">
          <mark>How We Work</mark>
        </h1>
      </div>

      {/* Second Column */}
      <div className="sectionfour-column-2">
        <div className="sectionfour-grid">
          {/* Grid Items */}
          <div class="sectionfour-grid-item">
            <h2 class="sectionfour-grid-header">/01.</h2>
            <h3 class="sectionfour-grid-subheading">Explore Our Products</h3>
            <p class="sectionfour-grid-paragraph">
              Browse our collection of handcrafted woodworking pieces, or let us
              know if you have a custom design in mind. Check out product
              details, sizes, materials, and finishes to find the perfect fit
              for your needs.
            </p>
          </div>

          <div class="sectionfour-grid-item">
            <h2 class="sectionfour-grid-header">/02.</h2>
            <h3 class="sectionfour-grid-subheading">
              Whatsapp, Email, or Let Us Call You
            </h3>
            <p class="sectionfour-grid-paragraph">
              Share your design ideas, dimensions, quantities, and any specific
              requirements you're thinking about. Email, Whatsapp, call, or use
              our Request a Quote form, <NavLink to="/contact">here</NavLink>,
              to
            </p>
          </div>

          <div class="sectionfour-grid-item">
            <h2 class="sectionfour-grid-header">/03.</h2>
            <h3 class="sectionfour-grid-subheading">Confirm Your Order</h3>
            <p class="sectionfour-grid-paragraph">
              Once you’ve approved the design, quantity and quote, confirm your
              order by making a deposit payment. We’ll send you an order
              confirmation. Banking details can be found{' '}
              <NavLink to="/contact">here</NavLink>.
            </p>
          </div>

          <div class="sectionfour-grid-item">
            <h2 class="sectionfour-grid-header">/04.</h2>
            <h3 class="sectionfour-grid-subheading">
              Receive Your Masterpiece
            </h3>
            <p class="sectionfour-grid-paragraph">
              We will provide updates and when your order is ready, we’ll notify
              you and arrange for shipping or pickup. We can share photos for
              your approval before final delivery. Enjoy your handcrafted
              woodworking masterpiece!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
