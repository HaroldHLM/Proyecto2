import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Lógica para el newsletter
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thanks for subscribing!');
  };

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h3 className="newsletter-title">JOIN THE INNER CIRCLE</h3>
            <p className="newsletter-description">
              Sign up for our newsletter to find out all about us, our news, our offers...
              We're not too chatty and we'll protect your email like the apple of our eye.
            </p>
            
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Shop */}
            <div className="footer-column">
              <h4 className="footer-title">SHOP</h4>
              <ul className="footer-links">
                <li><a href="/collections/living">Living</a></li>
                <li><a href="/collections/dining">Dining</a></li>
                <li><a href="/collections/storage-consoles">Storage and Consoles</a></li>
                <li><a href="/collections/outdoor">Outdoor</a></li>
                <li><a href="/collections/accessories">Accessories</a></li>
                <li><a href="/collections/egift-cards">eGift Cards</a></li>
              </ul>
            </div>

            {/* About */}
            <div className="footer-column">
              <h4 className="footer-title">ABOUT</h4>
              <ul className="footer-links">
                <li><a href="/pages/about">Story</a></li>
                <li><a href="/blogs/news">Blog</a></li>
                <li><a href="/pages/showroom">Showroom</a></li>
                <li><a href="/pages/furniture-rental">Furniture Rental</a></li>
                <li><a href="/pages/trade-programme">Trade Programme</a></li>
                <li><a href="/pages/affiliate-programme">Loyalty Rewards</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="footer-column">
              <h4 className="footer-title">SUPPORT</h4>
              <ul className="footer-links">
                <li><a href="/pages/faq">FAQ</a></li>
                <li><a href="/pages/care-guide">Care Guide</a></li>
                <li><a href="/pages/contact">Contact Us</a></li>
                <li><a href="/policies/refund-policy">Returns & Refunds</a></li>
                <li><a href="/pages/warranty">Warranty</a></li>
              </ul>
            </div>

            {/* Social */}
            <div className="footer-column">
              <h4 className="footer-title">FOLLOW US</h4>
              <div className="social-links">
                <a href="https://www.instagram.com/cancanfurnishings" className="social-link">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">© 2025 CANCAN Furnishings Pte Ltd.</p>
            <div className="legal-links">
              <a href="/policies/terms-of-service">Terms and Conditions</a>
              <a href="/policies/privacy-policy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;