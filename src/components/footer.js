// components/footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li><Link href="/about">Our Mission</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><Link href="/services">Branding</Link></li>
              <li><Link href="/services">Web Design</Link></li>
              <li><Link href="/services">Web Development</Link></li>
              <li><Link href="/services">Digital Marketing</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <p><a href="mailto:info@cryptocauseway.com">info@cryptocauseway.com</a></p>
            </ul>
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col className="text-center copyright">
            <p>&copy; 2025 Cryptocauseway.com. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
