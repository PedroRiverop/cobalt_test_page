import React from 'react';
import './Contact.css';
import contactMap from '../assets/map-preview.png';

function Contact() {
  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Contact</h2>
          <p>Email or give us a call now, we are always happy to provide a free consultation and help out with any questions you may have.</p>

          <div className="contact-details">
            <p><strong>Get in Touch!</strong></p>
            <div className="contact-icons-row">
              <span className="contact-item">
                <i className="fas fa-phone"></i>
                <span>(800) 431-9177</span>
              </span>
              <span className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>info@cobaltcommercialservices.com</span>
              </span>
              <span className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>12066 SW 117th Ct Miami, FL 33186</span>
              </span>
            </div>
          </div>

          <a href="cc" target="_blank" rel="noopener noreferrer">
            <img src={contactMap} alt="BT Roofing Location" className="map-preview" />
          </a>
        </div>

        <form className="contact-form">
          <h3>Send Us a Message</h3>
          <label htmlFor="name">Enter Your Name</label>
          <input type="text" id="name" placeholder="Name" />

          <label htmlFor="email">Enter Your Email</label>
          <input type="email" id="email" placeholder="Email" />

          <label htmlFor="subject">Enter Your Subject</label>
          <input type="text" id="subject" placeholder="Subject" />

          <label htmlFor="message">Enter Your Message</label>
          <textarea id="message" placeholder="Message"></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
