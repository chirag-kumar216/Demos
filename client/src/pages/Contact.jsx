import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-toastify';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ServiceAccordion from './Services'; // Reusing the accordion from Services for FAQs

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().optional()
});

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Thank you! Your inquiry has been sent. Prateek will contact you shortly.', {
        position: "bottom-right",
        theme: "light",
      });
      reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  const faqs = [
    { q: "How long does a typical project take?", a: "A standard 3BHK takes 8-12 weeks from design approval." },
    { q: "Do you work outside Pune?", a: "Currently, we only take up turnkey projects within Pune and PCMC." },
    { q: "Can I visit your studio?", a: "Yes, studio visits are by appointment only. Please fill the form to schedule." },
    { q: "Do you offer only design or execution too?", a: "We strongly prefer end-to-end turnkey execution to maintain quality, but we do take design-only consulting on a case-by-case basis." },
    { q: "What is your fee structure?", a: "For turnkey, we charge a percentage of the overall project cost. For design-only, it is based on sq.ft area." }
  ];

  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display text-primary-text mb-6">Let's Talk Design</h1>
          <p className="font-body text-lg text-secondary-text max-w-2xl mx-auto">
            Ready to transform your space? Reach out to us for a consultation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto mb-24">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white p-8 shadow-md border border-border-divider">
              <h3 className="font-display text-2xl text-primary-text mb-6">Studio Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-accent-gold mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-accent text-xs font-semibold tracking-wider uppercase text-primary-text mb-1">Address</h4>
                    <p className="font-body text-sm text-secondary-text leading-relaxed">Aura Interiors Studio,<br/>203 Design Square,<br/>Koregaon Park, Pune – 411001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-accent-gold mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-accent text-xs font-semibold tracking-wider uppercase text-primary-text mb-1">Phone</h4>
                    <p className="font-body text-sm text-secondary-text">+91 96496 47678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-accent-gold mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-accent text-xs font-semibold tracking-wider uppercase text-primary-text mb-1">Email</h4>
                    <p className="font-body text-sm text-secondary-text">hello@aurainteriors.in</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-accent-gold mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-accent text-xs font-semibold tracking-wider uppercase text-primary-text mb-1">Hours</h4>
                    <p className="font-body text-sm text-secondary-text">Mon–Sat, 10 AM – 7 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 w-full shadow-md">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.937213898126!2d73.8967406!3d18.5362544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0f6b5555555%3A0x6b5b555555555555!2sKoregaon%20Park%2C%20Pune!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen="" 
                 loading="lazy">
               </iframe>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 md:p-12 shadow-xl border border-border-divider">
              <h3 className="font-display text-3xl text-primary-text mb-8">Inquire Now</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-accent text-xs uppercase tracking-wider text-secondary-text mb-2">Name *</label>
                  <input {...register("name")} className="w-full border-b border-border-divider pb-2 focus:outline-none focus:border-accent-gold font-body text-primary-text transition-colors" />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block font-accent text-xs uppercase tracking-wider text-secondary-text mb-2">Phone *</label>
                  <input {...register("phone")} className="w-full border-b border-border-divider pb-2 focus:outline-none focus:border-accent-gold font-body text-primary-text transition-colors" />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-accent text-xs uppercase tracking-wider text-secondary-text mb-2">Email *</label>
                <input {...register("email")} className="w-full border-b border-border-divider pb-2 focus:outline-none focus:border-accent-gold font-body text-primary-text transition-colors" />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-accent text-xs uppercase tracking-wider text-secondary-text mb-2">Project Type *</label>
                  <select {...register("projectType")} className="w-full border-b border-border-divider pb-2 focus:outline-none focus:border-accent-gold font-body text-primary-text bg-transparent">
                    <option value="">Select a type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Modular Kitchen">Modular Kitchen</option>
                  </select>
                  {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>}
                </div>
                <div>
                  <label className="block font-accent text-xs uppercase tracking-wider text-secondary-text mb-2">Budget Range *</label>
                  <select {...register("budget")} className="w-full border-b border-border-divider pb-2 focus:outline-none focus:border-accent-gold font-body text-primary-text bg-transparent">
                    <option value="">Select a range</option>
                    <option value="Under 5L">Under ₹5L</option>
                    <option value="5-10L">₹5L - ₹10L</option>
                    <option value="10-20L">₹10L - ₹20L</option>
                    <option value="Above 20L">Above ₹20L</option>
                  </select>
                  {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget.message}</p>}
                </div>
              </div>

              <div className="mb-10">
                <label className="block font-accent text-xs uppercase tracking-wider text-secondary-text mb-2">Message</label>
                <textarea {...register("message")} rows="4" className="w-full border-b border-border-divider pb-2 focus:outline-none focus:border-accent-gold font-body text-primary-text transition-colors resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-accent-gold text-white font-accent text-sm tracking-wider uppercase py-4 hover:bg-accent-dark transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>

        {/* FAQs inside Contact */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-3xl text-primary-text mb-8 text-center">Frequently Asked Questions</h3>
          <div className="bg-white p-2">
            {/* Copying the accordion structure since we didn't export it separately */}
            {faqs.map((item, idx) => (
              <div key={idx} className="border-b border-border-divider last:border-0 p-4">
                <h4 className="font-display text-xl text-primary-text mb-2">{item.q}</h4>
                <p className="font-body text-sm text-secondary-text leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
