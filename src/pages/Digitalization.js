import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Digitalization.css'; // Importing the CSS file
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

const Digitalization = () => {
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
      
      {/* Hero Section */}
      <section className="digitalization-hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Digitalization</h1>
        </div>
      </section>

      {/* Main Section */}
      <section className="digitalization-main-section">
        <div className="container">
          <h2 className="main-heading">
            Transform your business with our state-of-the-art digital solutions. Imagine boosting your productivity like never before, effortlessly identifying and mitigating risks early, and ensuring your operations run seamlessly with proactive insights. Our innovative tools provide the ultimate visibility and control, keeping your enterprise connected and ahead of the curve.
          </h2>

          {/* Content Block 1 */}
          <div className="row content-block align-items-center">
            <div className="col-md-6">
              <img src="/images/digitalization/operational_safety.png" alt="Operational Safety" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>Operational Safety and Risk Management</h2>
              <p>
              Operating and maintaining Oil & Gas production facilities is a complex and challenging task, 
              fraught with risks from hazardous processes and demanding work environments. As the industry evolves, 
              with increasing costs, complexity, and heightened focus on sustainability, achieving   operational 
              excellence has never been more critical. We specialize in delivering cutting-edge solutions tailored to 
              elevate your operational standards. Our comprehensive systems, including advanced alarm management, 
              robust process safety management, and real- time performance monitoring of equipment, are designed to mitigate risks, enhance safety, and ensure smooth, efficient operations.
              </p>
              <p>
              Partner with us to not only meet industry challenges but to excel in them, setting new benchmarks  for operational excellence.
              </p>
              <button className="btn btn-primary solution-button">
                Solution
                <i className="fa fa-arrow-right arrow-icon"></i> {/* Arrow icon */}
              </button>

            </div>
          </div>

          {/* Content Block 2 */}
          <div className="row content-block align-items-center flex-md-row-reverse">
            <div className="col-md-6">
              <img src="/images/digitalization/workplace_safety.png" alt="Workplace Safety" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>Workplace Safety and Health Monitoring</h2>
              <p>
                Worker safety is the cornerstone of any successful construction or production site. Our advanced real-time safety and health monitoring systems are designed to protect your most valuable asset—your workforce. By proactively identifying and mitigating risks, our solutions create a safer and healthier work environment, significantly reducing the likelihood of injuries and incidents.
              </p>
              <button className="btn btn-primary solution-button">
                Solution
                <i className="fa fa-arrow-right arrow-icon"></i> {/* Arrow icon */}
              </button>
            </div>
          </div>

          {/* Content Block 3 */}
          <div className="row content-block align-items-center">
            <div className="col-md-6">
              <img src="/images/digitalization/energy_efficiency.png" alt="Energy Efficiency" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>Production & Energy Efficiency Monitoring</h2>
              <p>
              Unlock the full potential of your operations with our advanced Production & Energy Efficiency Monitoring solutions. Designed to help you maximize productivity while minimizing energy waste, our innovative system provides real-time insights that empower you to optimize every aspect of your production processes.
              </p>
              <p>
              With our cutting-edge technology, you’ll have the tools to fine-tune your operations, boost efficiency, and achieve significant energy savings—without compromising on performance. Imagine being able to pinpoint inefficiencies instantly, adjust processes on the fly, and make data-driven decisions that lead to sustainable, long-term success.
              </p>
              <button className="btn btn-primary solution-button">
                Solution
                <i className="fa fa-arrow-right arrow-icon"></i> {/* Arrow icon */}
              </button>
            </div>
          </div>

          {/* Content Block 4 */}
          <div className="row content-block align-items-center flex-md-row-reverse">
            <div className="col-md-6">
              <img src="/images/digitalization/digital_enterprise.png" alt="Digital Enterprise" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>Digital Enterprise</h2>
              <p>
              In today’s fast-paced, digital-first world, staying ahead of the competition requires more than just keeping up—it demands innovation at every level. Our Digital Enterprise solutions are designed to transform your business operations, leveraging the latest in digital technologies to create a fully integrated, smart enterprise. From seamless data integration and advanced analytics to IoT-enabled process automation, our solutions empower you to make smarter decisions, faster. By harnessing the power of digitalization, we help you unlock new efficiencies, enhance productivity, and drive growth across your entire organization. Join us on the journey to digital transformation and redefine what’s possible for your business.
              </p>
              <button className="btn btn-primary solution-button">
                Solution
                <i className="fa fa-arrow-right arrow-icon"></i> {/* Arrow icon */}
              </button>
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
        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="whatsapp-icon">
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

export default Digitalization;
