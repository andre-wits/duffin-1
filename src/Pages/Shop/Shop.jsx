import React from 'react';
import './Shop.css';
import ShopImage1 from '../../assets/images/products/images/workshop/large/IMG_5684.jpg';
import ShopImage2 from '../../assets/images/products/images/workshop/large/IMG_5698.jpg';
import ShopImage3 from '../../assets/images/products/images/workshop/large/IMG_6054.jpg';
import ShopImage4 from '../../assets/images/products/images/workshop/large/IMG_6055.jpg';
import ShopImage5 from '../../assets/images/products/images/workshop/large/IMG_6055.jpg';
import ShopImage6 from '../../assets/images/products/images/workshop/large/IMG_6056.jpg';
import ShopImage7 from '../../assets/images/products/images/workshop/large/IMG_6057.jpg';
import ShopImage8 from '../../assets/images/products/images/workshop/large/IMG_6058.jpg';
import ShopImage9 from '../../assets/images/products/images/workshop/large/IMG_6059.jpg';
import ShopImage10 from '../../assets/images/products/images/workshop/large/IMG_6060.jpg';
import ShopImage11 from '../../assets/images/products/images/workshop/large/IMG_6061.jpg';
import BannerImage from '../../assets/images/machinery1.jpg';

// Placeholder images
const galleryImages = [
  ShopImage1,
  ShopImage2,
  ShopImage3,
  ShopImage4,
  ShopImage5,
  ShopImage6,
  ShopImage7,
  ShopImage8,
  ShopImage9,
  ShopImage10,
  ShopImage11,
];

export default function Shop() {
  return (
    <div className="shop-root">
      {/* Banner */}
      <section className="shop-banner-section">
        <img
          src={BannerImage}
          alt="Inside our woodshop"
          className="shop-banner-img"
        />
        <div className="shop-banner-box">
          <mark className="shop-banner-heading">Meet the Makers</mark>
          <div className="shop-banner-subheading">Our Story & Craft</div>
          <div className="shop-banner-text">
            Nestled in the foothills of the Drakensberg, our family-run woodshop
            crafts furniture with passion, skill, and heart. From beds to
            bookshelves, every piece tells a story.
          </div>
          <button className="shop-banner-btn">View More</button>
        </div>
      </section>

      {/* Large Centered Text */}
      <section className="shop-centertext-section">
        <h1>
          <mark>We are as about end to end as you can get.</mark>
        </h1>
        <mark className="shop-centertext">
          We purchase{' '}
          <span className="shop-span-highlight">rough sawn board</span> or posts
          from a local sawmill for the bunks and start from there. We will also
          reduce cants of timber on our sawmill. Sawn boards and posts are then
          planed, edged and sized and drilled. Different headboards have{' '}
          <span className="shop-span-highlight">different processes</span> and
          some are put through moulders and grooved and shaped. We fix the
          headboards together with a series of dowels and glue. All components
          are sanded first with{' '}
          <span className="shop-span-highlight">pneumatic tools</span> and then
          finished by hand. Then we spray them using a{' '}
          <span className="shop-span-highlight">professional paint system</span>
          . Cots, chests and storage also go through the same{' '}
          <span className="shop-span-highlight">
            rigorous manufacturing process
          </span>
          , but as they are largely comprised of prepared board, the initial
          planing parts are not necessary.
        </mark>
      </section>

      {/* Gallery Info Section */}
      <section className="shop-galleryinfo-section">
        <div className="shop-galleryinfo-row">
          <div className="shop-galleryinfo-left">
            <mark className="shop-galleryinfo-heading">
              <span>Explore Our Workshop</span>
            </mark>
          </div>
          <div className="shop-galleryinfo-right">
            <div className="shop-galleryinfo-top">
              <button className="shop-galleryinfo-btn">Book a Visit</button>
              <span className="shop-galleryinfo-text">
                We welcome you to see our process. Visit by appointment and
                experience the craftsmanship up close.
              </span>
            </div>
            <div className="shop-gallery-grid">
              {galleryImages.map((img, idx) => (
                <div
                  className={`shop-gallery-item shop-gallery-item-${idx % 5}`}
                  key={idx}
                >
                  <img src={img} alt={`Workshop ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section 1 */}
      <section className="shop-info-section">
        <div className="shop-info-row">
          <div className="shop-info-left">
            <mark className="shop-info-heading">Pricing</mark>
          </div>
          <div className="shop-info-right">
            <div className="shop-info-box">
              If you are wondering if we sacrifice quality for price, that is
              not the case. I am sure that you have made a number of comparisons
              across a number of suppliers of our product lines. Part of the
              answer to how we can produce items of this quality at the price is
              that we own our factory and all the equipment in it. Another part
              is that we retail to the public using our own marketing and cut
              out any middleman.
            </div>
          </div>
        </div>
      </section>

      {/* Info Section 2 */}
      <section className="shop-info-section">
        <div className="shop-info-row">
          <div className="shop-info-left">
            <mark className="shop-info-heading">Safety advice</mark>
          </div>
          <div className="shop-info-right">
            <div className="shop-info-box">
              <span className="shop-small-headings">Bunks</span> The generally
              accepted wisdom from Regulators and international Safety bodies is
              that children under 6 years old should not occupy the top bunk and
              whilst bunks can be fun for kids to play on, this should be
              discouraged. <span className="shop-small-headings">Cots</span> Our
              cots have two mattress height positions rather than some firms
              that provide three. We believe that this adds an extra level of
              safety to prevent babies falling out of the cot when they
              initially learn to sit up. There is a lot of guidance available in
              the safe use of a cot and we recommend that you seek it out. In
              any event, we suggest that you lower the base to the bottom
              position when the baby starts to sit up.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
