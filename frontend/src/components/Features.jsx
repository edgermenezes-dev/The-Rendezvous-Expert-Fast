import React from 'react';
import { Card } from '@/components/ui/card';
import LazyImage from '@/components/LazyImage';

const features = [
  {
    title: 'Meta Ads Mastery',
    description: 'Launch laser-focused Facebook and Instagram ads targeting Indian demographics. Use AI for audience insights and A/B testing to reduce CPC by up to 50%.',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80'
  },
  {
    title: 'Smart Lead Forms',
    description: 'Capture high-intent leads with customizable forms. Integrate with Google Analytics for deeper insights and comply with India\'s data privacy laws.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  },
  {
    title: 'Intelligent CRM',
    description: 'Manage pipelines with automated tagging, scoring, and follow-ups. Sync with WhatsApp for real-time updates, boosting response rates by 300%.',
    image: 'https://images.unsplash.com/photo-1571677246347-5040036b95cc?w=800&q=80'
  },
  {
    title: 'WhatsApp Integration',
    description: 'Send personalized broadcasts, chatbots, and click-to-WhatsApp ads. Ideal for India\'s mobile-first audience, converting leads 10x faster than email.',
    image: 'https://images.pexels.com/photos/5054349/pexels-photo-5054349.jpeg?w=800&q=80'
  },
  {
    title: 'Custom Landing Pages & Domains',
    description: 'Build high-converting pages with drag-and-drop ease. Host on your branded domain for trust and better SEO rankings.',
    image: 'https://images.unsplash.com/photo-1506097425191-7ad538b29cef?w=800&q=80'
  },
  {
    title: 'Pixel Tracking',
    description: 'Track every click and conversion accurately. Retarget warm leads on Meta for unparalleled ROI.',
    image: 'https://images.unsplash.com/photo-1545065695-64b67d551e68?w=800&q=80'
  },
  {
    title: 'LMS Community',
    description: 'Foster engagement with courses, forums, and webinars. Turn leads into loyal customers through value-driven communities.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            The Ultimate Digital Marketing Toolkit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seven powerful features working in harmony to transform your lead generation. Each tool designed to maximize conversions and ROI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              data-testid={`feature-card-${index}`}
            >
              <div className="aspect-video relative overflow-hidden">
                <LazyImage
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            The Rendezvous Experts' seamless integrations outperform fragmented tools by handling end-to-end workflows in one dashboard. Optimize for local SEO with geo-targeted keywords and voice search.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
