"use client";
import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    "full-name": "",
    "company-name": "",
    "email-address": "",
    "phone-number": "",
    "website-url": "",
    category: "Charity",
    "services-required": "Branding",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = new FormData();
    Object.keys(formData).forEach((key) => form.append(key, formData[key]));

    form.append("_wpcf7", "37");
    form.append("_wpcf7_unit_tag", "contact-form-37");
    form.append("_wpcf7_version", "5.7.7");

    try {
      const response = await fetch(
        "https://admin.cryptocauseway.com/wp-json/contact-form-7/v1/contact-forms/37/feedback",
        {
          method: "POST",
          body: form,
        }
      );

      const result = await response.json();
      //console.log("CF7 API Response:", result);

      if (result.status === "mail_sent") {
        setMessage("✅ Your message has been sent successfully!");
        setFormData({
          "full-name": "",
          "company-name": "",
          "email-address": "",
          "phone-number": "",
          "website-url": "",
          category: "Charity",
          "services-required": "Branding",
        });
      } else {
        setMessage(`❌ Failed: ${result.message}`);
      }
    } catch (error) {
      console.error("API Error:", error);
      setMessage("❌ An error occurred. Check console logs.");
    }

    setLoading(false);
  };

  return (
    <div>
    {/* Hero Section */}
    <div className='hero-inner'>
      <h1 className="text-center my-4">Contact us</h1>
    </div>
    <Container className="my-5">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Label htmlFor="full-name">Full Name</Form.Label>
            <Form.Control
              type="text"
              id="full-name"
              name="full-name"
              placeholder="Enter your Full Name"
              value={formData["full-name"]}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md={6}>
            <Form.Label htmlFor="company-name">Company Name</Form.Label>
            <Form.Control
              type="text"
              id="company-name"
              name="company-name"
              placeholder="Enter your Company Name"
              value={formData["company-name"]}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Label htmlFor="email-address">Email Address</Form.Label>
            <Form.Control
              type="email"
              id="email-address"
              name="email-address"
              placeholder="Enter your Email Address"
              value={formData["email-address"]}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md={6}>
            <Form.Label htmlFor="phone-number">Phone Number</Form.Label>
            <Form.Control
              type="tel"
              id="phone-number"
              name="phone-number"
              placeholder="Enter your Phone Number"
              value={formData["phone-number"]}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Label htmlFor="website-url">Website URL</Form.Label>
            <Form.Control
              type="url"
              id="website-url"
              name="website-url"
              placeholder="Enter your Website URL"
              value={formData["website-url"]}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md={6}>
            <Form.Label htmlFor="category">Category</Form.Label>
            <Form.Select
              name="category"
              id="category"
              value={formData["category"]}
              onChange={handleChange}
              required
            >
              <option value="Charity">Charity</option>
              <option value="Sustainable Project">Sustainable Project</option>
              <option value="Animal Rescue">Animal Rescue</option>
              <option value="Newly Launched Cryptocurrency Owner">
                Newly Launched Cryptocurrency Owner
              </option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Label htmlFor="services-required">Service Required</Form.Label>
            <Form.Select
              name="services-required"
              id="services-required"
              value={formData["services-required"]}
              onChange={handleChange}
              required
            >
              <option value="Branding">Branding</option>
              <option value="Web Design & Development">Web Design & Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </Form.Select>
          </Col>
          <Col md={6}>
            <div>&nbsp;</div> {/* Empty div for layout purposes */}
          </Col>
        </Row>

        <Row className="mb-3">
          <Col className="text-center">
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </Col>
        </Row>
      </Form>

      {message && <p className="mt-3 text-center">{message}</p>}
    </Container>
    </div>
  );
};

export default ContactForm;



