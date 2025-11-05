import React from 'react';
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/LazyImage';

const Hero = ({ onBookDemo, onExplore }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-0 -left-4"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-0 -right-4"></div>
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold">
          All-in-One Marketing Platform for 2025
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-testid="hero-title">
          The Rendezvous Experts:
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Revolutionize Lead Generation
          </span>
          <span className="block">in India</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
          Empower your business with Meta Ads + Lead Forms + CRM + WhatsApp + Landing Pages + Domain + Pixel + LMS Community. Generate high-quality leads effortlessly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            onClick={onBookDemo}
            data-testid="book-demo-btn"
          >
            Book Demo
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/50 text-white transition-all duration-300 transform hover:scale-105"
            onClick={onExplore}
            data-testid="explore-features-btn"
          >
            Explore Features
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto" data-testid="hero-stats">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl md:text-4xl font-bold text-blue-400">30-40%</div>
            <div className="text-sm md:text-base text-gray-300">Lead Quality Increase</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl md:text-4xl font-bold text-purple-400">300%</div>
            <div className="text-sm md:text-base text-gray-300">Response Rate Boost</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl md:text-4xl font-bold text-pink-400">50%</div>
            <div className="text-sm md:text-base text-gray-300">Cost Per Click Reduction</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl md:text-4xl font-bold text-green-400">10x</div>
            <div className="text-sm md:text-base text-gray-300">Conversion Speed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
