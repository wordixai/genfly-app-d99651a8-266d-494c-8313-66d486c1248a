import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyMacaronSection from '@/components/WhyMacaronSection';
import PlaybookSection from '@/components/PlaybookSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TechnicalSection from '@/components/TechnicalSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="w-full relative bg-gradient-to-br bg-[#F9F7F1] min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <WhyMacaronSection />
      <PlaybookSection />
      <TestimonialsSection />
      <TechnicalSection />
      <Footer />
    </div>
  );
};

export default Index;