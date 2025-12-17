import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Barra de anuncio */}
      <div className="announcement-bar">
        <div className="container">
          <p>TAN BOON LIAT BUILDING, #11-05 - NEW FLAGSHIP DESIGN STUDIO NOW OPEN</p>
        </div>
      </div>

      {/* Header principal */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <a href="/">
                <span className="logo-text">CANCAN</span>
                <span className="logo-subtitle">Furnishings</span>
              </a>
            </div>

            {/* Navegación desktop */}
            <nav className="nav-desktop hidden-mobile">
              <ul>
                <li><a href="/living">Living</a></li>
                <li><a href="/dining">Dining</a></li>
                <li><a href="/storage">Storage & Consoles</a></li>
                <li><a href="/outdoor">Outdoor</a></li>
                <li><a href="/accessories">Accessories</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </nav>

            {/* Acciones */}
            <div className="header-actions">
              <button className="action-btn">
                <span>🔍</span>
              </button>
              <a href="/wishlist" className="action-btn">
                <span>♡</span>
                <span className="count">0</span>
              </a>
              <a href="/cart" className="action-btn">
                <span>🛒</span>
                <span className="count">0</span>
              </a>
              
              <button 
                className="menu-btn hidden-desktop"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <nav>
              <ul>
                <li><a href="/living">Living</a></li>
                <li><a href="/dining">Dining</a></li>
                <li><a href="/storage">Storage & Consoles</a></li>
                <li><a href="/outdoor">Outdoor</a></li>
                <li><a href="/accessories">Accessories</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;