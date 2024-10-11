// src/pages/ProcessSkids.js
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/ProcessSkids.css'; // Create a separate CSS file for this page
import 'bootstrap/dist/css/bootstrap.min.css';

const ProcessSkids = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [currentImage, setCurrentImage] = useState("../images/manufacturing/process_skids.jpg"); // Default large image
  const images = [
    "../images/manufacturing/process_skids.jpg",
    "../images/manufacturing/process_skids2.jpg",
    "../images/manufacturing/process_skids3.jpg",
    "../images/manufacturing/process_skids4.jpg"
  ];

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />

      <section className="process-skids-hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Process Skids / Fixtures</h1>
        </div>
      </section>

      <section className="intro-heading-section">
        <div className="container text-center">
          <h2>We specialize in the design, manufacturing, and commissioning of Process Skids.</h2>
          <p>
            Our skilled team delivers custom solutions tailored to your specifications, ensuring
            high-quality standards and timely delivery.
          </p>
        </div>
      </section>

      {/* New Image Section */}
      <section className="image-description-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="large-image-container">
                <img src={currentImage} alt="Process Skid" className="img-fluid" />
              </div>
              <div className="thumbnail-container mt-3 d-flex justify-content-center">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="thumbnail me-2"
                    style={{ cursor: 'pointer', width: '70px', height: 'auto' }}
                    onClick={() => setCurrentImage(img)} // Set the clicked image as the large image
                  />
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <h3>Thermotech Process Skids</h3>
              <p>
                Having 25 years of experience in the design and construction of a wide range of process equipment, and a large and well-equipped manufacturing facility, Thermotech is now offering factory-assembled process skids, not only for pilot plants but also for full-scale manufacturing modules.
              </p>
              <h4>The major advantages of process skids:</h4>
              <ul>
                <li>Single source for procurement of all inputs, eliminating the need for multiple purchase orders and coordination.</li>
                <li>Faster delivery time due to single-source procurement and factory assembly.</li>
                <li>Significant savings in site assembly and validation time, enabling quick commissioning.</li>
              </ul>
              <p>
                Thermotech engineers will provide a detailed engineering drawing, complete with instrumentation, detailing, piping isometrics, and stress analysis up to structural design, and submit for approval. Post-approval, we proceed to fabricate the skid.
              </p>
              <p>
                Thermotech can also fabricate your skid from your detailed drawing and Bill of Material.
              </p>
              <p>
                Post approval, we will fabricate the skid, assemble it its entirety in our workshop, and provide you with a full FAT checkout before shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2 className="text-center">Our Services</h2>
          <div className="row">
            <div className="col-md-6 service-item">
              <h3>Design and Engineering</h3>
              <p>
                We provide detailed design and engineering services, ensuring that all process skids meet the specific needs of your project.
              </p>
            </div>
            <div className="col-md-6 service-item">
              <h3>Manufacturing</h3>
              <p>
                Our manufacturing capabilities allow us to produce high-quality skids using the latest technologies and standards.
              </p>
            </div>
            <div className="col-md-6 service-item">
              <h3>Testing and Quality Assurance</h3>
              <p>
                Each skid undergoes rigorous testing and quality checks to ensure reliability and compliance with industry standards.
              </p>
            </div>
            <div className="col-md-6 service-item">
              <h3>Installation and Commissioning</h3>
              <p>
                We offer comprehensive installation and commissioning services, ensuring that your system is up and running smoothly.
              </p>
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
        <a
          href="https://wa.me/1234567890" // Replace with your WhatsApp number
          target="_blank"
          rel="noreferrer"
          className="whatsapp-icon"
        >
          <i className="fa fa-whatsapp"></i>
        </a>

        {showArrow && (
          <button onClick={scrollToTop} className="scroll-to-top">
            <i className="fa fa-arrow-up"></i>
          </button>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProcessSkids;
