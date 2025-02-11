// app/services/client-page.js (Client Component)
"use client";
import React from 'react';
import Link from 'next/link';

const ServicesPage = () => {
  return (
    <div>
      {/* Free Services Section */}
      <section className="service-section hero-inner py-5">
        <div className="container">
          <h1 className="text-center mb-4">Complimentary Services for Charity, Sustainability, and Animal Rescue Projects</h1>
          <p className="text-center">We offer complimentary branding, website design, and digital marketing services to support charities, sustainable initiatives, animal rescues, and cryptocurrency projects. Our mission is to help your cause grow and reach more people—at no cost to you.</p>
        </div>
      </section>

      {/* Cryptocurrency Services Section */}
      <section className="service-section py-5">
        <div className="container">
          {/* Branding Section for Charity, Sustainable, and Animal Rescue Project Owners */}
          <div className="row align-items-center mb-5">
            {/* Right side content */}
            <div className="col-md-6">
              <h3>Branding</h3>
              <p><strong>For Charity, Sustainable, and Animal Rescue Project Owners:</strong> We provide free branding services to help you create a strong, professional identity for your cause. Our goal is to help your project stand out and resonate with potential donors, volunteers, and supporters. Our branding services include:</p>
              <ul>
                <li><strong>Logo Design:</strong> Custom logos that represent your mission and vision.</li>
                <li><strong>Color Schemes:</strong> Professional, brand-aligned color palettes that communicate your values.</li>
                <li><strong>Brand Identity:</strong> Guidelines to ensure consistency across your digital and print materials.</li>
              </ul>
              <p>Let us help you create a lasting impact with a brand that people trust and believe in.</p>
              <Link href="/contact" className="btn btn-primary">Get Started</Link>
            </div>
            {/* Left side image */}
            <div className="col-md-6">
              <img src="/assets/branding-image.svg" alt="Branding" className="img-fluid" />
            </div>
          </div>

          {/* Web Design & Development Section for Charity, Sustainable, and Animal Rescue Project Owners */}
          <div className="row align-items-center mb-5">
            {/* Right side image */}
            <div className="col-md-6">
              <img src="/assets/web-design-image.svg" alt="Web Design & Development" className="img-fluid" />
            </div>
            {/* Left side content */}
            <div className="col-md-6">
              <h3>Web Design & Development</h3>
              <p><strong>For Charity, Sustainable, and Animal Rescue Project Owners:</strong> We offer free website design and development to help your cause have an online presence. Whether you’re looking to raise awareness, fundraise, or showcase your work, we’ll create a custom website that meets your specific needs. Our web services include:</p>
              <ul>
                <li><strong>Custom Website Design:</strong> Beautiful, mission-driven designs that reflect your project’s values.</li>
                <li><strong>Responsive Development:</strong> Optimized websites that look great on all devices, ensuring accessibility.</li>
                <li><strong>SEO Optimization:</strong> We integrate best practices to help your site rank higher on search engines and reach a larger audience.</li>
              </ul>
              <p>We’re here to help you tell your story and make a greater impact online—at no cost to you.</p>
              <Link href="/contact" className="btn btn-primary">Get Started</Link>
            </div>
          </div>

          {/* Digital Marketing Section for Crypto Currency Creators */}
          <div className="row align-items-center">
            {/* Right side content */}
            <div className="col-md-6">
              <h3>Digital Marketing</h3>
              <p><strong>For Cryptocurrency Creators:</strong> We offer free digital marketing services to help cryptocurrency projects grow their presence and attract more visitors to your coin or platform. Our digital marketing strategies are designed to increase awareness, encourage engagement, and drive traffic to your project. Our services include:</p>
              <ul>
                <li><strong>SEO Optimization:</strong> Enhance your search engine visibility to reach a larger audience.</li>
                <li><strong>PPC Advertising:</strong> Paid advertising strategies to increase exposure and drive conversions.</li>
                <li><strong>Social Media Marketing:</strong> Develop a social media strategy that attracts, engages, and retains your target audience.</li>
                <li><strong>Targeted Content Creation:</strong> We create content that speaks directly to the needs and interests of your community.</li>
              </ul>
              <p>Take your cryptocurrency project to the next level by engaging with more visitors and building a stronger community—at no charge.</p>
              <Link href="/contact" className="btn btn-primary">Get Started</Link>
            </div>
            {/* Left side image */}
            <div className="col-md-6">
              <img src="/assets/digital-marketing-image.svg" alt="Digital Marketing" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;