"use client";
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Popup from './popup';
import FreeServiceSection from '@/components/FreeServiceSection';
import Link from 'next/link';

export default function Homesections() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  //console.log('Rendering Home page');

  return (
    <div>


      {/* Your page content */}
      <section className="hero text-center">
        <h1>Make a Positive Impact with Crypto</h1>
        <p>Your donations and support can help create a healthier, sustainable world.</p>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end mb-3 mb-md-0">
            <Link href="/contact" className="btn">Apply for No-Cost Services</Link>
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-start">
              <button onClick={openPopup} className="btn nav-link">Donate Now</button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Free Service Section */}
      <FreeServiceSection />

      {/* Donators Section */}
      <section id="donators">
        <Container>
          <Row>
            <Col md={6} className="text-center">
              <img src="/assets/crypto-donate.svg" alt="Crypto Donation" className="img-fluid" />
            </Col>
            <Col md={6} className="text-left align-self-center">
              <h2>For Crypto Donators</h2>
              <h4>Support a Healthy World with Your Crypto Donations</h4>
              <p className="para">Your donations help us provide free services for charity, sustainable, and animal rescue projects. By donating crypto, you're directly contributing to a healthier, more sustainable world. Every donation you make goes towards supporting projects that aim to make a positive impact on the environment, animals, and communities in need. Together, we can build a better future, one donation at a time.</p>
              <Button onClick={openPopup} className="btn nav-link">Donate Crypto</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Crypto Owners Section */}
      <section id="cryptos" className="py-5">
        <Container>
          <Row>
            <Col md={6} className="text-left align-self-center">
              <h2>For Crypto Creators</h2>
              <h4>Get more visibility and grow your crypto project with our free marketing and website services.</h4>
              <p className="para">We believe in supporting new cryptocurrency projects by providing free marketing services to help you grow your community and increase visibility. Whether it’s designing a landing page or creating social media posts, we’re here to help you attract more visitors and spread the word about your coin.
              Get the boost you need, at no cost to you, and encourage more people to join your crypto movement.</p>
              <Link href="/crypto-Launchers" className="btn">Get Started</Link>
            </Col>
            <Col md={6} className="text-center">
              <img src="/assets/crypto-project.svg" alt="Crypto Project" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Popup Component */}
      <Popup isOpen={isPopupOpen} closePopup={closePopup} />
    </div>
  );
}
