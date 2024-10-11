import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [country, setCountry] = useState('INDIA');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [isServicesHover, setIsServicesHover] = useState(false);
  const [activeSubOption, setActiveSubOption] = useState(null);
  const [isServicesSubMenuOpen, setServicesSubMenuOpen] = useState(false);
  const [isManufacturingSubMenuOpen, setManufacturingSubMenuOpen] = useState(false);

  const location = useLocation();
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const countries = ['INDIA', 'USA', 'SINGAPORE', 'DUBAI'];

  useEffect(() => {
    if (headerRef.current && isDropdownOpen) {
      const headerRect = headerRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: headerRect.bottom,
        left: headerRect.left,
      });
    }
  }, [isDropdownOpen]);
  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the menu
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setMenuOpen]);

  const handleCountrySelect = (selectedCountry) => {
    setCountry(selectedCountry);
    setDropdownOpen(false);
  };

  const handleCountryClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleServicesHover = () => {
    setIsServicesHover(true);
  };

  const handleServicesLeave = () => {
    setIsServicesHover(false);
    setActiveSubOption(null);
  };

  const handleSubOptionHover = (option) => {
    setActiveSubOption(option);
  };

  return (
    <div className="header-box" ref={headerRef}>
      {/* First Row: Logo, Country Selector, and Main Nav */}
      <div className="header-row d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <Link to="/">
            <img src="/images/icpro.png" alt="Logo" className="logo fw-bold" />
          </Link>
        </div>
        <div className="nav d-flex align-items-center">
          <div className="menu-toggle fw-bold" onClick={toggleMenu}>
            ☰
          </div>
          <div className={`nav-links ${isMenuOpen ? 'open' : ''} d-none d-md-flex`}>
            <Link to="/news" className={`nav-item ${location.pathname === '/news' ? 'active-link' : ''}`}>News & Events</Link>
            <Link to="/about" className={`nav-item ${location.pathname === '/about' ? 'active-link' : ''}`}>About Us</Link>
            <Link to="/careers" className={`nav-item ${location.pathname === '/careers' ? 'active-link' : ''}`}>Careers</Link>
            <Link to="/membership" className={`nav-item ${location.pathname === '/membership' ? 'active-link' : ''}`}>Membership</Link>
            <input type="text" className="search-box" placeholder="Search..." />
          </div>
        </div>
      </div>

      {/* Second Row: Company Info and Additional Links */}
      <div className="sub-nav-row d-flex justify-content-between">
        <div className="country-selector fw-bold" onClick={handleCountryClick}>
          {country} {isDropdownOpen ? '▲' : '▼'}
        </div>

        {isDropdownOpen && (
          <div className="dropdown" style={{ marginTop: '-5px',marginLeft: '100px;', position: 'absolute', top: dropdownPosition.top, left: dropdownPosition.left, backgroundColor: 'white',border: '1px solid #ccc', borderRadius: '5px',  zIndex: 10 }}>
            {countries.map((item) =>
              item !== country ? (
                <div key={item} onClick={() => handleCountrySelect(item)}>
                  {item}
                </div>
              ) : null
            )}
          </div>
        )}

        <div className="d-none d-md-flex">
          <Link to="/" className={`nav-item fw-bold ${location.pathname === '/' ? 'active-link' : ''}`}>Home</Link>
          <Link to="/products" className={`nav-item fw-bold ${location.pathname === '/products' ? 'active-link' : ''}`}>Products</Link>
          
          {/* Services Dropdown */}
          <div
            className="nav-item fw-bold services-dropdown"
            onMouseEnter={handleServicesHover}
            onMouseLeave={handleServicesLeave}
          >
            Services
            {isServicesHover && (
              <div className="services-subnav">
                <div className="main-options">
                  <Link
                    to="/automation"
                    className={`sub-nav-item ${location.pathname === '/automation' ? 'active-link' : ''}`}
                    onMouseEnter={() => handleSubOptionHover('automation')}
                  >
                    Automation
                  </Link>
                  <Link
                    to="/manufacturing"
                    className={`sub-nav-item ${location.pathname === '/manufacturing' ? 'active-link' : ''}`}
                    onMouseEnter={() => handleSubOptionHover('manufacturing')}
                  >
                    Manufacturing
                  </Link>
                  <Link
                    to="/digitalization"
                    className={`sub-nav-item ${location.pathname === '/digitalization' ? 'active-link' : ''}`}
                    onMouseEnter={() => handleSubOptionHover('digitalization')}
                  >
                    Digitalization
                  </Link>
                </div>

                {activeSubOption && (
                  <div className="sub-options">
                    {activeSubOption === 'manufacturing' && (
                      <>
                        <Link to="/manufacturing/mcc" className="sub-nav-item">Control Panels</Link>
                        <Link to="/manufacturing/process-skids" className="sub-nav-item">Process Skids</Link>
                      </>
                    )}
                    {activeSubOption === 'automation' && (
                      <div className="no-sub-options">No sub-options for Automation</div>
                    )}
                    {activeSubOption === 'digitalization' && (
                      <div className="no-sub-options">No sub-options for Digitalization</div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          <Link to="/solution" className={`nav-item fw-bold ${location.pathname === '/solution' ? 'active-link' : ''}`}>Solution</Link>
          <Link to="/training" className={`nav-item fw-bold ${location.pathname === '/training' ? 'active-link' : ''}`}>Training</Link>
          <Link to="/support" className={`nav-item fw-bold ${location.pathname === '/support' ? 'active-link' : ''}`}>Support</Link>
          <Link to="/contact-us" className={`nav-item fw-bold ${location.pathname === '/contact-us' ? 'active-link' : ''}`}>Contact Us</Link>
        </div>
      </div>

      {/* Responsive Menu for small devices */}
    {isMenuOpen && (
      <div className="responsive-nav" ref={menuRef}>
        <input type="text" className="search-box" placeholder="Search..." />
        <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active-link' : ''}`}>Home</Link>
        <Link to="/about" className={`nav-item ${location.pathname === '/about' ? 'active-link' : ''}`}>About Us</Link>
        <Link to="/solution" className={`nav-item ${location.pathname === '/solution' ? 'active-link' : ''}`}>Solution</Link>
        <Link to="/training" className={`nav-item ${location.pathname === '/training' ? 'active-link' : ''}`}>Training</Link>
        <Link to="/support" className={`nav-item ${location.pathname === '/support' ? 'active-link' : ''}`}>Support</Link>
        <Link to="/contact-us" className={`nav-item ${location.pathname === '/contact-us' ? 'active-link' : ''}`}>Contact Us</Link>
        <Link to="/careers" className={`nav-item ${location.pathname === '/careers' ? 'active-link' : ''}`}>Careers</Link>
        <Link to="/membership" className={`nav-item ${location.pathname === '/membership' ? 'active-link' : ''}`}>Membership</Link>
        <Link to="/news" className={`nav-item ${location.pathname === '/news' ? 'active-link' : ''}`}>News & Events</Link>
        <Link to="/products" className={`nav-item ${location.pathname === '/products' ? 'active-link' : ''}`}>Products</Link>
        <div className="submenu-container">
          <span onClick={() => setServicesSubMenuOpen(!isServicesSubMenuOpen)} className="nav-item">Services {isServicesSubMenuOpen ? '^' : ''}</span>
          {isServicesSubMenuOpen && (
            <div className="submenu">
              <span onClick={() => setManufacturingSubMenuOpen(!isManufacturingSubMenuOpen)} className="nav-item">Manufacturing {isManufacturingSubMenuOpen ? '^' : ''}</span>
              {isManufacturingSubMenuOpen && (
                <div className="submenu">
                  <Link to="/manufacturing/mcc" className="submenu-item">Control Panels</Link>
                  <Link to="/manufacturing/process-skids" className="submenu-item">Process Skids</Link>
                </div>
              )}
              {/* New submenus for Automation and Digitalization */}
              <Link to="/automation" className="submenu-item">Automation</Link>
              <Link to="/digitalization" className="submenu-item">Digitalization</Link>
            </div>
          )}
        </div>
      </div>
    )}

    </div>
  );
};

export default Header;
