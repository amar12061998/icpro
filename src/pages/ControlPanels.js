// src/pages/ControlPanels.js
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/ControlPanels.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ControlPanels = () => {
    const [showArrow, setShowArrow] = useState(false);
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

      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Control / MCC / Pneumatic / Hazardous Area Panels</h1>
        </div>
      </section>

      {/* MCC Section */}
      <section className="mcc-section py-5">
        <div className="container">
            <div className="row align-items-center">
            <h2 className="section-title text-center">Motor Control Center (MCC)</h2>
            <div className="col-md-6 d-flex align-items-center">
                <div className="image-container me-3">
                <img 
                    src="../images/manufacturing/mcc.jpg" 
                    alt="MCC Panel" 
                    className="img-fluid rounded shadow-lg" 
                    style={{ height: '300px', width: 'auto', objectFit: 'cover' }} 
                />
                </div>
                <div className="image-container">
                <img 
                    src="../images/manufacturing/mcc2.jpg" 
                    alt="MCC Panel" 
                    className="img-fluid rounded shadow-lg" 
                    style={{ height: '300px', width: 'auto', objectFit: 'cover' }} 
                />
                </div>
            </div>
            <div className="col-md-6">
                <p className="section-description">
                Our MCC panels are designed to manage the starting, stopping, and operation of electric motors safely and efficiently. We ensure safety and reliability for various industrial operations by adhering to the highest industry standards. A motor control center (MCC) is a type of electrical switchboard that contains one or more motor starter sections. The advantage of utilizing a CUBIC switchboard solution for motor starter sections is that the solution can be combined with other distribution switchboards. Motor control centers differ from other types of switchboards as they often contain more extensive communication equipment regarding the start/stop of engines as well as signals concerning the function of the engines and motors.
                </p>
            </div>
            </div>
        </div>
      </section>


      {/* Pneumatic Control Panels Section */}
      <section className="pneumatic-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
          <h2 className="section-title">Pneumatic Control Panels</h2>
            <div className="col-md-6 order-md-2">
              {/* <img src="../images/manufacturing/pnemonic.jpeg" alt="Pneumatic Control Panel" className="img-fluid rounded shadow-lg" 
              /> */}
              <img src="../images/manufacturing/pnemonic2.jpeg" alt="Pneumatic Control Panel" className="img-fluid rounded shadow-lg" 
              style={{ width: '100%', height: '350px', objectFit: 'cover' }}/>
            </div>
            <div className="col-md-6 order-md-1">
              <p className="section-description">
                Customers may have a requirement to consolidate controls with pneumatics within the same control panel. These control panels will be designed typically with solenoids or solenoid manifolds mounted within the enclosure. Pneumatic bullheads for field connections will be mounted on the side or bottom of the control panel. Main air will be fed into the panel through a filter/regulator assembly. Keltour has the ability to assemble tubing in Stainless Steel (304 or 316) or plastic.
              </p>
              <h4>What is a Pneumatic Panel?</h4>
              <p>A panel that provides the means to actuate valves used to control air flow in a pneumatic system. This control may be used for cylinders, pneumatic motors, blowers etc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hazardous Environment Control Panels Section */}
      <section className="hazardous-section py-5">
  <div className="container">
    <div className="row align-items-center">
    <h2 className="section-title">Hazardous Environment Control Panels</h2>
      <div className="col-md-6">
        <img 
          src="../images/manufacturing/Hazardous.jpg" 
          alt="Hazardous Area Control Panel" 
          className="img-fluid rounded shadow-lg mb-3" 
          style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
        />
        <img 
          src="../images/manufacturing/Hazardous2.jpg" 
          alt="Hazardous Area Control Panel 2" 
          className="img-fluid rounded shadow-lg" 
          style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
        />
      </div>
      <div className="col-md-6">
        
        <p className="section-description">
          Also known as explosion-proof or flame-proof panels, hazardous environment control panels are specifically engineered for locations where there is a significant risk of explosion. These include industrial sectors like pharmaceutical production, wastewater treatment, environmental emission control, and other fields that manage combustible gases, vapors, liquids, or airborne particles.
        </p>
        <p className="section-description">
          All control panels designed for hazardous environments comply with rigorous UL and C-UL standards, ensuring they meet safety protocols across:
        </p>
        <ul className="section-list">
          <li>Classification of hazardous zones</li>
          <li>Types of flammable or explosive substances</li>
          <li>Potential exposure to hazardous materials</li>
          <li>Temperature rating and controls</li>
          <li>Protective measures for electrical and mechanical components</li>
          <li>Zone and division system identification</li>
        </ul>
        <p className="section-description">
          These control panels must be clearly labeled to indicate the specific environments in which they can safely operate. At ICPro, we provide all necessary certifications, including engraved or marked labeling, as well as instructions, warnings, and project-specific requirements.
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

export default ControlPanels;
