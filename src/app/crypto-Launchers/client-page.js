// app/services/page.js
"use client"; 
import Link from 'next/link';
import React from 'react';

const CryptoDonatorsPage = () => {
  return (
    <div>
      {/* Free Services Section */}
      <section className="service-section hero-inner py-5">
        <div className="container">
          <h1 className="text-center mb-4">Boost Your New Crypto Coin with Expert Marketing Services</h1>
        </div>
      </section>

      {/* Cryptocurrency Services Section */}
      <section className="crypto-launchers-section py-5">
  <div className="container">
    {/* Crypto Launchers Impact Section */}
    <div className="row align-items-center mb-5">
      {/* Right side content */}
      <div className="col-md-12">
        <h3>Make Your Crypto Launch Successful</h3>
        <p><strong>For cryptocurrency creators launching new projects:</strong> Cryptocauseway is here to help you reach a larger audience, enhance your visibility, and grow your crypto coin. We provide tailored marketing solutions to ensure your new launch gets the attention it deserves.</p>
        <ul>
          <li><strong>Landing Pages:</strong> Our team will design high-converting landing pages to capture the interest of potential investors and users.</li>
          <li><strong>SEO Strategy:</strong> We implement SEO best practices to ensure your crypto project ranks well on search engines, helping you attract organic traffic.</li>
          <li><strong>Social Media Campaigns:</strong> From posts to ads, we create social media campaigns that resonate with your target audience and increase engagement.</li>
        </ul>
        <p>With our expertise in digital marketing for cryptocurrency, your new launch is set for success. We're here to make sure your coin gains traction and attracts the right investors.</p>
      </div>
      {/* Left side image */}
    </div>

    {/* Digital Marketing for Crypto Section */}
    <div className="row align-items-center mb-5">
      {/* Left side content */}
      <div className="col-md-12">
        <h3>Digital Marketing for Your Crypto Project</h3>
        <p><strong>Get the attention your cryptocurrency deserves:</strong> Our digital marketing services are designed specifically for new crypto projects. From tailored social media strategies to SEO, we ensure that your cryptocurrency is introduced to a wide and engaged audience.</p>
        <ul>
          <li><strong>Targeted Social Media Ads:</strong> We create and manage social media ad campaigns that target crypto enthusiasts and investors, helping you increase visibility and drive conversions.</li>
          <li><strong>SEO for Cryptocurrency:</strong> Our SEO experts will optimize your website to ensure it ranks highly for relevant crypto-related searches.</li>
          <li><strong>Content Creation:</strong> Engaging, high-quality content that educates potential users and builds trust in your crypto project.</li>
        </ul>
        <p>With our digital marketing solutions, we provide everything your new crypto launch needs to gain traction and grow its user base effectively.</p>
      </div>
      {/* Right side image */}
    </div>

    {/* Crypto Community Engagement Section */}
    <div className="row align-items-center">
      {/* Right side content */}
      <div className="col-md-12">
        <h3>Build Your Crypto Community</h3>
        <p><strong>Engagement is key:</strong> A successful crypto project is more than just a coin—it’s a community. We help you build and engage your crypto community with strategic campaigns, educational content, and personalized outreach.</p>
        <ul>
          <li><strong>Community Engagement:</strong> We help you engage with your crypto audience across social platforms, including Telegram, Discord, and Twitter, to build a loyal following.</li>
          <li><strong>Influencer Partnerships:</strong> Collaborating with influencers in the crypto space can drive massive exposure. We can help you partner with the right influencers for your project.</li>
          <li><strong>Continual Growth:</strong> We help you maintain long-term engagement with your community, ensuring that your crypto project continues to grow post-launch.</li>
        </ul>
        <p>Your cryptocurrency’s success depends on the strength of its community. Let us help you build and sustain a thriving ecosystem around your project.</p>
        <Link href="/contact" className="btn btn-primary">Get Started</Link>
      </div>
      {/* Left side image */}
    </div>
  </div>
</section>

      
    </div>
  );
};

export default CryptoDonatorsPage;
