import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Pic1 from "../../assets/menu/burger-11.jpg";
import Pic2 from "../../assets/menu/burger-12.jpg";
import Pic3 from "../../assets/menu/burger-13.jpg";
import Pic4 from "../../assets/menu/burger-14.jpg";
import Pic5 from "../../assets/menu/burger-15.jpg";
import Pic6 from "../../assets/menu/burger-16.jpg";
import Pic7 from "../../assets/menu/burger-17.jpg";
import Pic8 from "../../assets/menu/burger-18.jpg";
import Layout from '../../components/Layouts/Layout';
import "./Gallery.css";

// Mock Data Cards
const mockData = [
  { id: "0001", image: Pic1 },
  { id: "0002", image: Pic2 },
  { id: "0003", image: Pic3 },
  { id: "0004", image: Pic4 },
  { id: "0005", image: Pic5 },
  { id: "0006", image: Pic6 },
  { id: "0007", image: Pic7 },
  { id: "0008", image: Pic8 },
];

const Gallery = () => {
  return (
    <Layout>
      <section className="gallery_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
              <h2>OUR CRAZY BURGERS</h2>
              <p className="para">
                Aliquam a augue suscipit, luctus neque purus ipsum neque undo
                dolor primis libero tempus, blandit a cursus varius magna
              </p>
            </Col>
          </Row>
          <Row className="gallery_row">
            {mockData.map((image) => (
              <Col key={image.id} xs={6} sm={4} md={3} className="gallery_col">
                <div className="gallery_image">
                  <img src={image.image} alt={`Burger ${image.id}`} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Gallery;
