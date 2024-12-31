import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  ContactFormDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'test-dev-stage';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const faqs = [
    {
      question: 'What features does ${projectName} offer?',
      answer:
        "${projectName} offers lead management, collaborative workspace, custom reporting, and secure data management, among other features, to streamline your law firm's operations.",
    },
    {
      question: "How can ${projectName} improve my firm's efficiency?",
      answer:
        '${projectName} connects different departments, allowing for seamless communication and collaboration. This integration helps prioritize tasks and manage leads effectively, boosting overall efficiency.',
    },
    {
      question: 'Is my data secure with ${projectName}?',
      answer:
        'Yes, ${projectName} employs top-notch security measures to protect your sensitive information, ensuring that only authorized personnel have access to your data.',
    },
    {
      question: "Can I customize ${projectName} to fit my firm's needs?",
      answer:
        "Absolutely! ${projectName} offers customizable templates and settings, allowing you to tailor the CRM to align with your firm's unique processes and requirements.",
    },
    {
      question: 'What support options are available with ${projectName}?',
      answer:
        '${projectName} provides various support options, including email support and a dedicated account manager for business plans, ensuring you receive the assistance you need.',
    },
    {
      question: 'How does the pricing structure work for ${projectName}?',
      answer:
        '${projectName} offers three pricing plans: Standard, Premium, and Business, each designed to cater to different needs, from individual practitioners to large enterprises.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Contact Us - Get in Touch with ${projectName}`}</title>
        <meta
          name='description'
          content={`Reach out to the ${projectName} team for any inquiries or support. We're here to help and ensure you have the best experience with our CRM solutions.`}
        />
      </Head>
      <WebSiteHeader projectName={'test-dev-stage'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'test-dev-stage'}
          image={['Customer support team assisting']}
          mainText={`Connect with ${projectName} Today`}
          subTitle={`We're here to assist you with any questions or support you need. Reach out to the ${projectName} team and let us help you enhance your experience.`}
          design={HeroDesigns.IMAGE_LEFT || ''}
          buttonText={`Contact Us Now`}
        />

        <FaqSection
          projectName={'test-dev-stage'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'test-dev-stage'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person writing an email']}
          mainText={`Reach Out to ${projectName} Support `}
          subTitle={`Have questions or need assistance? Contact us anytime, and our team will respond promptly to ensure you get the help you need.`}
        />
      </main>
      <WebSiteFooter projectName={'test-dev-stage'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
