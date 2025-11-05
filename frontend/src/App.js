import React, { lazy, Suspense, useEffect } from 'react';
import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { logPerformance } from '@/utils/performance';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load components for code splitting
const Hero = lazy(() => import('@/components/Hero'));
const Features = lazy(() => import('@/components/Features'));
const Industries = lazy(() => import('@/components/Industries'));
const WhyChoose = lazy(() => import('@/components/WhyChoose'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const BookingForm = lazy(() => import('@/components/BookingForm'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading component
const SectionLoader = () => (
  <div className="w-full py-20 px-4">
    <div className="max-w-7xl mx-auto space-y-4">
      <Skeleton className="h-12 w-3/4 mx-auto" />
      <Skeleton className="h-6 w-1/2 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <Skeleton className="h-64" />
        <Skeleton className="h-64" />
        <Skeleton className="h-64" />
      </div>
    </div>
  </div>
);

const Home = () => {
  useEffect(() => {
    // Log performance metrics
    logPerformance();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<SectionLoader />}>
        <Hero 
          onBookDemo={() => scrollToSection('booking')} 
          onExplore={() => scrollToSection('features')}
        />
      </Suspense>
      
      <div id="features">
        <Suspense fallback={<SectionLoader />}>
          <Features />
        </Suspense>
      </div>
      
      <Suspense fallback={<SectionLoader />}>
        <Industries />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <WhyChoose />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>
      
      <div id="booking">
        <Suspense fallback={<SectionLoader />}>
          <BookingForm />
        </Suspense>
      </div>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

function App() {
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then((registration) => {
            console.log('SW registered:', registration);
          })
          .catch((error) => {
            console.log('SW registration failed:', error);
          });
      });
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
