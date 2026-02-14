
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { Results } from './components/Results';
import { Investments } from './components/Investments';
import { Authority } from './components/Authority';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#171717] topographic-overlay">
      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#E30613] opacity-[0.03] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#E30613] opacity-[0.02] blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <Header isScrolled={isScrolled} />
        <main>
          <Hero />
          <Pricing />
          <Results />
          <Investments />
          <Authority />
          <FAQ />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default App;
