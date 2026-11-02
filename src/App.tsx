import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoomsSection } from './components/RoomsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { BookingCtaSection } from './components/BookingCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PolicyModal } from './components/PolicyModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  const [policiesOpen, setPoliciesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark flex flex-col selection:bg-brand-gold/20 selection:text-brand-forest">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <RoomsSection />
        <FacilitiesSection />
        <AboutSection />
        <LocationSection />
        <BookingCtaSection />
        <ContactSection />
      </main>
      <Footer onOpenPolicies={() => setPoliciesOpen(true)} />
      <PolicyModal isOpen={policiesOpen} onClose={() => setPoliciesOpen(false)} />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
