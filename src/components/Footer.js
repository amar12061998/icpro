// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row text-md-left">

          {/* USA Office */}
          <div className="col-md-3 mb-3">
            <h5>
              <img src="/images/country/usa.png" alt="USA Flag" className="flag-icon" /> USA
            </h5>
            <p>IC Pro Americas Inc</p>
            <p><FaPhone className="footer-icon" /> +1 832-654-6709</p>
            <p><FaEnvelope className="footer-icon" /> <a href="mailto:ussales@icprousa.com" className="footer-link">ussales@icprousa.com</a></p>
            <p><FaGlobe className="footer-icon" /> <a href="http://www.icprousa.com" className="footer-link">www.icprousa.com</a></p>
            <p>
              <a
                href="https://www.google.com/maps/place/IC+Pro+Americas+Inc/@29.7871154,-95.6709202,17z/data=!4m6!3m5!1s0x8640d919a697ad9f:0x6747a48ce82f8d9!8m2!3d29.7871154!4d-95.6687315!16s%2Fg%2F11rmr6x6w7?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Map Link
              </a>
            </p>

          </div>

          {/* Singapore Office */}
          <div className="col-md-3 mb-3">
            <h5>
              <img src="/images/country/singapore.png" alt="Singapore Flag" className="flag-icon" /> SINGAPORE
            </h5>
            <p>IC Pro OG Technologies Pte. Ltd.</p>
            <p><FaPhone className="footer-icon" /> +65-69098734</p>
            <p><FaEnvelope className="footer-icon" /> <a href="mailto:ogsolutions@icpro.sg" className="footer-link">ogsolutions@icpro.sg</a></p>
            <p><FaGlobe className="footer-icon" /> <a href="http://www.icpro.sg" className="footer-link">www.icpro.sg</a></p>
            <p><a href="https://www.google.com/maps/place/3791+Jalan+Bukit+Merah,+E-Centre@Redhill,+Singapore+159471/@1.2852514,103.80939,17z/data=!3m1!4b1!4m8!1m2!2m1!1sJalan+Bukit+Merah,+08+E-Centre@Redhill,+Singapore!3m4!1s0x31da1bd222881f9f:0x1a4a67518fc9254e!8m2!3d1.2852514!4d103.8115787" className="footer-link"
              target="_blank"
              rel="noopener noreferrer">Map Link</a></p>
          </div>

          {/* Dubai Office */}
          <div className="col-md-3 mb-3">
            <h5>
              <img src="/images/country/dubai.png" alt="Dubai Flag" className="flag-icon" /> DUBAI
            </h5>
            <p>Himatrix Middle East Fzco</p>
            <p><FaPhone className="footer-icon" /> +971-4-2512374</p>
            <p><FaEnvelope className="footer-icon" /> <a href="mailto:sales@himatrix.com" className="footer-link">sales@himatrix.com</a></p>
            <p><FaGlobe className="footer-icon" /> <a href="http://www.himatrix.com" className="footer-link">www.himatrix.com</a></p>
            <p><a href="https://www.google.com/maps/place/Dubai+Airport+Free+Zone+-+Dubai+-+United+Arab+Emirates/@25.2609032,55.3710589,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f5db3b14f9b09:0xcae0462a35a0d09!8m2!3d25.2609919!4d55.3731211" className="footer-link" target="_blank"
              rel="noopener noreferrer">Map Link</a></p>
          </div>

          {/* India Office */}
          <div className="col-md-3 mb-3">
            <h5>
              <img src="/images/country/india.png" alt="India Flag" className="flag-icon" /> INDIA
            </h5>
            <p>IC Pro Solutions Pvt. Ltd.</p>
            <p><FaPhone className="footer-icon" /> +91-80-29723300</p>
            <p><FaEnvelope className="footer-icon" /> <a href="mailto:sales@icpro.in" className="footer-link">sales@icpro.in</a></p>
            <p><FaGlobe className="footer-icon" /> <a href="http://www.icpro.in" className="footer-link">www.icpro.in</a></p>
            <p><a href="https://www.google.com/maps/place/IC+Pro+Solutions+Pvt+Ltd/@13.0374242,77.5335578,17z/data=!4m9!1m2!2m1!1sUnit+No.+402,+4th+Floor,+Brigade+Rubix,+%2320,+Yeshwanthpur+Hobli,+HMT+Campus,+Bangalore,+Karnataka,+India.+PIN-560022.!3m5!1s0x3bae3d6b6c5c9e51:0xf479eedb2bfe181c!8m2!3d13.0375635!4d77.5358774!16s%2Fg%2F1thl3w8z?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D" className="footer-link" target="_blank"
              rel="noopener noreferrer">Map Link</a></p>
          </div>

        </div>

        <hr />
        <p className="text-center mt-3">
          © 2024 – All Rights Reserved. IC Pro Solutions Pvt. Ltd.<br />

        </p>
      </div>
    </footer>
  );
};

export default Footer;
