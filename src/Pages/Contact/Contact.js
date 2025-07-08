import React, { useState } from 'react';
import './Contact.css';

const emailGrid = [
  {
    heading: 'Email us your questions directly.',
    email: 'bunkzonekzn@gmail.com/cotzonekzn@gmail.com',
  },
  {
    heading: 'Whatsapp us directly.',
    email: '(+27)064 864 9178',
  },
  {
    heading: 'Are you a current client or future client?',
    email: 'info@placeholderemail.com',
  },
];

const topics = ['General Question', 'Order Status', 'Custom Work', 'Feedback'];

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const ContactMainSection = () => {
  const [topic, setTopic] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [robot, setRobot] = useState(false);

  const canSubmit = isValidEmail(email) && msg.trim().length > 0 && robot;

  return (
    <main className="contact-main" aria-labelledby="contact-heading">
      <header className="contact-headings">
        <h1 id="contact-heading" className="contact-heading">
          Have an order?
        </h1>
        <h1 id="contact-heading" className="contact-heading">
          Want a quote?
        </h1>
        <h1 id="contact-heading" className="contact-heading">
          Just want to learn more?
        </h1>
      </header>

      <hr className="divider" aria-hidden="true" />

      <section aria-label="Contact Email Addresses" className="email-grid">
        {emailGrid.map((item, idx) => (
          <div className="email-col" key={idx}>
            <div className="email-heading">{item.heading}</div>
            <a
              href={`mailto:${item.email}`}
              className="email-address"
              aria-label={`Email for ${item.heading}`}
            >
              {item.email}
            </a>
          </div>
        ))}
      </section>

      <hr className="divider" aria-hidden="true" />

      <section className="main-row" aria-label="Contact Form Section">
        {/* Left Column */}
        <div className="desc-col">
          <h3 className="desc-heading">
            We'll email you back to discuss your wood.
          </h3>
          <div className="desc-subheading">
            We are here to help you and we'd love to connect with you.
          </div>
          <div className="desc-subheading">We'll get back in 24h.</div>
        </div>

        {/* Right Column: Form */}
        <div className="form-col">
          <div className="form-heading">Send Us a Message</div>
          <form
            className="contact-form"
            autoComplete="off"
            aria-label="Contact form"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission here (e.g., send to server)
              alert('Message sent!');
            }}
          >
            {/* Topic Dropdown */}
            <label className="contact-label" htmlFor="contact-topic">
              Topic
            </label>
            <select
              className="contact-select"
              id="contact-topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a topic
              </option>
              {topics.map((t, i) => (
                <option key={i} value={t}>
                  {t}
                </option>
              ))}
            </select>

            {/* Name */}
            <label className="contact-label" htmlFor="contact-name">
              Your Name
            </label>
            <input
              className="contact-field"
              id="contact-name"
              type="text"
              placeholder="Name"
              value={name}
              autoComplete="name"
              onChange={(e) => setName(e.target.value)}
              required
            />

            {/* Email */}
            <label className="contact-label" htmlFor="contact-email">
              Email
            </label>
            <input
              className="contact-field"
              id="contact-email"
              type="email"
              placeholder="example@email.com"
              value={email}
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-invalid={email.length > 0 && !isValidEmail(email)}
            />

            {/* Message */}
            <label className="contact-label" htmlFor="contact-message">
              Message
            </label>
            <textarea
              className="contact-textarea"
              id="contact-message"
              rows={4}
              placeholder="How can we help?"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              required
            />

            {/* Not a robot */}
            <div className="contact-checkbox-row">
              <input
                className="contact-checkbox"
                id="not-robot"
                type="checkbox"
                checked={robot}
                onChange={(e) => setRobot(e.target.checked)}
                required
              />
              <label htmlFor="not-robot">I'm not a robot</label>
            </div>

            <button
              className="send-btn"
              type="submit"
              disabled={!canSubmit}
              aria-disabled={!canSubmit}
            >
              send message
            </button>
          </form>
        </div>
      </section>
      <div className="contact-info-box" aria-label="Additional Information">
        {/* Lay-by */}
        <div className="info-col">
          <div className="info-heading">Lay-by</div>
          <div className="info-subheading">Flexible payment options</div>
          <div className="info-content">
            We are happy to offer Lay-by on any product over a three month
            period when ordered in our standard satin white finish. There are no
            additional charges or fees payable if you use this method to
            purchase.
          </div>
        </div>
        {/* Delivery */}
        <div className="info-col">
          <div className="info-heading">Delivery</div>
          <div className="info-subheading">Local & National</div>
          <div className="info-content">
            We can deliver and also assemble in the greater Durban area. Please
            contact us to confirm prices and Terms and Conditions. Delivery to
            other parts of SA is by courier at cost. Please contact us for a
            quote.
          </div>
        </div>
        {/* Payment */}
        <div className="info-col">
          <div className="info-heading">Payment</div>
          <div className="info-subheading">Bank details & reference</div>
          <div className="info-content">
            Our bank account details are as follows:
            <span className="info-content-bank-details">
              {'\n'}Nedbank
              {'\n'}Current Account: 1137871563
              {'\n'}Branch 130126, Musgrave Durban
              {'\n'}Universal code: 198765
            </span>
            {'\n\n'}When making an EFT, please provide Proof of Payment by
            Whatsapp to <span class="span-highlight">064 864 9178</span> or by
            email to bunkzonekzn@gmail.com or cotzonekzn@gmail.com. Please quote
            your initials and surname as the reference. In the case where we
            have several "JSmith" purchasers, don’t worry, we will sort it out.
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactMainSection;
