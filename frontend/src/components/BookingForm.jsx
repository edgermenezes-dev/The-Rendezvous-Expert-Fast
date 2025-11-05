import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import apiClient from '@/utils/api';

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM'
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    timeSlot: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // You can integrate with your backend here
      // await apiClient.post('/bookings', formData);
      
      toast({
        title: 'Demo Booked Successfully! 🎉',
        description: `We'll contact you at ${formData.timeSlot}. Check your email for confirmation.`,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        timeSlot: ''
      });
    } catch (error) {
      toast({
        title: 'Booking Failed',
        description: 'Please try again or contact support.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" data-testid="booking-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Ready to Lead in 2025?
          </h2>
          <p className="text-xl text-gray-200">
            Join thousands of businesses transforming their lead generation. Book a demo today.
          </p>
        </div>
        
        <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6" data-testid="booking-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 font-semibold">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                  className="mt-2"
                  data-testid="name-input"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                  className="mt-2"
                  data-testid="email-input"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  required
                  className="mt-2"
                  data-testid="phone-input"
                />
              </div>
              
              <div>
                <Label htmlFor="company" className="text-gray-700 font-semibold">Company Name</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className="mt-2"
                  data-testid="company-input"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="timeSlot" className="text-gray-700 font-semibold">Best Time to Contact *</Label>
              <Select value={formData.timeSlot} onValueChange={(value) => handleChange('timeSlot', value)} required>
                <SelectTrigger className="mt-2" data-testid="time-slot-select">
                  <SelectValue placeholder="Select a time slot" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full text-lg py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              disabled={isSubmitting}
              data-testid="submit-booking-btn"
            >
              {isSubmitting ? 'Booking...' : 'Book Demo'}
            </Button>
            
            <div className="text-center text-sm text-gray-600 space-y-1">
              <p>✅ No credit card required</p>
              <p>✅ Personalized demo</p>
              <p>✅ Expert guidance</p>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;
