import React from 'react';
import { categories } from '../../data/mockData';
import './Categories.css';

const Categories = () => {
  return (
    <section className="section categories-section">
      <div className="container">
        <h2 className="section-title text-center">DISCOVER ESSENTIALS</h2>
        <p className="section-subtitle text-center">
          WE CRAFT AND CURATE STYLISH, FUNCTIONAL FURNITURE TO CREATE YOUR PERSONAL SANCTUARY.
        </p>
        
        <div className="categories-grid">
          {categories.map(category => (
            <a key={category.id} href={category.link} className="category-card">
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>
              <div className="category-info">
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">{category.description}</p>
              </div>
            </a>
          ))}
        </div>
        
        <div className="customization-cta">
          <h3>DON'T SEE THE SIZE, COLOUR OR MATERIAL VARIANT YOU WANT?</h3>
          <p>CONTACT US TO ENQUIRE ABOUT CUSTOMISATION OPTIONS.</p>
          <a href="/pages/contact" className="btn btn-primary">CONTACT US</a>
        </div>
      </div>
    </section>
  );
};

export default Categories;