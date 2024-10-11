// src/pages/AboutUs.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutUs.css'; // Import the CSS file
import 'font-awesome/css/font-awesome.min.css';  // Font Awesome CSS

const AboutUs = () => {
  const [showArrow, setShowArrow] = useState(false); // State to manage the visibility of the scroll-to-top button

  const handleScroll = () => {
    // Show or hide the scroll-to-top button based on scroll position
    if (window.scrollY > 300) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  const scrollToTop = () => {
    // Smooth scroll back to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Include the header */}
      <Header />
      
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">About Us</h1>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="company-overview-section">
        <div className="container">
          <div className="card about-card">
            <h2>Who We Are</h2>
            <p>
              IC Pro was founded in 2009 as an Industrial Process Automation solutions provider with global presence in the USA, Dubai, Singapore, and India. With over 12+ years of experience in providing solutions and partnering with technological giants in the Automation Industry, we have earned the trust of our customer base.
            </p>
            <p>
              We are recognized system integrators for Rockwell Automation and partnered with various industrial technology companies like AVEVA & Inductive Automation. Our portfolio includes FEED and Concept development, detailed engineering, system design, software development, installation, FAT, and on-site commissioning.
            </p>
            <img src="your-image-1.jpg" alt="Company" className="about-card-image img-fluid"/>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="container">
          <h2 className="text-center">Our Expertise</h2>
          <div className="row text-center">
            <div className="col-md-4 expertise-item">
              <i className="fa fa-cogs expertise-icon" aria-hidden="true"></i>
              <h4>Control Systems</h4>
              <p>Expert solutions in Instrumentation and Control Systems, including system design and installation.</p>
            </div>
            <div className="col-md-4 expertise-item">
              <i className="fa fa-bar-chart expertise-icon" aria-hidden="true"></i>
              <h4>Data Analytics</h4>
              <p>We specialize in Manufacturing Execution Systems (MES) and data analytics for enhanced operational efficiency.</p>
            </div>
            <div className="col-md-4 expertise-item">
              <i className="fa fa-cube expertise-icon" aria-hidden="true"></i>
              <h4>Augmented Reality</h4>
              <p>Our Augmented Reality and Digital Twin solutions enable advanced infrastructure management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social media apps */}
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <i className="fa fa-instagram"></i>
        </a>
      </div>

      {/* WhatsApp and Scroll to Top Icons */}
      <div className="fixed-icons">
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/1234567890"  // Replace with your WhatsApp number
          target="_blank"
          rel="noreferrer"
          className="whatsapp-icon"
        >
          <i className="fa fa-whatsapp"></i>
        </a>

        {/* Scroll to Top Icon */}
        {showArrow && (
          <button onClick={scrollToTop} className="scroll-to-top">
            <i className="fa fa-arrow-up"></i>
          </button>
        )}
      </div>


      {/* Include the footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
