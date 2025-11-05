import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: 'Cost-Effective',
    description: 'Affordable plans starting free, with higher ROI than standalone tools.',
    icon: '💰'
  },
  {
    title: 'AI-Powered',
    description: 'Predictive lead scoring and campaign optimization for 2025 trends.',
    icon: '🤖'
  },
  {
    title: 'Local Focus',
    description: 'Optimized for Indian languages, payments, and regulations.',
    icon: '🇮🇳'
  },
  {
    title: 'Scalable',
    description: 'From 100 to 100,000 leads—grow without limits.',
    icon: '📈'
  },
  {
    title: '24/7 Support',
    description: 'Indian team for onboarding and strategy guidance.',
    icon: '🎧'
  },
  {
    title: 'Seamless Integration',
    description: 'Works with Google Analytics, Zapier, and more.',
    icon: '🔗'
  }
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50" data-testid="why-choose-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Why Choose The Rendezvous Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The smartest investment for your business growth in 2025. Experience unmatched value and results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
              data-testid={`benefit-card-${index}`}
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="text-green-500" size={24} />
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto bg-white/60 backdrop-blur-sm rounded-lg p-6">
            <strong>Seamless Integration:</strong> Works with Google Analytics, Zapier, and more. Build your perfect marketing stack.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
