// app/services/page.js
"use client"; 
import React from 'react';

const ServicesPage = () => {
  return (
    <div>
      {/* Free Services Section */}
      <section className="service-section hero-inner py-5">
        <div className="container">
          <h1 className="text-center mb-4">Empowering Change Through Cryptocurrency and Innovation</h1>
        </div>
      </section>

      {/* Cryptocurrency Services Section */}
      <section className="about-us-section py-5">
  <div className="container">
    {/* Our Mission Section */}
    <div className="row align-items-center mb-5">
      {/* Right side content */}
      <div className="col-md-12">
        <h3>Our Mission</h3>
        <p><strong>At Cryptocauseway,</strong> our mission is simple yet powerful: to use the power of cryptocurrency and blockchain technology to support charitable, sustainable, and animal rescue projects around the world. We provide free services to these initiatives, enabling them to have a stronger online presence and make a bigger impact.</p>
        <p>We believe that by combining innovative technology with social responsibility, we can create a healthier, more sustainable world for future generations. With the help of donators, we work to turn this vision into reality, one project at a time.</p>
      </div>
      {/* Left side image */}
    </div>

    {/* Our Values Section */}
    <div className="row align-items-center mb-5">
      {/* Left side content */}
      <div className="col-md-12">
        <h3>Our Values</h3>
        <p><strong>At Cryptocauseway,</strong> we’re driven by values that shape every decision we make. These core principles guide us as we strive to make the world a better place:</p>
        <ul>
          <li><strong>Transparency:</strong> We ensure complete openness about how funds are used and the impact they make.</li>
          <li><strong>Innovation:</strong> We harness the latest technology to create solutions that support charitable causes and sustainability efforts.</li>
          <li><strong>Collaboration:</strong> We believe in the power of partnership and work together with charities, crypto creators, and donators to achieve our goals.</li>
          <li><strong>Impact:</strong> Every project we support aims for real-world, measurable change that improves lives, communities, and the environment.</li>
        </ul>
      </div>
      {/* Right side image */}
    </div>

    {/* Our Team Section */}
    <div className="row align-items-center mb-5">
      {/* Right side content */}
      <div className="col-md-12">
        <h3>Our Team</h3>
        <p><strong>We are a passionate team</strong> committed to making a difference. With expertise in cryptocurrency, digital marketing, web development, and social responsibility, our team brings together the right skills to support your mission. Together, we strive to make the world a healthier, more sustainable place through technology and collaboration.</p>
        <p>Our team works tirelessly to ensure that your donations and projects are maximized for impact, offering the tools, services, and resources needed to succeed in a rapidly evolving digital landscape.</p> 
      </div>
      {/* Left side image */}
    </div>

    {/* Our Story Section */}
    <div className="row align-items-center">
      {/* Left side content */}
      <div className="col-md-12">
        <h3>Our Story</h3>
        <p><strong>Cryptocauseway</strong> was founded with a vision to leverage the transformative power of cryptocurrency for social good. As the world continues to embrace blockchain technology, we saw an opportunity to bring positive change through charitable contributions, sustainability efforts, and animal rescue initiatives.</p>
        <p>With a shared belief in the power of collaboration, innovation, and transparency, our team has worked hard to build a platform where cryptocurrency creators, donators, and project owners can come together for a common cause: making the world a healthier, more sustainable place.</p>
      </div>
      {/* Right side image */}
    </div>
  </div>
</section>
    </div>
  );
};

export default ServicesPage;
