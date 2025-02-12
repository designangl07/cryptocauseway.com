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
              <p>
  <strong>Make a Difference with Your Crypto Donations</strong>  
  Your <strong>crypto donations</strong> help fund <strong>charity, sustainability, and animal rescue projects</strong> worldwide.  
  We use contributions to provide <strong>free branding, website development, and marketing support</strong> to impactful organizations.  
  Whether you support with <strong>Bitcoin, Ethereum, Stablecoins, Utility Tokens, Security Tokens, Meme Coins, NFT Tokens, or Privacy Coins</strong>,  
  your donation drives real change. <strong>Donate today and be part of a healthier world!</strong>  
</p>
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
              <h2>For New Crypto Launchers</h2>
              <h4>Get Free Marketing Support to Boost Your Crypto Project.</h4>
              <p className=""><strong>Empowering New Crypto Projects & Charitable Causes with Free Services</strong>  
  We support <strong>new cryptocurrency launchers</strong> by providing <strong>free marketing, branding, and website development</strong> services for  
  <strong>Utility Tokens, Security Tokens, Stablecoins, Meme Coins, NFT Tokens, Privacy Coins</strong>, and more.  
  Whether you're launching a new <strong>crypto coin or token</strong>, we help boost visibility, attract investors, and grow your community.  
  Plus, we use <strong>crypto donations</strong> to offer <strong>complimentary services</strong> for <strong>charity, sustainability, and animal rescue projects</strong>,  
  creating a healthier world through blockchain innovation. <strong>Join us today and make an impact with your crypto!</strong>  </p>
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
