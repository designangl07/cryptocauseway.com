// app/services/page.js
"use client"; 
import { useState, useEffect } from 'react';
import React from 'react';
import { Button } from 'react-bootstrap';
import Popup from '../../components/popup'

const CryptoDonatorsPage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
  return (
    <div>
      {/* Free Services Section */}
      <section className="service-section hero-inner py-5">
        <div className="container">
          <h1 className="text-center mb-4">Join the Movement: Donate to Build a Better World</h1>
        </div>
      </section>

      {/* Cryptocurrency Services Section */}
      <section className="donators-section py-5">
  <div className="container">
    {/* Donator Impact Section */}
    <div className="row align-items-center mb-5">
      {/* Right side content */}
      <div className="col-md-12">
        <h3>Your Impact as a Donator</h3>
        <p><strong>As a donator to Cryptocauseway:</strong> Your contributions help support a healthier world by funding charitable projects, sustainable initiatives, and animal rescue efforts. Every donation you make is carefully allocated to initiatives that make a real difference in the lives of people, animals, and the environment. Here’s how your donation is used:</p>
        <ul>
          <li><strong>Supporting Charity Projects:</strong> Your funds help us provide free services to charitable organizations, enabling them to have a stronger online presence and reach more people with their missions.</li>
          <li><strong>Environmental Sustainability:</strong> Donations are directed towards supporting sustainable projects that promote environmental responsibility and long-term positive change.</li>
          <li><strong>Animal Rescue Initiatives:</strong> We allocate funds to animal rescue efforts that save and rehabilitate animals, ensuring they have the best chance at a better life.</li>
        </ul>
        <p>Your generosity is creating a ripple effect of positive change, and we are proud to partner with you in making the world a healthier place.</p>
      </div>
    </div>

    {/* Transparency & Accountability Section */}
    <div className="row align-items-center mb-5">
      {/* Left side content */}
      <div className="col-md-12">
        <h3>Transparency & Accountability</h3>
        <p><strong>Your trust is essential to us:</strong> At Cryptocauseway, we believe in complete transparency about how donations are used. We are committed to making sure your support is directed to the right causes, and we provide regular updates on the impact of your contributions. Here's how we ensure accountability:</p>
        <ul>
          <li><strong>Detailed Reports:</strong> We provide detailed reports on how your donations are spent, ensuring every dollar goes toward creating a better world.</li>
          <li><strong>Impact Tracking:</strong> We monitor and track the success of the projects we support to ensure they meet their goals and make a measurable difference.</li>
          <li><strong>Collaborative Partnerships:</strong> We partner with trustworthy organizations, ensuring that funds are used efficiently and effectively to achieve long-lasting change.</li>
        </ul>
        <p>When you donate, you’re not just giving money—you’re supporting real-world changes, knowing exactly where your contributions are making a difference.</p>
      </div>
      {/* Right side image */}
    </div>

    {/* Get Involved Section */}
    <div className="row align-items-center">
      {/* Right side content */}
      <div className="col-md-12">
        <h3>Get Involved</h3>
        <p><strong>As a donator, you can do even more:</strong> We invite you to become more involved in our mission by sharing our cause with your community, helping us expand the impact of our work. Here are ways you can further engage:</p>
        <ul>
          <li><strong>Spread the Word:</strong> Share our message on social media to inspire others to donate and contribute to a healthier world.</li>
          <li><strong>Join Our Events:</strong> Participate in or sponsor events that support the projects we work with.</li>
          <li><strong>Stay Updated:</strong> Subscribe to our newsletter to stay informed on the latest updates and stories of change.</li>
        </ul>
        <p>Your involvement goes beyond donations—together, we can create a movement of positive impact. Let's work together to make the world a better place.</p>
        <Button onClick={openPopup} className="btn nav-link">Get Involved</Button>
      </div>
      {/* Left side image */}
    </div>
  </div>
</section>
{/* Popup Component */}
<Popup isOpen={isPopupOpen} closePopup={closePopup} />
    </div>
  );
};

export default CryptoDonatorsPage;
