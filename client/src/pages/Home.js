import React from "react";
import ControlledCarousel from '../components/Carousel';
import { Container } from 'react-bootstrap';
import Bio from '../components/Bio';



const Home = () => {
  return (
    <div className="container">
      <Container>
        <ControlledCarousel />
        <Bio />
      </Container>
    </div>
  );
};


export default Home;
