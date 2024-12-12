import React from 'react';
import './SectionFour.css';

const SectionFour = () => {
  return (
    <section className="sectionfour-layout">
      {/* First Column */}
      <div className="sectionfour-column-1">
        <h1 className="sectionfour-header">How We Work</h1>
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
              Request a Quote or Customize Your Order
            </h3>
            <p class="sectionfour-grid-paragraph">
              For custom orders, use our Request a Quote form to share your
              design ideas, dimensions, and any specific requirements.
            </p>
          </div>

          <div class="sectionfour-grid-item">
            <h2 class="sectionfour-grid-header">/03.</h2>
            <h3 class="sectionfour-grid-subheading">Confirm Your Order</h3>
            <p class="sectionfour-grid-paragraph">
              Once you’ve selected your product or approved the custom design
              and quote, confirm your order by completing the checkout process
              or making a deposit (if applicable). We’ll send you an order
              confirmation and estimated completion timeline.
            </p>
          </div>

          <div class="sectionfour-grid-item">
            <h2 class="sectionfour-grid-header">/04.</h2>
            <h3 class="sectionfour-grid-subheading">
              Receive Your Masterpiece
            </h3>
            <p class="sectionfour-grid-paragraph">
              When your order is ready, we’ll notify you and arrange for
              shipping or pickup. If it’s a custom piece, we’ll share photos for
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
