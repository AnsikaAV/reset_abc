import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../components/Layouts/Layout";
import "../../styles/Contact.css"; // Import the CSS file for styling

const Contact = () => {
  return (
    <Layout>
      <section className="contact_section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col sm={8}>
              <h4>We Guarantee</h4>
              <h2>30 Minutes Delivery!</h2>
              <p>
                Aliquam a augue suscipit, luctus neque purus ipsum neque undo
                dolor primis libero tempus, blandit a cursus varius luctus neque
                magna
              </p>
              <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
                Call: 999-888-7777
              </Link>
            </Col>
          </Row>

          <Row className="justify-content-center mt-5">
            <Col sm={8}>
              <Form className="contact_form">
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Enter subject" />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Your message" />
                </Form.Group>

                <Button variant="primary" type="submit" className="btn btn_red rounded-0 mt-3">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          

          <Row className="justify-content-center mt-5">
            <Col sm={8}>
              <div className="map_container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099997!2d144.95592331568093!3d-37.81720974202133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f2b9a8fcb5b7!2sFlinders%20Street%20Railway%20Station!5e0!3m2!1sen!2sau!4v1613992481798!5m2!1sen!2sau"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
