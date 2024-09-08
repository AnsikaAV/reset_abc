import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Layout from "../../components/Layouts/Layout";
import "../../styles/Reservation.css";
import axios from "axios"; // Import axios for making HTTP requests

const Reservation = () => {
  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    contact: "",
    date: "",
    time: "",
    guests: "",
    specialRequest: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to the Spring Boot backend
    axios.post("http://localhost:8081/reservations", reservationData)
      .then((response) => {
        console.log("Reservation submitted successfully:", response.data);
        // You can add a success message or reset the form here
      })
      .catch((error) => {
        console.error("There was an error submitting the reservation:", error);
      });
  };

  return (
    <Layout>
      <section className="reservation_section">
        <Container>
          <Row className="justify-content-center mt-5">
            <Col sm={8}>
              <Form className="reservation_form" onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={reservationData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={reservationData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group controlId="formContact">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="contact"
                    value={reservationData.contact}
                    onChange={handleChange}
                    placeholder="Enter Contact Number"
                  />
                </Form.Group>

                <Form.Group controlId="formDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={reservationData.date}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formTime">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    name="time"
                    value={reservationData.time}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formGuests">
                  <Form.Label>Number of Guests</Form.Label>
                  <Form.Control
                    type="number"
                    name="guests"
                    value={reservationData.guests}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formSpecialRequest">
                  <Form.Label>Special Request</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="specialRequest"
                    rows={5}
                    value={reservationData.specialRequest}
                    onChange={handleChange}
                    placeholder="Your special request"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="btn btn_red rounded-0 mt-3">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Reservation;
