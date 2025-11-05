import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LazyImage from '@/components/LazyImage';

const industries = [
  {
    name: 'Training & Coaching Companies',
    growth: '200% enrollment growth',
    description: 'Fill workshops with targeted Meta Ads. Auto-capture enrollments via forms, nurture ambitions on WhatsApp, and build thriving LMS communities.',
    image: 'https://images.unsplash.com/photo-1715635845783-a184542d95e5?w=800&q=80',
    features: ['AI-optimized ads', 'WhatsApp drips', 'LMS certifications']
  },
  {
    name: 'Real Estate',
    growth: '30% faster closings',
    description: 'Dominate listings with property showcase ads. Instant WhatsApp viewings, CRM deal tracking, and virtual open houses.',
    image: 'https://images.unsplash.com/photo-1668911494509-14baf3b42fda?w=800&q=80',
    features: ['Geo-targeted campaigns', 'Lead scoring', 'Community forums']
  },
  {
    name: 'Education Institutions',
    growth: '40% more admissions',
    description: 'Attract Gen Z with vibrant Meta campaigns. Seamless enrollments, WhatsApp queries, and interactive LMS for classes.',
    image: 'https://images.unsplash.com/photo-1664382953518-4a664ab8a8c9?w=800&q=80',
    features: ['Voice search optimization', 'Personalized journeys', 'Alumni engagement']
  },
  {
    name: 'Business Consultants',
    growth: 'High-ticket clients',
    description: 'Pinpoint CEOs with precision ads. WhatsApp consultations, CRM pipelines, and mastermind LMS groups.',
    image: 'https://images.unsplash.com/photo-1589458223095-03eee50f0054?w=800&q=80',
    features: ['Executive targeting', 'Pipeline automation', 'Mastermind communities']
  },
  {
    name: 'Health & Wellness',
    growth: '50% better retention',
    description: 'Target fitness enthusiasts. Book sessions via forms, real-time WhatsApp chats, and community challenges.',
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&q=80',
    features: ['Audience targeting', 'Instant booking', 'Challenge communities']
  },
  {
    name: 'Network Marketing',
    growth: 'Global expansion',
    description: 'Viral recruitment ads, downline CRM, and training LMS. Duplicate success globally from India.',
    image: 'https://images.unsplash.com/photo-1573164574511-73c773193279?w=800&q=80',
    features: ['Viral campaigns', 'Downline tracking', 'Training programs']
  },
  {
    name: 'Insurance',
    growth: 'Trust & conversions',
    description: 'Quote instantly on WhatsApp. Compliance-ready CRM and educational LMS for trust-building.',
    image: 'https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?w=800&q=80',
    features: ['Instant quotes', 'Compliance tracking', 'Educational content']
  },
  {
    name: 'AstroNumerology & Occult Sciences',
    growth: 'Spiritual connections',
    description: 'Divine leads with themed ads. Cosmic CRM and ritual communities.',
    image: 'https://images.unsplash.com/photo-1706777227772-629b1cdb8a9f?w=800&q=80',
    features: ['Themed campaigns', 'Mystical CRM', 'Ritual communities']
  },
  {
    name: 'Freelancers',
    growth: 'More projects',
    description: 'Promote gigs, negotiate on WhatsApp, and collaborate in LMS networks.',
    image: 'https://images.pexels.com/photos/3167175/pexels-photo-3167175.jpeg?w=800&q=80',
    features: ['Gig promotion', 'Direct negotiation', 'Collaboration networks']
  },
  {
    name: 'Manufacturers',
    growth: 'Operational efficiency',
    description: 'B2B quote suppliers, supply-chain CRM, and team training.',
    image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=800&q=80',
    features: ['B2B targeting', 'Supply-chain management', 'Team training']
  },
  {
    name: 'Beauty Salons',
    growth: 'Loyal clientele',
    description: 'Glow-up ads, booking forms, and VIP tutorials.',
    image: 'https://images.unsplash.com/photo-1605980626247-eb3a2f10ec8f?w=800&q=80',
    features: ['Beauty campaigns', 'Easy bookings', 'VIP content']
  },
  {
    name: 'Resorts',
    growth: 'Year-round bookings',
    description: 'Paradise promotions, instant bookings, and loyalty programs.',
    image: 'https://images.unsplash.com/photo-1650011455561-e0c183d604b9?w=800&q=80',
    features: ['Destination marketing', 'Quick reservations', 'Loyalty rewards']
  },
  {
    name: 'Architects',
    growth: 'Premium projects',
    description: 'Portfolio showcases, consultation chats, and feedback communities.',
    image: 'https://images.unsplash.com/photo-1650011455561-e0c183d604b9?w=800&q=80',
    features: ['Portfolio ads', 'Instant consultations', 'Client feedback']
  },
  {
    name: 'Photographers',
    growth: 'Full calendar',
    description: 'Session bookings, gallery CRM, and workshop LMS.',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80',
    features: ['Visual portfolios', 'Booking system', 'Workshop programs']
  }
];

const Industries = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  const observerRef = useRef(null);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleItems < industries.length) {
          setVisibleItems(prev => Math.min(prev + 3, industries.length));
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [visibleItems]);

  return (
    <section className="py-20 bg-white" data-testid="industries-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Tailored Solutions for Every Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startups to enterprises, TheRendezvousExperts adapts to your unique needs with customized strategies for 14+ industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.slice(0, visibleItems).map((industry, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-testid={`industry-card-${index}`}
            >
              <div className="aspect-video relative overflow-hidden">
                <LazyImage
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{industry.name}</h3>
                <Badge className="mb-3 bg-green-500 hover:bg-green-600">{industry.growth}</Badge>
                <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {visibleItems < industries.length && (
          <div ref={loadMoreRef} className="h-20 flex items-center justify-center mt-8">
            <div className="animate-pulse text-gray-500">Loading more industries...</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Industries;
