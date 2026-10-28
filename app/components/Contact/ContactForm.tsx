'use client';

import React, { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const t = useTranslations("contact");
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

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: t("validation_error")
      });
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: t("dispatch_error")
      });
      return;
    }

    setFormStatus({
      ...formStatus, 
      isSubmitting: true,
      message: t("submitting_btn")
    });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject || 'Portfolio Contact Form Inquiry',
          message: formData.message,
        },
        publicKey
      );
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: t("dispatch_success")
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: false,
          isError: false,
          message: ''
        });
      }, 5000);
      
    } catch {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: t("dispatch_error")
      });
    }
  };

  return (
    <form 
      ref={form} 
      onSubmit={handleSubmit} 
      className={`space-y-4 ${className}`}
    >
      {formStatus.message && (
        <div className={`p-4 rounded-xl border-2 border-black text-sm font-black shadow-neo-sm ${formStatus.isError 
          ? 'bg-[#FF90E8] text-black' 
          : 'bg-[#C6F10E] text-black'}`}
        >
          {formStatus.message}
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-black font-black text-xs uppercase tracking-wider mb-2">
          {t("name_label")} <span className="text-red-600">*</span>
        </label>
        <input 
          type="text" 
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#FFFDF5] border-2 border-black rounded-xl text-black font-medium shadow-neo-sm focus:shadow-neo focus:outline-none transition-all placeholder:text-neutral-500"
          placeholder={t("name_placeholder")}
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-black font-black text-xs uppercase tracking-wider mb-2">
          {t("email_label")} <span className="text-red-600">*</span>
        </label>
        <input 
          type="email" 
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#FFFDF5] border-2 border-black rounded-xl text-black font-medium shadow-neo-sm focus:shadow-neo focus:outline-none transition-all placeholder:text-neutral-500"
          placeholder={t("email_placeholder")}
          required
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-black font-black text-xs uppercase tracking-wider mb-2">
          {t("subject_label")}
        </label>
        <input 
          type="text" 
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#FFFDF5] border-2 border-black rounded-xl text-black font-medium shadow-neo-sm focus:shadow-neo focus:outline-none transition-all placeholder:text-neutral-500"
          placeholder={t("subject_placeholder")}
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-black font-black text-xs uppercase tracking-wider mb-2">
          {t("message_label")} <span className="text-red-600">*</span>
        </label>
        <textarea 
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 bg-[#FFFDF5] border-2 border-black rounded-xl text-black font-medium shadow-neo-sm focus:shadow-neo focus:outline-none transition-all placeholder:text-neutral-500 resize-none"
          placeholder={t("message_placeholder")}
          required
        />
      </div>
      
      <button 
        type="submit"
        disabled={formStatus.isSubmitting}
        className="w-full bg-[#C6F10E] hover:bg-[#b0d80c] text-black font-black text-base py-3.5 px-6 rounded-xl border-2 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed mt-2"
      >
        {formStatus.isSubmitting ? t("submitting_btn") : t("submit_btn")}
      </button>
    </form>
  );
};

export default ContactForm;
