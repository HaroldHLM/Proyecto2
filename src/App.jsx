
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProductGrid from './components/ProductGrid/ProductGrid';
import Categories from './components/Categories/Categories';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <Categories />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
