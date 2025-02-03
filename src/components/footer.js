// components/footer.js
import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li><a href="/about">Our Mission</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="/services">Branding</a></li>
              <li><a href="/services">Web Design</a></li>
              <li><a href="/services">Web Development</a></li>
              <li><a href="/services">Digital Marketing</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h5>Contact</h5>
            <ul className="list-unstyled">
            <p><a href="mailto:info@cryptocharity.com">info@cryptocauseway.com</a></p>
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
