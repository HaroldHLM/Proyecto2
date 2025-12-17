import React from 'react';
import { bestsellers } from '../../data/mockData';
import './ProductGrid.css';

const ProductGrid = () => {
  return (
    <section className="section product-section">
      <div className="container">
        <h2 className="section-title text-center">SHOP BESTSELLERS</h2>
        
        <div className="product-grid">
          {bestsellers.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <button className="wishlist-btn">♡</button>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name} - {product.material}</h3>
                <p className="product-price">{product.currency}{product.price}.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;