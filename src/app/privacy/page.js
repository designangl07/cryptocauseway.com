// app/services/page.js
"use client"; 
import React from 'react';

const ServicesPage = () => {
  return (
    <div>
      {/* Free Services Section */}
      <section className="service-section hero-inner py-5">
        <div className="container">
          <h1 className="text-center mb-4">Privacy Policy</h1>
          <p className="text-center">At Cryptocauseway, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines the types of personal information we collect, how we use it, and how we safeguard it.</p>
        </div>
      </section>

      {/* Cryptocurrency Services Section */}
      <section className="privacy-policy-section py-5">
  <div className="container">
    <h3 className="mt-4">Information We Collect</h3>
    <p>We collect personal information that you provide to us directly through our website. This may include:</p>
    <ul>
      <li>Contact Information (e.g., name, email address, phone number)</li>
      <li>Payment Information (e.g., billing address, payment details)</li>
      <li>Site Usage Data (e.g., IP addresses, browser type, usage patterns)</li>
    </ul>

    <h3 className="mt-4">How We Use Your Information</h3>
    <p>We use the information we collect for various purposes, including:</p>
    <ul>
      <li>Processing donations and payments for services</li>
      <li>Improving our website functionality and user experience</li>
      <li>Sending you newsletters or promotional materials if you subscribe</li>
      <li>Responding to inquiries or customer support requests</li>
    </ul>

    <h3 className="mt-4">How We Protect Your Information</h3>
    <p>We implement a range of security measures to ensure that your personal information is safe, including:</p>
    <ul>
      <li>Encryption of sensitive data</li>
      <li>Regular security audits and monitoring</li>
      <li>Access controls and restricted permissions</li>
    </ul>

    <h3 className="mt-4">Sharing Your Information</h3>
    <p>We do not sell, trade, or otherwise share your personal information with third parties unless:</p>
    <ul>
      <li>It is necessary for the provision of our services (e.g., payment processors)</li>
      <li>We are required to do so by law or in response to legal requests</li>
    </ul>

    <h3 className="mt-4">Your Rights</h3>
    <p>You have the right to access, update, or delete your personal information. To do so, please contact us directly at <a href="mailto:info@cryptocauseway.com">info@cryptocauseway.com</a>.</p>

    <h3 className="mt-4">Cookies and Tracking Technologies</h3>
    <p>We use cookies and other tracking technologies to enhance your experience on our website. You can adjust your browser settings to disable cookies if you prefer.</p>

    <h3 className="mt-4">Changes to This Policy</h3>
    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "03Feb 2025" date.</p>

    <h3 className="mt-4">Contact Us</h3>
    <p>If you have any questions about this Privacy Policy or how we handle your personal data, feel free to contact us at <a href="mailto:info@cryptocauseway.com">info@cryptocauseway.com</a>.</p>
  </div>
</section>


    </div>
  );
};

export default ServicesPage;
