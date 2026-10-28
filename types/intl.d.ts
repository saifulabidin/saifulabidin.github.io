import type { AbstractIntlMessages } from 'next-intl';

declare global {
  interface IntlMessages extends AbstractIntlMessages {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      cta_primary: string;
      cta_secondary: string;
    };
    about: {
      title: string;
      bio: string;
      highlight_1: string;
      highlight_2: string;
      highlight_3: string;
    };
    projects: {
      title: string;
      filter_all: string;
      no_projects: string;
      view_details: string;
      count: string;
    };
    certificates: {
      title: string;
      issued_by: string;
      total: string;
    };
    skills: {
      title: string;
      backend: string;
      frontend: string;
      security: string;
      tools: string;
    };
    experience: {
      title: string;
      current: string;
      duration: string;
    };
    contact: {
      title: string;
      description: string;
      form_name: string;
      form_email: string;
      form_subject: string;
      form_message: string;
      form_submit: string;
      form_sending: string;
      success_title: string;
      success_message: string;
      error_title: string;
      error_message: string;
    };
    footer: {
      copyright: string;
      links: string;
      social: string;
    };
    common: {
      nav_home: string;
      nav_about: string;
      nav_projects: string;
      nav_certificates: string;
      nav_skills: string;
      nav_experience: string;
      nav_contact: string;
      language: string;
      language_en: string;
      language_id: string;
    };
  }
}
