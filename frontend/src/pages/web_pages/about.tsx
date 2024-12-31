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
  AboutUsDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

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
      name: 'Integrated Communication',
      description:
        'Facilitate seamless communication between departments. Share information and updates instantly to keep everyone on the same page.',
      icon: 'mdiMessageText',
    },
    {
      name: 'Advanced Analytics',
      description:
        "Gain insights into your firm's performance with detailed analytics. Make informed decisions based on real-time data and trends.",
      icon: 'mdiChartLine',
    },
    {
      name: 'Secure Data Management',
      description:
        'Protect your sensitive information with top-notch security features. Ensure that your data is safe and accessible only to authorized personnel.',
      icon: 'mdiLock',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has been a game-changer for our firm. The integration of departments has improved our workflow tremendously.',
      company: 'Legal Innovators Inc.',
      user_name: 'Alice Thompson, Senior Partner',
    },
    {
      text: 'The analytics feature in ${projectName} provides us with invaluable insights. We can now make data-driven decisions with confidence.',
      company: 'Justice Solutions Group',
      user_name: 'Robert King, Data Analyst',
    },
    {
      text: 'Our team loves the secure data management feature. We trust ${projectName} to keep our sensitive information safe.',
      company: 'Barrister Tech',
      user_name: 'Linda Green, IT Manager',
    },
    {
      text: 'With ${projectName}, our communication has never been better. The platform keeps everyone informed and connected.',
      company: 'Advocate Network',
      user_name: 'James White, Communications Director',
    },
    {
      text: 'The customizable templates in ${projectName} have allowed us to tailor the CRM to our specific needs, making our operations smoother than ever.',
      company: 'Counsel Connect',
      user_name: 'Emily Johnson, Operations Manager',
    },
    {
      text: 'The user-friendly interface of ${projectName} makes it easy for our team to navigate and utilize all its powerful features.',
      company: 'LexPro Solutions',
      user_name: 'David Wilson, IT Specialist',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us - Discover Our Mission and Values`}</title>
        <meta
          name='description'
          content={`Learn more about our mission, values, and the team behind ${projectName}. Discover how we are transforming the law industry with our innovative CRM solution.`}
        />
      </Head>
      <WebSiteHeader projectName={'test-dev-stage'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'test-dev-stage'}
          image={['Team brainstorming in modern office']}
          mainText={`Meet the Visionaries Behind ${projectName}`}
          subTitle={`Discover the passion and innovation driving ${projectName}. Learn about our mission to revolutionize the law industry with cutting-edge CRM solutions.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Story`}
        />

        <AboutUsSection
          projectName={'test-dev-stage'}
          image={['Team members discussing strategy']}
          mainText={`Our Journey with ${projectName}`}
          subTitle={`At ${projectName}, we are committed to transforming the law industry. Our team is dedicated to creating innovative CRM solutions that connect and empower legal professionals.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <FeaturesSection
          projectName={'test-dev-stage'}
          image={['CRM features overview illustration']}
          withBg={0}
          features={features_points}
          mainText={`Explore ${projectName} Features`}
          subTitle={`Discover the powerful features of ${projectName} that streamline your law firm's operations and enhance collaboration across departments.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS_DIVERSITY || ''}
        />

        <TestimonialsSection
          projectName={'test-dev-stage'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`Hear from Our Satisfied ${projectName} Users `}
        />

        <ContactFormSection
          projectName={'test-dev-stage'}
          design={ContactFormDesigns.HIGHLIGHTED || ''}
          image={['Person using a smartphone']}
          mainText={`Connect with the ${projectName} Team `}
          subTitle={`We're here to help! Reach out to us anytime with your questions or feedback. Our team is ready to respond promptly to your inquiries.`}
        />
      </main>
      <WebSiteFooter projectName={'test-dev-stage'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
