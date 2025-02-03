// app/services/page.js
"use client"; 
import React from 'react';

const ServicesPage = () => {
  return (
    <div>
      {/* Free Services Section */}
      <section className="service-section hero-inner py-5">
        <div className="container">
          <h1 className="text-center mb-4">Frequently Asked Questions</h1>
          <p className="text-center">Here are some common questions to help you understand how Cryptocauseway works. If you have further inquiries, feel free to <a href="/contact">contact us</a>.</p>
        </div>
      </section>

      {/* Cryptocurrency Services Section */}
      <section className="faq-section py-5">
  <div className="container">
    {/* FAQ Items */}
    <div className="row">
      <div className="col-md-6">
        <h4>1. What is Cryptocauseway?</h4>
        <p>Cryptocauseway is a platform dedicated to supporting charity, sustainability, and animal rescue projects through cryptocurrency donations. We offer free services such as branding, website design, development, and digital marketing to help these causes thrive online.</p>
      </div>
      <div className="col-md-6">
        <h4>2. Who can use Cryptocauseway's services?</h4>
        <p>Our services are available for charity organizations, sustainability initiatives, animal rescue projects, and cryptocurrency creators. If you’re involved in any of these areas, we offer free assistance to help you grow and succeed.</p>
      </div>

      <div className="col-md-6">
        <h4>3. How do I donate to the causes supported by Cryptocauseway?</h4>
        <p>To donate, simply visit our <a href="/donate">donate</a> page. Your contributions will directly support the initiatives and projects we partner with to create a healthier, more sustainable world.</p>
      </div>
      <div className="col-md-6">
        <h4>4. Can I use Cryptocauseway’s services for my cryptocurrency project?</h4>
        <p>Yes! Cryptocurrency creators can use our free services, including digital marketing, website design, and branding, to help encourage more visitors and promote your crypto coin to a larger audience.</p>
      </div>

      <div className="col-md-6">
        <h4>5. How do I get started with Cryptocauseway?</h4>
        <p>Getting started is easy! Simply reach out to us via our <a href="/contact">contact page</a> to share more details about your project, and we’ll get in touch to discuss how we can assist you with your branding, website, and marketing needs.</p>
      </div>
      <div className="col-md-6">
        <h4>6. Are there any costs associated with your services?</h4>
        <p>No, our services are completely free of charge for charity organizations, animal rescue projects, sustainability efforts, and cryptocurrency creators. We are dedicated to supporting these causes and helping them grow without any financial burden.</p>
      </div>

      <div className="col-md-6">
        <h4>7. Can I make a recurring donation to support your mission?</h4>
        <p>Yes, we offer the option for recurring donations. You can set up a monthly contribution to support our ongoing projects and initiatives. Visit our <a href="/donate">donate</a> page for more details.</p>
      </div>
      <div className="col-md-6">
        <h4>8. How can I spread the word about Cryptocauseway?</h4>
        <p>We encourage you to share our mission with your network on social media, through email, or by word of mouth. The more people who know about us, the greater the impact we can have together. Feel free to use the social media share buttons on our site!</p>
      </div>

      <div className="col-md-6">
        <h4>9. Do you work with international projects?</h4>
        <p>Yes! We are happy to work with charity, sustainability, and animal rescue projects from all over the world. Our goal is to support global initiatives that make a positive difference in the lives of individuals and communities.</p>
      </div>
      <div className="col-md-6">
        <h4>10. How do I stay updated on Cryptocauseway's projects and initiatives?</h4>
        <p>You can stay updated by following us on social media or subscribing to our newsletter. We share news, updates, and success stories about the projects we support, so you can see the impact of your contributions!</p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default ServicesPage;
