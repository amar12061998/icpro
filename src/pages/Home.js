import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const [years, setYears] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [countries, setCountries] = useState(0);
  const [projects, setProjects] = useState(0);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const incrementCount = (setCount, target, duration) => {
      let count = 1;
      const interval = setInterval(() => {
        if (count <= target) {
          setCount(count);
          count++;
        } else {
          clearInterval(interval);
        }
      }, duration);
    };

    incrementCount(setYears, 12, 100);
    incrementCount(setCustomers, 80, 100);
    incrementCount(setCountries, 12, 100);
    incrementCount(setProjects, 200, 50);

    // Show the arrow when user scrolls down
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Bootstrap Carousel for sliding images */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/banner11.jpg" className="d-block w-100" alt="Banner 1" />
          </div>
          <div className="carousel-item">
            <img src="/images/banner22.jpg" className="d-block w-100" alt="Banner 2" />
          </div>
          <div className="carousel-item">
            <img src="/images/banner33.jpg" className="d-block w-100" alt="Banner 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Introduction Paragraph */}
      <div className="container mt-4">
        <p className="intro-paragraph">
          IC Pro is a leading solutions provider for Food, Pharma, Utility services,
          Material handling, and Energy sector. (Oil & Gas / Power generation). We offer
          Automation & Digitalization services that improve operational efficacy, safety,
          and security. We are committed to providing an innovative and reliable custom
          solution by understanding your challenges and intricacies in your operations.
        </p>
      </div>

      {/* Services Section */}
      <div className="container mt-5 services-section">
        <h2>SERVICES</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="service-box">
              <i className="fa fa-cogs service-icon mb-3" aria-hidden="true"></i>
              <h5>Industrial Automation</h5>
              <p>IC Pro is a leading solutions provider company in the field of Industrial Automation with Industry 4.0 solutions.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-box">
              <i className="fa fa-industry service-icon mb-3" aria-hidden="true"></i>
              <h5>Manufacturing</h5>
              <p>IC Pro offers high-quality manufacturing of Electrical Panels including Control Panels, Power Control Center, VFD Control Panels, Feeder Panels, etc.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-box">
              <i className="fa fa-plug service-icon mb-3" aria-hidden="true"></i>
              <h5>Digitalization</h5>
              <p>IC Pro provides various solutions that optimize operations, increase productivity, and make informed decisions based on connected systems and data analytics.</p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="container mt-10 offer-section">
        <h2 className="text-left">WHAT WE OFFER</h2>
        <p>
          IC Pro offers innovative and scalable solutions to our customers to drive their digital manufacturing, making it measurable and profitable. Our customized solutions address the unique requirements of every customer, and our commitment to deliver results every time makes us a perfect partner for any business.
        </p>

        <Slider {...{
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        }}>
          {/* Box 1 */}
          <div className="offer-box text-center">
            <img src="/images/automation.jpg" className="offer-img" alt="Automation" />
            <h5>Automation</h5>
            <ul className="list-unstyled">
              <li>Process Control & Safety Systems</li>
              <li>Data Acquisition Systems</li>
              <li>Inspection / Tracking Systems</li>
            </ul>
          </div>
          {/* Box 2 */}
          <div className="offer-box text-center">
            <img src="/images/manufacturing.jpg" className="offer-img" alt="Manufacturing" />
            <h5>Manufacturing</h5>
            <ul className="list-unstyled">
              <li>Electrical Panels</li>
              <li>Pneumatic Panels</li>
              <li>Skids & Fixtures</li>
            </ul>
          </div>
          {/* Box 3 */}
          <div className="offer-box text-center">
            <img src="/images/iiot.jpeg" className="offer-img" alt="IIOT" />
            <h5>IIOT</h5>
            <ul className="list-unstyled">
              <li>Connected Systems</li>
              <li>IOT Edge Devices</li>
              <li>Cloud Connectivity Solutions</li>
            </ul>
          </div>
          {/* Box 4 */}
          <div className="offer-box text-center">
            <img src="/images/industrial.jpeg" className="offer-img" alt="Industrial Software" />
            <h5>Industrial Software</h5>
            <ul className="list-unstyled">
              <li>Process Historian</li>
              <li>Batch Management</li>
              <li>Asset Management</li>
              <li>Trace & Track</li>
              <li>MES Solutions</li>
            </ul>
          </div>
          {/* Box 5 */}
          <div className="offer-box text-center">
            <img src="/images/digitlization.jpg" className="offer-img" alt="Digitalization" />
            <h5>Digitalization</h5>
            <ul className="list-unstyled">
              <li>3D/AR Interactive Solutions</li>
              <li>Remote Monitoring Solutions</li>
              <li>Data Analytics Dashboards</li>
              <li>ML Based Solutions</li>
            </ul>
          </div>
        </Slider>
      </div>
      {/* Achievements Section with Background Image */}
      <div className="container mt-5 image-section">
        <h2 className="text-center">Our Achievements</h2>
        <div className="row justify-content-center mt-4">
          <div className="col-lg-3 col-md-6 text-center achievement">
            <i className="fa fa-trophy achievement-icon"></i>
            <div className="achievement-info">
              <h3>{years}+</h3>
              <p>Years</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center achievement">
            <i className="fa fa-users achievement-icon"></i>
            <div className="achievement-info">
              <h3>{customers}+</h3>
              <p>Customers</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center achievement">
            <i className="fa fa-globe achievement-icon"></i>
            <div className="achievement-info">
              <h3>{countries}+</h3>
              <p>Countries</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center achievement">
            <i className="fa fa-briefcase achievement-icon"></i>
            <div className="achievement-info">
              <h3>{projects}+</h3>
              <p>Projects Executed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Used & Partner Network Section */}
      <div className="container mt-5">
        <h2 className="text-center">TECHNOLOGIES USED & PARTNER NETWORK</h2>
        <Slider {...{
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        }}>
          {/* Logo Box 1 */}
          <div className="partner-logo text-center">
            <img src="/images/logo1.png" alt="Company 1" className="img-fluid" />
          </div>
          {/* Logo Box 2 */}
          <div className="partner-logo text-center">
            <img src="/images/logo2.png" alt="Company 2" className="img-fluid" />
          </div>
          {/* Logo Box 3 */}
          <div className="partner-logo text-center">
            <img src="/images/logo3.png" alt="Company 3" className="img-fluid" />
          </div>
          {/* Logo Box 4 */}
          <div className="partner-logo text-center">
            <img src="/images/logo4.png" alt="Company 4" className="img-fluid" />
          </div>
          {/* Add more logos as needed */}
        </Slider>
      </div>
      {/* OUR CLIENTS Section */}
      <div className="container mt-5">
        <h2 className="text-center">OUR CLIENTS</h2>
        <Slider {...{
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        }}>
          {/* Client Logo Box 1 */}
          <div className="partner-logo text-center">
            <img src="/images/client1.png" alt="Client 1" className="img-fluid" />
          </div>
          {/* Client Logo Box 2 */}
          <div className="partner-logo text-center">
            <img src="/images/client2.png" alt="Client 2" className="img-fluid" />
          </div>
          {/* Client Logo Box 3 */}
          <div className="partner-logo text-center">
            <img src="/images/client3.png" alt="Client 3" className="img-fluid" />
          </div>
          {/* Client Logo Box 4 */}
          <div className="partner-logo text-center">
            <img src="/images/client4.png" alt="Client 4" className="img-fluid" />
          </div>
          {/* Add more client logos as needed */}
        </Slider>
      </div>

      {/* Background Video Section */}
      <div className="video-section">
        <video className="background-video" autoPlay loop muted>
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1>YOUR MOST TRUSTED PARTNER IN INDUSTRIAL AUTOMATION & DIGITALIZATION SOLUTIONS</h1>
          <p>
            ICPro Solutions Pvt. Ltd. is a leading solutions provider company for Food / Pharma / Water / Oil & Gas Industry with Automation & Digitalization services that optimize production and ensure operational stability. For more than a decade, IC Pro has provided Automation & IT services with Instrumentation, Safety, Control and Software products & solutions to our global clients spanning Asia Pacific, the Middle East, Europe, and America. Our key focus is to empower our customers with customized turnkey services and business solutions through state-of-the-art technology.
          </p>
          <p>
            Our portfolio of solutions and services includes Instrument and Control Detailed Engineering / Control and Safety System Design and Development / System Integration / Application Software Development / Infrastructure Management Services / Outsourcing / Cloud Computing / Data Analytics / Industry Specific Products Implementation and Support as well as Training.
          </p>
        </div>
      </div>

      {/* // After the video section */}
      <div className="container mt-5 get-in-touch-section">
        <h2 className="text-center">Get in Touch</h2>
        <h5 className="text-center">LOOKING TO AUTOMATE YOUR INDUSTRY?</h5>
        <p className="text-center">Enquiry Submission Form</p>

        <form className="mt-4">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phone" required />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="company" className="form-label">Company</label>
            <input type="text" className="form-control" id="company" />
          </div>
          <div className="mb-3">
            <label htmlFor="enquiry" className="form-label">Enquiry</label>
            <textarea className="form-control" id="enquiry" rows="3" required></textarea>
          </div>

         <div className="mb-3 text-center">
  <div className="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div>
</div>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>

          <button type="submit" className="btn">Submit</button>
        </form>
      </div>

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

      {/* Footer Component */}
      <Footer />  {/* Footer component called here */}

    </div>
  );
};

export default Home;