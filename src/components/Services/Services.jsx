import React from 'react';
import { services } from '../../data/mockData';
import './Services.css';

const Services = () => {
  return (
    <section className="section services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Hassle-Free, Every Time</h2>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {/* Placeholder para iconos */}
                <span className="icon-placeholder">🏠</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;