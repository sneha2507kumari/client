import React from 'react';
import Layout from '../components/Layout/Layout';
import '../pages/Contact.css';


const Contact = () => {
  return (
    <Layout>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Have questions or concerns? Reach out to us using the contact form or information below.</p>

        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>

        <div className="contact-info">
          <h2>Our Office</h2>
          <p>123 Main Street</p>
          <p>City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
