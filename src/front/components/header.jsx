import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  const navItems = [
    { name: "Store", path: "/store" },
    { name: "Mac", path: "/mac" },
    { name: "iPad", path: "/ipad" },
    { name: "iPhone", path: "/iphone" },
    { name: "Watch", path: "/watch" },
    { name: "Vision", path: "/vision" },
    { name: "AirPods", path: "/airpods" },
    { name: "TV & Home", path: "/tv-home" },
    { name: "Entertainment", path: "/entertainment" },
    { name: "Accessories", path: "/accessories" },
    { name: "Support", path: "/support" },
  ];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .header-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 44px;
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          z-index: 9999;
          transition: all 0.3s;
          border-bottom: 1px solid transparent;
        }
        .header-nav.scrolled {
          background-color: rgba(255, 255, 255, 0.92);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 44px;
        }
        .nav-links {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 24px;
          flex: 1;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-weight: 400;
        }
        .nav-link {
          color: #1d1d1f;
          opacity: 0.8;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .nav-link:hover {
          opacity: 1;
          text-decoration: none;
        }
        .nav-link.active {
          opacity: 1;
          color: #06c;
        }
        .nav-icons {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .nav-icon-link {
          color: #1d1d1f;
          opacity: 0.8;
          display: flex;
          align-items: center;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 18px;
          height: 12px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 10000;
        }
        .hamburger-line {
          width: 18px;
          height: 1px;
          background-color: #1d1d1f;
          transition: transform 0.3s, opacity 0.3s;
        }
        .mobile-nav {
          position: fixed;
          top: 44px;
          left: 0;
          right: 0;
          background-color: #fff;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease-out;
          border-bottom: 1px solid #d2d2d7;
        }
        .mobile-nav.open {
          max-height: calc(100vh - 44px);
          overflow-y: auto;
        }
        .mobile-nav-list {
          padding: 20px 24px;
          list-style: none;
        }
        .mobile-nav-item {
          padding: 12px 0;
          border-bottom: 1px solid #e6e6e8;
        }
        .mobile-nav-link {
          font-size: 17px;
          color: #1d1d1f;
          text-decoration: none;
          display: block;
        }
        .mobile-nav-link.active {
          color: #06c;
        }
        @media (max-width: 1024px) {
          .nav-links {
            display: none !important;
          }
          .hamburger {
            display: flex !important;
          }
        }
        @media (min-width: 1025px) {
          .hamburger {
            display: none !important;
          }
          .mobile-nav {
            display: none !important;
          }
        }
      `}</style>

      <nav className={`header-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Apple Logo - Link to Home */}
          <Link to="/" className="nav-link" style={{ display: 'flex', alignItems: 'center' }}>
            <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="m13.0729 17.6825c-.7247-1.6228-2.0536-2.8795-3.5346-3.5041 1.0479-1.2158 1.619-2.7385 1.619-4.347 0-3.6136-2.953-6.553-6.5831-6.8314v-.99999c0-.414-.3355-.75-.75-.75h-.0001c-.414 0-.75.336-.75.75v.99999c-3.6302.2785-6.5832 3.2179-6.5832 6.8314 0 1.6085.5712 3.1312 1.6191 4.347-1.481.6246-2.8099 1.8814-3.5346 3.5041-.6946 1.556-.7895 3.3146-.2509 4.8585.5385 1.5438 1.6913 2.7905 3.2018 3.4391.1948.835.5581 1.6578 1.0969 2.405.7814 1.0839 1.8885 1.8655 3.1225 2.2062.4392.1212.899.1824 1.3605.1824.4615 0 .9213-.0612 1.3605-.1824 1.234-.3407 2.3411-1.1223 3.1225-2.2062.5388-.7472.9021-1.57 1.0969-2.405 1.5105-.6486 2.6633-1.8953 3.2018-3.4391.5386-1.5439.4437-3.3025-.2509-4.8585zm-6.5831-5.9325c-2.0255 0-3.678-1.5711-3.8577-3.5439.7215-.0596 1.9006-.1025 3.8577-.1025 1.9571 0 3.1362.0429 3.8577.1025-.1797 1.9728-1.8322 3.5439-3.8577 3.5439z" />
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Icons */}
          <div className="nav-icons">
            <Link to="/search" className="nav-icon-link" aria-label="Search">
              <svg height="44" viewBox="0 0 17 44" width="17" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="m16.3178 29.4355-4.3212-4.3212c.9797-1.2922 1.5649-2.8879 1.5649-4.6143 0-4.1402-3.3678-7.508-7.508-7.508-4.1403 0-7.508 3.3678-7.508 7.508 0 4.1402 3.3677 7.508 7.508 7.508 1.7264 0 3.3221-.5852 4.6143-1.5649l4.3212 4.3212c.2451.2451.6425.2451.8876 0 .2451-.2451.2451-.6425 0-.8876zm-14.2643-8.9355c0-3.4048 2.7705-6.1753 6.1753-6.1753 3.4048 0 6.1753 2.7705 6.1753 6.1753 0 3.4048-2.7705 6.1753-6.1753 6.1753-3.4048 0-6.1753-2.7705-6.1753-6.1753z" />
              </svg>
            </Link>
            <Link to="/bag" className="nav-icon-link" aria-label="Shopping Bag">
              <svg height="44" viewBox="0 0 13 44" width="13" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="m11.6486 16.4969h-2.1029v-2.1029c0-1.4962-1.2186-2.7149-2.7149-2.7149s-2.7149 1.2187-2.7149 2.7149v2.1029h-2.1029c-.4049 0-.7334.3285-.7334.7334v13.1584c0 .4049.3285.7334.7334.7334h8.6352c.4049 0 .7334-.3285.7334-.7334v-13.1584c0-.4049-.3285-.7334-.7334-.7334zm-6.3993-2.1029c0-.8824.7181-1.6005 1.6005-1.6005s1.6005.7181 1.6005 1.6005v2.1029h-3.201v-2.1029z" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line" style={{
              transform: mobileMenuOpen ? 'translateY(5.5px) rotate(45deg)' : 'none'
            }} />
            <span className="hamburger-line" style={{
              opacity: mobileMenuOpen ? 0 : 1
            }} />
            <span className="hamburger-line" style={{
              transform: mobileMenuOpen ? 'translateY(-5.5px) rotate(-45deg)' : 'none'
            }} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="mobile-nav-item">
                <Link 
                  to={item.path} 
                  className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;