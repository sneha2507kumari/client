import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  };

  const headingStyle = {
    color: '#333',
  };

  const textStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#666',
  };

  return (
    <Layout>
      <div style={containerStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <p style={textStyle}>Welcome to our online store! We are dedicated to providing the best shopping experience for our customers.</p>
        <p style={textStyle}>Our mission is to offer a wide range of high-quality products at competitive prices. Whether you're looking for the latest fashion trends, electronics, or home essentials, we've got you covered.</p>
        <p style={textStyle}>At our store, we prioritize customer satisfaction. Our team is committed to ensuring a seamless and enjoyable shopping journey for every visitor. Feel free to explore our website and discover amazing deals!</p>
      </div>
    </Layout>
  );
}

export default About;
