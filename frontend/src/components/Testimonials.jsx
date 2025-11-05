import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Real Estate Agent',
    location: 'Mumbai',
    quote: 'The Rendezvous Experts transformed my business. I\'m closing deals 30% faster with WhatsApp integration and pixel retargeting.',
    rating: 5,
    initials: 'RK'
  },
  {
    name: 'Priya Sharma',
    role: 'Business Coach',
    location: 'Delhi',
    quote: 'Filled my bootcamp overnight! The Meta Ads and LMS community features are game-changers for my coaching business.',
    rating: 5,
    initials: 'PS'
  },
  {
    name: 'Amit Patel',
    role: 'Education Entrepreneur',
    location: 'Bangalore',
    quote: '40% increase in admissions! The platform\'s AI-powered targeting and WhatsApp nurturing are incredibly effective.',
    rating: 5,
    initials: 'AP'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-900 text-white" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Success Stories from India
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of Indian entrepreneurs scaling effortlessly with The Rendezvous Experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-2"
              data-testid={`testimonial-card-${index}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-gray-300 mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-3">
                <Avatar className="bg-gradient-to-br from-blue-500 to-purple-500">
                  <AvatarFallback className="bg-transparent text-white font-bold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg p-6">
            <strong className="text-white">Proven Results:</strong> Businesses using TheRendezvousExperts see 30-40% increases in lead quality and ROI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
