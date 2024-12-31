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
      question: 'What makes ${projectName} different from other CRMs?',
      answer:
        '${projectName} is specifically designed for the law industry, offering tailored features like lead management, collaborative workspaces, and secure data handling to meet the unique needs of legal professionals.',
    },
    {
      question: 'How can I customize ${projectName} for my firm?',
      answer:
        "You can customize ${projectName} using our flexible templates and settings. Adjust the CRM to align with your firm's processes, ensuring it fits seamlessly into your workflow.",
    },
    {
      question: 'Is there a trial period available for ${projectName}?',
      answer:
        "Yes, we offer a trial period for new users to explore ${projectName}'s features and see how it can benefit their firm. Contact our support team to learn more about starting your trial.",
    },
    {
      question: 'How does ${projectName} ensure data security?',
      answer:
        '${projectName} employs advanced security protocols to protect your data. We use encryption and access controls to ensure that only authorized users can access sensitive information.',
    },
    {
      question: 'Can ${projectName} integrate with other tools we use?',
      answer:
        "Yes, ${projectName} is designed to integrate with various tools and platforms commonly used in the legal industry, enhancing your firm's existing technology stack.",
    },
    {
      question: 'What support options are available with ${projectName}?',
      answer:
        'We offer comprehensive support, including email assistance and a dedicated account manager for business plans, ensuring you have the help you need when you need it.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions - ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Learn more about our features, pricing, and how our CRM can benefit your law firm.`}
        />
      </Head>
      <WebSiteHeader projectName={'test-dev-stage'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'test-dev-stage'}
          image={['Person reading FAQ on laptop']}
          mainText={`Your Questions Answered with ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. Learn how our CRM can transform your law firm's operations.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Explore FAQs`}
        />

        <FaqSection
          projectName={'test-dev-stage'}
          design={FaqDesigns.TWO_COLUMN || ''}
          faqs={faqs}
          mainText={`Common Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'test-dev-stage'}
          design={ContactFormDesigns.HIGHLIGHTED_DIVERSITY || ''}
          image={['Person typing on keyboard']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Have more questions or need assistance? Contact us anytime, and our team will respond promptly to ensure you have the best experience with ${projectName}.`}
        />
      </main>
      <WebSiteFooter projectName={'test-dev-stage'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
