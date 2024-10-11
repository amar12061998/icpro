// src/pages/Manufacturing.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Manufacturing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Manufacturing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
      <Header />

      <section className="manufacturing-hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Manufacturing</h1>
        </div>
      </section>

      <section className="intro-heading-section">
        <div className="container text-center">
          <h2>We perform all Manufacturing activities in-house with Innovative Designs, International Standards & high-quality workmanship.</h2>
        </div>
      </section>

      <section className="carousel-section">
  <Slider {...settings}>
    {[
      {
        src: "images/manufacturing/Panel-Assembly-area.jpg",
        alt: "Panel Assembly Area",
        caption: "Panel Assembly Area"
      },
      {
        src: "images/manufacturing/Automation-Control-Panels.jpg",
        alt: "Manufacturing 2",
        caption: "Automation-Control-Panels"
      },
      {
        src: "images/manufacturing/End-of-Line-Tester-Panels-EOL.jpg",
        alt: "Manufacturing 3",
        caption: "End of Line Tester Panels-EOL"
      },
      {
        src: "images/manufacturing/Hazardous-Area-panels.jpg",
        alt: "Manufacturing 4",
        caption: "Hazardous Area panels"
      },
      {
        src: "images/manufacturing/Motor-Control-Center-MCC.jpg",
        alt: "Manufacturing 5",
        caption: "Motor Control Center-MCC"
      },
      {
        src: "images/manufacturing/Panel-shop.jpg",
        alt: "Panel Assembly Area",
        caption: "Panel shop"
      },
      {
        src: "images/manufacturing/Testing-Staging-area.jpg",
        alt: "Manufacturing 2",
        caption: "Testing Staging area"
      },
      {
        src: "images/manufacturing/Manufacturing-1.jpg",
        alt: "Manufacturing 3",
        caption: "Manufacturing"
      },
      {
        src: "images/manufacturing/Manufacturing-2.jpg",
        alt: "Manufacturing 4",
        caption: "Manufacturing"
      },
      {
        src: "images/manufacturing/Manufacturing-3.jpg",
        alt: "Manufacturing 5",
        caption: "Manufacturing"
      },
    ].map((item, index) => (
      <div className="carousel-item1" key={index}>
        <img src={item.src} alt={item.alt} />
        <p className="carousel-caption">{item.caption}</p>
      </div>
    ))}
  </Slider>
</section>


      {/* What We Offer Section */}
<section className="offer-section">
  <div className="container">
    <h2 className="text-center">WHAT WE OFFER</h2>
    <p className="text-center">
      IC Pro’s inhouse manufacturing capability assures on-schedule delivery, high quality, and cost-effectiveness. Our team of design engineers develops 3D models of the control panels to reduce manufacturing errors and optimize space utilization. Our highly skilled electricians and technicians are well-trained in industrial safety & quality standards to assure the products are manufactured with high quality and efficiency.
    </p>

    {/* Offers Content with Shared Image */}
    <div className="row">
      {/* Shared Image on the Left */}
      <div className="col-md-6">
        <img src="images/manufacturing/control.jpg" alt="Control panel for manufacturing equipment"
           className="offer-image" />
      </div>

      {/* Offers on the Right */}
      <div className="col-md-6 d-flex flex-column justify-content-center">
        
        {/* First Offer */}
        <div className="offer-item">
        <Link to="/control-panels" style={{ textDecoration: 'none', color: 'black' }}>
          <h3>Control / MCC / Pneumatic / Hazardous Area Panels</h3>  
        </Link>
          <p>
            Design, Manufacturing, Assembly, Integration, Testing, Installation & Commissioning of Controls / Electrical / Pneumatic Panels
          </p>
        </div>

        {/* Second Offer */}
        <div className="offer-item">
        <Link to="/manufacturing/Process-skids" style={{ textDecoration: 'none', color: 'black' }}>
          <h3>Process Skids / Fixtures</h3>
        </Link>
          <p>
            Design, Manufacturing, Assembly, Integration, Testing, Installation & Commissioning of Process Skids
          </p>
        </div> 
      </div>
    </div>
  </div>
</section>

{/* New Section: Innovative Design, International Standards & Quality Workmanship */}
<section className="innovation-section py-5">
  <div className="container">
    <h2 className="text-center mb-4">INNOVATIVE DESIGN, INTERNATIONAL STANDARDS & QUALITY WORKMANSHIP</h2>
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <p className="paragraph">
          Implementing innovation & advanced engineering in Industrial Control panel design and manufacturing saves time and effort to deliver.
        </p>
        <p className="paragraph">
          3D modeling assures accurate and accessible interior and exterior design, error reduction in the assembly and wiring, effective utilization of panel space;
          improves the aesthetic look and reduces overall time requirement to complete the job.
        </p>
        <p className="paragraph">
          Applying advanced Electrical Engineering software like Solid Works 3D, E-Plan Electric P8, and Auto CAD for the engineering and design of Control panels.
        </p>
      </div>
    </div>
  </div>
</section>

{/* New Section: Quality, Standards & Compliance */}
<section className="quality-standards quality-standards-bg py-5">
  <div className="container">
    <h2 className="text-center mb-5">QUALITY, STANDARDS & COMPLIANCE</h2>
    <div className="row text-center">
      {/* Quality & Safety Certifications */}
      <div className="col-lg-4 mb-4">
        <div className="quality-box p-4">
          <i className="bi bi-shield-check mb-3 display-4 text-primary"></i>
          <h3>Quality & Safety Certifications</h3>
          <ul className="list-unstyled">
            <li><i className="bi bi-check-circle text-success"></i> ISO 9001:2015 Quality Management System</li>
            <li><i className="bi bi-check-circle text-success"></i> ISO 45001:2018 OHSMS System</li>
            <li><i className="bi bi-check-circle text-success"></i> BIZSAFE 3 WSH Risk Management</li>
          </ul>
        </div>
      </div>
      {/* International Design Standards */}
      <div className="col-lg-4 mb-4">
        <div className="quality-box p-4">
          <i className="bi bi-globe mb-3 display-4 text-primary"></i>
          <h3>International Design Standards</h3>
          <ul className="list-unstyled">
            <li><i className="bi bi-check-circle text-success"></i> UL for North America</li>
            <li><i className="bi bi-check-circle text-success"></i> CE for Europe</li>
            <li><i className="bi bi-check-circle text-success"></i> IEC Standards for Other countries</li>
          </ul>
        </div>
      </div>
      {/* Regulatory Compliance */}
      <div className="col-lg-4 mb-4">
        <div className="quality-box p-4">
          <i className="bi bi-gear mb-3 display-4 text-primary"></i>
          <h3>Regulatory Compliance</h3>
          <ul className="list-unstyled">
            <li><i className="bi bi-check-circle text-success"></i> Food & Pharma 21 CFR / CGMP</li>
            <li><i className="bi bi-check-circle text-success"></i> Oil & Gas ABS / DNV</li>
            <li><i className="bi bi-check-circle text-success"></i> ABS, DnV, LRS Standards such as API, BASEEFA, UL</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


{/* New Certifications Section */}
<section className="certifications py-5">
  <div className="container">
    <h2 className="text-center mb-4">CERTIFICATIONS</h2>
    <div className="row text-center">
      {/* Certification Images */}
      <div className="col-lg-4 mb-4">
        <img src="images/manufacturing/certificate1.png" alt="Certification 1" className="img-fluid" />
      </div>
      <div className="col-lg-4 mb-4">
        <img src="images/manufacturing/certificate2.png" alt="Certification 2" className="img-fluid" />
      </div>
      <div className="col-lg-4 mb-4">
        <img src="images/manufacturing/certificate3.png" alt="Certification 3" className="img-fluid" />
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

      <Footer />
    </div>
  );
};

export default Manufacturing;
