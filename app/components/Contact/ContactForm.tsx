'use client';

import React, { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setFormStatus({
      ...formStatus, 
      isSubmitting: true,
      message: 'Sending message...'
    });

    try {
      // Replace these IDs with your actual EmailJS service, template, and public key
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',  // Replace with your Service ID
        'YOUR_TEMPLATE_ID', // Replace with your Template ID
        form.current!, 
        'YOUR_PUBLIC_KEY'   // Replace with your Public Key
      );
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: 'Your message has been sent successfully!'
      });
      
      // Clear the form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: false,
          isError: false,
          message: ''
        });
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <form 
      ref={form} 
      onSubmit={handleSubmit} 
      className={`bg-[#20293A] p-8 rounded-lg shadow-lg ${className}`}
    >
      {formStatus.message && (
        <div className={`mb-4 p-3 text-sm rounded-md ${formStatus.isError 
          ? 'bg-red-100/10 text-red-500 border border-red-500/20' 
          : 'bg-green-100/10 text-green-500 border border-green-500/20'}`}
        >
          {formStatus.message}
        </div>
      )}
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-white font-medium mb-2">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input 
          type="text" 
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#19222D] border border-[#2A3749] rounded-md focus:outline-none focus:border-[#C6F10E] text-white"
          placeholder="John Doe"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-white font-medium mb-2">
          Your Email <span className="text-red-500">*</span>
        </label>
        <input 
          type="email" 
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#19222D] border border-[#2A3749] rounded-md focus:outline-none focus:border-[#C6F10E] text-white"
          placeholder="john@example.com"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
        <input 
          type="text" 
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#19222D] border border-[#2A3749] rounded-md focus:outline-none focus:border-[#C6F10E] text-white"
          placeholder="Job Opportunity"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-white font-medium mb-2">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea 
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 bg-[#19222D] border border-[#2A3749] rounded-md focus:outline-none focus:border-[#C6F10E] text-white resize-none"
          placeholder="Your message here..."
          required
        ></textarea>
      </div>
      
      <button 
        type="submit"
        disabled={formStatus.isSubmitting}
        className="w-full bg-[#C6F10E] hover:bg-[#a5c70c] text-black py-3 px-6 rounded-md font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;