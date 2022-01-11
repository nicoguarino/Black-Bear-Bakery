import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import './style.css';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="./images/carousel-img1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-shadow mobile-view">We do weddings!</h3>
            <p className="text-shadow mobile-view">Contact me for details on wedding packages and check out the store for cake options!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="./images/carousel-img2.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3 className="text-shadow mobile-view">Exquisite Cupcakes</h3>
            <p className="text-shadow mobile-view">Checkout our store for a great variety of cupcakes!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="./images/carousel-img3.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3 className="text-shadow mobile-view">Soft and Delightful</h3>
            <p className="text-shadow mobile-view">
              Mouthwatering homemade cookies also available in the store!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>      
    );
  }
  
export default ControlledCarousel;