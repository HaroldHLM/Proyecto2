import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <video 
          className="hero-video" 
          src="../../../public/videos/mueble.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
          >

          </video>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              A NEW GENERATION OF<br />
              <span className="accent">MODERN FURNISHINGS</span>
            </h1>
            
            <div className="hero-subtitle-section">
              <h2 className="hero-subtitle">
                INSPIRED BY ARCHITECTURE.<br />
                MADE FOR LIVING.
              </h2>
              
              <p className="hero-description">
                From spatial balance to structural beauty, our pieces draw on architectural cues
                to bring warmth, serenity, and comfort into your home. Customisation available.
              </p>
            </div>
            
            <div className="hero-actions">
              <a href="/collections/new-arrivals" className="btn btn-primary">
                SHOP NOW
              </a>
              <a href="/pages/contact" className="btn btn-secondary">
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;