import React from 'react';
import { testimonials } from '../data/mockData';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title text-center">WHY PEOPLE LOVE US</h2>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <blockquote className="testimonial-text">
                "{testimonial.text}"
              </blockquote>
              <cite className="testimonial-author">{testimonial.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;