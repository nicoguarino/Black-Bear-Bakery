import React from "react";
// import Signup from '../components/Carousel'; 
import ControlledCarousel from '../components/Carousel';
import { Container } from 'react-bootstrap';

// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import Cart from '../components/Cart';

const Home = () => {
  return (
    <div className="container">
      <Container>
        <ControlledCarousel />
        <p>My name is Emily Black and I'm an avid horse lover, mother of two, and owner of Black Bear Bakery. I service the Durango, CO area with delectable bakery items for all occasions. Birthday parties, weddings, </p>
      </Container>
    </div>
  );
};


export default Home;
