import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../stores/hooks';
import LayoutGuest from '../layouts/Guest';
import WebSiteHeader from '../components/WebPageComponents/Header';
import WebSiteFooter from '../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FeaturesDesigns,
  AboutUsDesigns,
  TestimonialsDesigns,
  ContactFormDesigns,
} from '../components/WebPageComponents/designs';

import HeroSection from '../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../components/WebPageComponents/FeaturesComponent';

import AboutUsSection from '../components/WebPageComponents/AboutUsComponent';

import TestimonialsSection from '../components/WebPageComponents/TestimonialsComponent';

import ContactFormSection from '../components/WebPageComponents/ContactFormComponent';

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
      name: 'Lead Tracking',
      description:
        'Monitor and manage your leads effortlessly. Prioritize follow-ups and keep track of lead statuses to ensure no opportunity is missed.',
      icon: 'mdiAccountCircle',
    },
    {
      name: 'Department Integration',
      description:
        'Connect sales, customer service, and marketing departments. Share notes and activities to foster collaboration and improve workflow efficiency.',
      icon: 'mdiLink',
    },
    {
      name: 'Customizable Templates',
      description:
        "Tailor CRM settings and templates to fit your firm's unique processes. Ensure that your system aligns perfectly with your operational needs.",
      icon: 'mdiTune',
    },
  ];

  const testimonials = [
    {
      text: "Since implementing ${projectName}, our firm's efficiency has skyrocketed. The seamless integration between departments is a game-changer.",
      company: 'LexPro Solutions',
      user_name: 'John Doe, Managing Partner',
    },
    {
      text: '${projectName} has transformed our lead management process. We can now track and prioritize leads with ease, boosting our conversion rates.',
      company: 'LegalEdge Associates',
      user_name: 'Jane Smith, Head of Sales',
    },
    {
      text: 'The customizable templates in ${projectName} have allowed us to tailor the CRM to our specific needs, making our operations smoother than ever.',
      company: 'Justice League Law',
      user_name: 'Emily Johnson, Operations Manager',
    },
    {
      text: 'Our customer service team loves ${projectName}. Accessing client information quickly has improved our response times significantly.',
      company: 'Advocate Alliance',
      user_name: 'Michael Brown, Customer Service Lead',
    },
    {
      text: 'With ${projectName}, our marketing campaigns are more targeted and effective. The lead segmentation feature is particularly useful.',
      company: 'Barrister Marketing Group',
      user_name: 'Sarah Lee, Marketing Director',
    },
    {
      text: 'The user-friendly interface of ${projectName} makes it easy for our team to navigate and utilize all its powerful features.',
      company: 'Counsel Connect',
      user_name: 'David Wilson, IT Specialist',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Law Industry CRM - Connect and Organize Your Departments`}</title>
        <meta
          name='description'
          content={`Discover our CRM solution tailored for the law industry, connecting sales, customer service, and marketing departments. Track leads, manage contacts, and streamline your processes.`}
        />
      </Head>
      <WebSiteHeader projectName={'test-dev-stage'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'test-dev-stage'}
          image={['Law professionals collaborating efficiently']}
          mainText={`Revolutionize Your Law Firm with ${projectName}`}
          subTitle={`Connect and streamline your law firm's departments with ${projectName}. Organize notes, track leads, and enhance collaboration across sales, customer service, and marketing.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'test-dev-stage'}
          image={['CRM dashboard with analytics']}
          withBg={0}
          features={features_points}
          mainText={`Unlock Efficiency with ${projectName} Features`}
          subTitle={`Discover how ${projectName} enhances your law firm's operations with powerful features designed for seamless collaboration and lead management.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <AboutUsSection
          projectName={'test-dev-stage'}
          image={['Team collaborating in modern office']}
          mainText={`Empowering Law Firms with ${projectName}`}
          subTitle={`${projectName} is dedicated to transforming the way law firms operate. Our CRM solution bridges departments, enhances communication, and streamlines processes for optimal efficiency.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <TestimonialsSection
          projectName={'test-dev-stage'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`What Our Clients Say About ${projectName} `}
        />

        <ContactFormSection
          projectName={'test-dev-stage'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on a laptop']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Reach out to us anytime for inquiries or support. Our team is here to assist you and will respond promptly to your messages.`}
        />
      </main>
      <WebSiteFooter projectName={'test-dev-stage'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
