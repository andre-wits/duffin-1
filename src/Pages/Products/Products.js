import React, { useState } from 'react';
import './Products.css';
import { FaCircleNotch } from 'react-icons/fa'; // Example icon (grey star)
import BannerImage from '../../assets/images/products/a_chest_of_drawers_image.jpeg';
import bed1 from '../../assets/images/products/images/bunks/large/bunk_curved_panel1.jpg';
import cot from '../../assets/images/products/images/cots/cot.jpg';

const galleryImages = [
  {
    src: bed1,
    name: 'Lion',
    price: 'R3,550',
  },
  {
    src: bed1,
    name: 'Tiger',
    price: 'R3,650',
  },
  {
    src: bed1,
    name: 'Bear',
    price: 'R3,750',
  },
  {
    src: bed1,
    name: 'Giraffe',
    price: 'R3,850',
  },
  {
    src: bed1,
    name: 'Zebra',
    price: 'R3,950',
  },
];

const productSections = [
  {
    title: 'Bunks.',
    type: 'gallery',
    gallery: galleryImages,
    afterGallery: (
      <>
        <div className="product-info-subheading">
          We make our range of solid pine bunk beds from heavy gauge Select
          grade locally sourced pine. Each style takes a standard single
          mattress and has the following features:
        </div>
        <p className="product-info-text">
          Our beds are made with premium pine and solid hardware. Choose from a
          range of finishes and designs, or request a custom order.
        </p>
        <ul className="product-info-list">
          <h6>Features</h6>
          <li>Crafted from heavy-gauge, locally sourced Select pine</li>
          <li>Fits standard single mattresses (1880 x 910mm)</li>
          <li>Equal-height top and bottom bunks (90 + 90cm)</li>
          <li>Converts to two matching single beds</li>
          <li>Reversible ladder and guard rail—fits any room</li>
          <li>Durable solid pine slats</li>
          <li>Professional 3-coat paint finish</li>
          <li>Sturdy, robust construction</li>
          <li>2-year workmanship & materials guarantee</li>
          <li>Easy self-assembly kit</li>
          <li>Trundle drawer storage (sold separately)</li>
          <li>Multiple color options</li>
          <li>Untreated, eco-friendly pine—safe for your home</li>
          <h6>Dimensions</h6>
          <li>Bunk bed: 2060mm (L) × 1025mm (W) × 1800mm (H)</li>
          <li>Clearance between bunks: ~850mm (comfortable for adults)</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Single beds.',
    type: 'text',
    heading: 'Study & Work Desks',
    subheading:
      'We manufacture single beds to the same high standards as our range of bunks in all of the styles and colours. Our headboards are 90cm and footboards 56cm. They also come with a set of strong 100mm pine slats and with the same two-year materials and workmanship guarantee. Our Pine is not treated, therefore its completely safe and eco friendly (go green).',
    text: (
      <p>
        Dimensions: Single beds take a standard single mattress, (1880 x 910mm)
        and are 2060mm long, 1025mm wide and the headboard is 900mm high.
      </p>
    ),
    image: bed1,
  },
  {
    title: 'Cots & Cribs.',
    type: 'text',
    heading:
      'Our range of cots is made from local "A" grade MDF (Supawood) and pine. They accommodate an SA 130 x 66cm mattress.',
    subheading:
      'Our range of cots is made from local "A" grade MDF (Supawood) and pine. They accommodate an SA 130 x 66cm mattress.',
    text: (
      <>
        <ul className="product-info-list">
          <h6>Features</h6>
          <li>
            Manufactured to strict EU safety guidance and requirements. All gaps
            and heights conform to these standards.
          </li>
          <li>Two height settings for the mattress.</li>
          <li>
            Eco friendly, non-toxic professional water based paint system.
          </li>
          <li>No sharp edges, they have all been rounded for child safety</li>
          <li>
            Our Pine is not treated, therefore it's completely safe and eco
            friendly (go green)
          </li>
          <li>Ventilated mattress board.</li>
          <li>A two-year materials and workmanship guarantee.</li>
          <li>Converts to a toddler bed without further extras to buy.</li>
          <li>Comes as an easy to assemble kit.</li>
          <li>Separate trundle drawer storage unit available.</li>
          <li>A range of colours available.</li>
          <h6>Dimensions</h6>
          <li>
            Cots take a 1300 x 660mm Large Cot mattress. Cots have an overall
            length of approximately 1350mm and width 725mm. Heights vary
            slightly according to the design, but the distance from the floor to
            the top of the side rail is 900mm.
          </li>
        </ul>
      </>
    ),
    image: cot,
  },
  {
    title: 'Drawer Chests.',
    type: 'text',
    heading: 'Dressers & Chests',
    subheading:
      'We manufacture a chest of drawers in the same proportions in Supawood, (900mm high x 900mm wide and 500mm deep) but with different drawer combinations. As you would expect, we only use quality drawer runners and components.',
    text: (
      <>
        <ul className="product-info-list">
          <h6>The drawer combinations are:</h6>
          <li>4 long drawers.</li>
          <li>3 long drawers and two short.</li>
          <li>A compactum of 4 short drawers and a cupboard.</li>
        </ul>
        <p className="product-info-text">
          The chest is available in the same palette of colours to match the
          bunk beds and cots. <br />
          These items are also manufactured in self-assembly kit form, but where
          possible, due to the more complex nature of assembling it, we
          recommend our delivery and assembly service.
        </p>
      </>
    ),
  },
  {
    title: 'Tables',
    type: 'text',
    heading: 'Dining & Side Tables',
    subheading: 'Gather Around in Style',
    text: 'Dimensions: Single beds take a standard single mattress, (1880 x 910mm) and are 2060mm long, 1025mm wide and the headboard is 900mm high.',
    image: bed1,
  },
];

const ProductsPage = () => {
  // Gallery modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImgIdx, setModalImgIdx] = useState(0);

  // Handlers
  const openModal = (idx) => {
    setModalImgIdx(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <div className="products-page">
      {/* Top Title Section */}
      <section className="below-navbar-product-page">
        {/* Left Side (1/3 of the screen) */}
        <div className="left-side-product-page">
          <h1 className="home-left-side-heading-product-page">
            <mark>Products</mark>
          </h1>
          <p>
            We’re a small, dedicated team, led by friends Daniel and Bongani.
            With years of experience in carpentry, joinery, forestry, and
            sawmilling, we bring a wealth of skill and care to every item we
            make.
          </p>
        </div>

        {/* Right Side (2/3 of the screen) */}
        <div className="right-side-product-page">
          <div
            className="black-box-product-page"
            style={{ backgroundImage: `url(${BannerImage})` }}
          >
            {/* Top Heading */}
            <div className="top-heading-product-page"></div>

            {/* Bottom Left Intro Section */}
            <div className="box-bottom-product-page">
              <div className="intro-text-product-page">
                <h2>Craftsmanship at Its Best</h2>
                <p>
                  Discover the beauty of handcrafted woodwork. Each piece is a
                  unique blend of artistry and functionality.
                </p>
              </div>

              {/* Bottom Right Icon */}
              <div className="icon-product-page">
                <FaCircleNotch size={35} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <section className="products-list">
        {productSections.map((section, rowIdx) => (
          <React.Fragment key={section.title}>
            <div className="product-row">
              {/* Left: Category Title */}
              <div className="product-col product-col-title">
                <h2>
                  <mark>{section.title}</mark>
                </h2>
              </div>
              {/* Right: Content */}
              <div className="product-col product-col-content">
                {section.type === 'gallery' ? (
                  <>
                    <div className="product-gallery">
                      {section.gallery.map((img, imgIdx) => (
                        <div
                          className="gallery-img-card"
                          key={imgIdx}
                          tabIndex={0}
                          aria-label={`View ${img.name} enlarged`}
                          onClick={() => openModal(imgIdx)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') openModal(imgIdx);
                          }}
                        >
                          <img src={img.src} alt={img.name} />
                          <div className="gallery-img-overlay">
                            <span className="overlay-name">{img.name}</span>
                            <span className="overlay-price">{img.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {section.afterGallery}
                  </>
                ) : (
                  <>
                    <div className="product-info-subheading">
                      {section.subheading}
                    </div>
                    <p className="product-info-text">{section.text}</p>
                    {section.image && (
                      <img
                        src={section.image}
                        alt={section.title}
                        className="product-info-image"
                      />
                    )}
                  </>
                )}
              </div>
            </div>
            {rowIdx < productSections.length - 1 && (
              <hr className="product-row-divider" aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </section>

      {/* Modal image viewer */}
      {modalOpen && (
        <div
          className="gallery-modal-bg"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-modal-close"
              onClick={closeModal}
              aria-label="Close image preview"
            >
              ✕
            </button>
            <img
              src={galleryImages[modalImgIdx].src}
              alt={galleryImages[modalImgIdx].name}
              className="gallery-modal-img"
            />
            <div className="gallery-modal-caption">
              <span>{galleryImages[modalImgIdx].name}</span>
              <span className="gallery-modal-price">
                {galleryImages[modalImgIdx].price}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Additional Information */}
      <div
        className="products-info-section"
        aria-label="Product Options and Info"
      >
        <div className="info-box">
          <div className="info-box-title">
            <mark>Trundle Units</mark>
          </div>
          <div className="info-box-desc">
            Our cots, bunks, and single beds offer under-bed trundle units—open
            drawers on castors, finished to match, for smart storage that looks
            built-in.
          </div>
        </div>
        <div className="info-box">
          <div className="info-box-title">
            <mark>Painting & Colours</mark>
          </div>
          <div className="info-box-desc">
            Every piece is spray painted with two primer coats and a satin top
            coat. Custom colours (Candy, Slate, Powder, Ink, Cloud) add R400 and
            may require extra lead time.
          </div>
        </div>
        <div className="info-box">
          <div className="info-box-title">
            <mark>Stock Levels</mark>
          </div>
          <div className="info-box-desc">
            We keep most items in stock, but availability varies. Please contact
            us for current options.
          </div>
        </div>
        <div className="info-box">
          <div className="info-box-title">
            <mark>Guarantee</mark>
          </div>
          <div className="info-box-desc">
            All products include a two-year guarantee on materials and
            workmanship. (Normal wear and tear and bite marks not covered!)
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
