import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <style>{`
        .footer-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 20px 22px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }
        @media (max-width: 734px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-legal {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>

      <div className="footer-section">
        {/* Main Footer Links */}
        <div className="footer-grid">
          <div style={styles.footerColumn}>
            <h4 style={styles.footerColumnTitle}>Shop and Learn</h4>
            <ul style={styles.footerList}>
              <li><Link to="/store" style={styles.footerLink}>Store</Link></li>
              <li><Link to="/mac" style={styles.footerLink}>Mac</Link></li>
              <li><Link to="/ipad" style={styles.footerLink}>iPad</Link></li>
              <li><Link to="/iphone" style={styles.footerLink}>iPhone</Link></li>
              <li><Link to="/watch" style={styles.footerLink}>Watch</Link></li>
              <li><Link to="/vision" style={styles.footerLink}>Vision</Link></li>
              <li><Link to="/airpods" style={styles.footerLink}>AirPods</Link></li>
              <li><Link to="/tv-home" style={styles.footerLink}>TV & Home</Link></li>
              <li><Link to="/accessories" style={styles.footerLink}>Accessories</Link></li>
              <li><Link to="/gift-cards" style={styles.footerLink}>Gift Cards</Link></li>
            </ul>
          </div>

          <div style={styles.footerColumn}>
            <h4 style={styles.footerColumnTitle}>Services</h4>
            <ul style={styles.footerList}>
              <li><Link to="/apple-music" style={styles.footerLink}>Apple Music</Link></li>
              <li><Link to="/apple-tv" style={styles.footerLink}>Apple TV+</Link></li>
              <li><Link to="/apple-fitness" style={styles.footerLink}>Apple Fitness+</Link></li>
              <li><Link to="/apple-news" style={styles.footerLink}>Apple News+</Link></li>
              <li><Link to="/apple-arcade" style={styles.footerLink}>Apple Arcade</Link></li>
              <li><Link to="/icloud" style={styles.footerLink}>iCloud</Link></li>
              <li><Link to="/apple-one" style={styles.footerLink}>Apple One</Link></li>
              <li><Link to="/apple-pay" style={styles.footerLink}>Apple Pay</Link></li>
              <li><Link to="/apple-books" style={styles.footerLink}>Apple Books</Link></li>
              <li><Link to="/app-store" style={styles.footerLink}>App Store</Link></li>
            </ul>
          </div>

          <div style={styles.footerColumn}>
            <h4 style={styles.footerColumnTitle}>Account</h4>
            <ul style={styles.footerList}>
              <li><Link to="/manage-id" style={styles.footerLink}>Manage Your Apple ID</Link></li>
              <li><Link to="/store-account" style={styles.footerLink}>Apple Store Account</Link></li>
              <li><Link to="/icloud" style={styles.footerLink}>iCloud.com</Link></li>
            </ul>
            <h4 style={{...styles.footerColumnTitle, marginTop: 24}}>Entertainment</h4>
            <ul style={styles.footerList}>
              <li><Link to="/apple-tv" style={styles.footerLink}>Apple TV+</Link></li>
              <li><Link to="/apple-music" style={styles.footerLink}>Apple Music</Link></li>
              <li><Link to="/apple-arcade" style={styles.footerLink}>Apple Arcade</Link></li>
              <li><Link to="/apple-podcasts" style={styles.footerLink}>Apple Podcasts</Link></li>
              <li><Link to="/apple-books" style={styles.footerLink}>Apple Books</Link></li>
            </ul>
          </div>

          <div style={styles.footerColumn}>
            <h4 style={styles.footerColumnTitle}>Apple Store</h4>
            <ul style={styles.footerList}>
              <li><Link to="/find-store" style={styles.footerLink}>Find a Store</Link></li>
              <li><Link to="/genius-bar" style={styles.footerLink}>Genius Bar</Link></li>
              <li><Link to="/today-at-apple" style={styles.footerLink}>Today at Apple</Link></li>
              <li><Link to="/apple-camp" style={styles.footerLink}>Apple Camp</Link></li>
              <li><Link to="/apple-trade-in" style={styles.footerLink}>Apple Trade In</Link></li>
              <li><Link to="/financing" style={styles.footerLink}>Financing</Link></li>
              <li><Link to="/order-status" style={styles.footerLink}>Order Status</Link></li>
              <li><Link to="/shopping-help" style={styles.footerLink}>Shopping Help</Link></li>
            </ul>
          </div>

          <div style={styles.footerColumn}>
            <h4 style={styles.footerColumnTitle}>For Business</h4>
            <ul style={styles.footerList}>
              <li><Link to="/business" style={styles.footerLink}>Apple and Business</Link></li>
              <li><Link to="/business/shop" style={styles.footerLink}>Shop for Business</Link></li>
            </ul>
            <h4 style={{...styles.footerColumnTitle, marginTop: 24}}>For Education</h4>
            <ul style={styles.footerList}>
              <li><Link to="/education" style={styles.footerLink}>Apple and Education</Link></li>
              <li><Link to="/education/shop" style={styles.footerLink}>Shop for K-12</Link></li>
              <li><Link to="/education/college" style={styles.footerLink}>Shop for College</Link></li>
            </ul>
          </div>

          <div style={styles.footerColumn}>
            <h4 style={styles.footerColumnTitle}>Apple Values</h4>
            <ul style={styles.footerList}>
              <li><Link to="/accessibility" style={styles.footerLink}>Accessibility</Link></li>
              <li><Link to="/education" style={styles.footerLink}>Education</Link></li>
              <li><Link to="/environment" style={styles.footerLink}>Environment</Link></li>
              <li><Link to="/inclusion-diversity" style={styles.footerLink}>Inclusion and Diversity</Link></li>
              <li><Link to="/privacy" style={styles.footerLink}>Privacy</Link></li>
              <li><Link to="/racial-equity" style={styles.footerLink}>Racial Equity and Justice</Link></li>
              <li><Link to="/supplier-responsibility" style={styles.footerLink}>Supplier Responsibility</Link></li>
            </ul>
          </div>

          <div style={styles.footerColumn}>
            <h4 style={styles.footerColumnTitle}>About Apple</h4>
            <ul style={styles.footerList}>
              <li><Link to="/newsroom" style={styles.footerLink}>Newsroom</Link></li>
              <li><Link to="/leadership" style={styles.footerLink}>Apple Leadership</Link></li>
              <li><Link to="/careers" style={styles.footerLink}>Career Opportunities</Link></li>
              <li><Link to="/investors" style={styles.footerLink}>Investors</Link></li>
              <li><Link to="/ethics-compliance" style={styles.footerLink}>Ethics & Compliance</Link></li>
              <li><Link to="/events" style={styles.footerLink}>Events</Link></li>
              <li><Link to="/contact" style={styles.footerLink}>Contact Apple</Link></li>
            </ul>
          </div>
        </div>

        {/* Shop Info */}
        <div style={styles.shopInfo}>
          <p style={styles.shopText}>
            More ways to shop: <Link to="/find-store" style={styles.inlineLink}>Find an Apple Store</Link> or <Link to="/retail" style={styles.inlineLink}>other retailer</Link> near you. Or call 1-800-MY-APPLE.
          </p>
        </div>

        {/* Footer Bottom */}
        <div style={styles.footerBottom}>
          <div style={styles.footerLegal}>
            <p style={styles.copyright}>
              Copyright © 2025 Apple Inc. All rights reserved.
            </p>
            <div style={styles.legalLinks}>
              <Link to="/privacy" style={styles.legalLink}>Privacy Policy</Link>
              <Link to="/terms" style={styles.legalLink}>Terms of Use</Link>
              <Link to="/sales" style={styles.legalLink}>Sales and Refunds</Link>
              <Link to="/legal" style={styles.legalLink}>Legal</Link>
              <Link to="/sitemap" style={styles.legalLink}>Site Map</Link>
            </div>
          </div>
          <div style={styles.footerLocale}>
            <Link to="/locale" style={styles.localeLink}>United States</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f5f5f7',
    color: '#6e6e73',
    padding: '20px 0',
    borderTop: '1px solid #d2d2d7',
    fontSize: 12,
  },
  footerColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  footerColumnTitle: {
    fontSize: 12,
    fontWeight: 600,
    color: '#1d1d1f',
    marginBottom: 12,
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  footerLink: {
    color: '#424245',
    textDecoration: 'none',
    fontSize: 12,
    lineHeight: 1.8,
    display: 'inline-block',
  },
  shopInfo: {
    padding: '20px 0',
    borderBottom: '1px solid #d2d2d7',
    marginBottom: 20,
  },
  shopText: {
    fontSize: 12,
    color: '#6e6e73',
  },
  inlineLink: {
    color: '#06c',
    textDecoration: 'none',
  },
  footerBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  footerLegal: {
    display: 'flex',
    gap: 24,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  copyright: {
    color: '#6e6e73',
  },
  legalLinks: {
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
  },
  legalLink: {
    color: '#424245',
    textDecoration: 'none',
    paddingRight: 8,
    borderRight: '1px solid #d2d2d7',
    lineHeight: 1,
  },
  footerLocale: {
    color: '#424245',
  },
  localeLink: {
    color: '#424245',
    textDecoration: 'none',
  },
};

export default Footer;