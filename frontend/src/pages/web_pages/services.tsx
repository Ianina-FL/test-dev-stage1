import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  ContactFormDesigns,
  HeroDesigns,
  FeaturesDesigns,
  PricingDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import PricingSection from '../../components/WebPageComponents/PricingComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

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

  const features_points = [
    {
      name: 'Lead Management',
      description:
        'Efficiently track and manage leads from initial contact to conversion. Prioritize follow-ups and ensure no opportunity is missed.',
      icon: 'mdiAccountCircle',
    },
    {
      name: 'Collaborative Workspace',
      description:
        'Enhance teamwork with a shared platform for notes, activities, and metrics. Connect departments for seamless communication.',
      icon: 'mdiHandshake',
    },
    {
      name: 'Custom Reporting',
      description:
        "Generate detailed reports tailored to your firm's needs. Analyze data to make informed decisions and improve strategies.",
      icon: 'mdiChartBar',
    },
  ];

  const pricing_features = {
    standard: {
      features: [
        'Lead Management',
        'Collaborative Workspace',
        'Basic Reporting',
      ],
      limited_features: ['Limited Customization', 'Basic Support'],
    },
    premium: {
      features: [
        'Lead Management',
        'Collaborative Workspace',
        'Advanced Reporting',
        'Custom Templates',
      ],
      also_included: ['Priority Support', 'Enhanced Security'],
    },
    business: {
      features: [
        'Lead Management',
        'Collaborative Workspace',
        'Comprehensive Reporting',
        'Full Customization',
        'Dedicated Account Manager',
        '24/7 Support',
      ],
    },
  };

  const description = {
    standard:
      'Ideal for individual practitioners or small teams looking to manage leads and collaborate efficiently.',
    premium:
      'Perfect for small businesses or startups that require advanced features and priority support to scale their operations.',
    business:
      'Designed for large enterprises needing comprehensive CRM solutions with full customization and dedicated support.',
  };

  const testimonials = [
    {
      text: "${projectName} has streamlined our operations and improved our client interactions. It's an indispensable tool for our firm.",
      company: 'Legal Pioneers LLC',
      user_name: 'Anna Roberts, Managing Partner',
    },
    {
      text: 'The collaborative workspace feature in ${projectName} has transformed how our departments communicate. We are more efficient than ever.',
      company: 'Justice Innovators',
      user_name: 'Mark Stevens, Operations Director',
    },
    {
      text: "With ${projectName}, we can now generate detailed reports that help us make informed decisions. It's a game-changer for our strategy.",
      company: 'Advocate Solutions',
      user_name: 'Rachel Adams, Strategy Analyst',
    },
    {
      text: 'The support team at ${projectName} is fantastic. They are always ready to help and ensure we get the most out of the platform.',
      company: 'Barrister Tech Group',
      user_name: 'James Lee, IT Manager',
    },
    {
      text: 'Our lead management process has never been smoother. ${projectName} helps us track and convert leads efficiently.',
      company: 'Counsel Connect',
      user_name: 'Emily White, Sales Manager',
    },
    {
      text: 'The customization options in ${projectName} allow us to tailor the CRM to our specific needs, enhancing our overall productivity.',
      company: 'LexPro Enterprises',
      user_name: 'David Brown, Product Manager',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services - Enhance Your Law Firm with ${projectName}`}</title>
        <meta
          name='description'
          content={`Explore the comprehensive services offered by ${projectName}. Discover how our CRM solutions can streamline your law firm's operations and improve efficiency.`}
        />
      </Head>
      <WebSiteHeader projectName={'test-dev-stage'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'test-dev-stage'}
          image={['Law firm team in discussion']}
          mainText={`Transform Your Firm with ${projectName} Services`}
          subTitle={`Discover the range of services offered by ${projectName} to enhance your law firm's efficiency. Our CRM solutions are designed to streamline operations and foster collaboration.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Services`}
        />

        <FeaturesSection
          projectName={'test-dev-stage'}
          image={['CRM features in action']}
          withBg={0}
          features={features_points}
          mainText={`Discover ${projectName} Features`}
          subTitle={`Explore the powerful features of ${projectName} designed to optimize your law firm's operations and enhance productivity.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <PricingSection
          projectName={'test-dev-stage'}
          withBg={1}
          features={pricing_features}
          description={description}
        />

        <TestimonialsSection
          projectName={'test-dev-stage'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL_DIVERSITY || ''}
          testimonials={testimonials}
          mainText={`Client Success Stories with ${projectName} `}
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
