import React from 'react';
import './style.css';
import { Container, Figure } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Bio() {
    return (
    <Container className="bio-container">
        <h2>Meet the baker</h2>
        <Row>
            <Col className="col d-flex justify-content-center">
                <Figure>
                    <Figure.Image 
                        width={420}
                        height={580}
                        className="bio-img"
                        src="https://i.imgur.com/33U65aA.jpg"
                    />
                </Figure>
            </Col>
            <Col className="col">My name is Emily Black and I'm an avid horse lover, mother of two, and owner of Black Bear Bakery. I service Durango, CO and surrounding areas with delectable bakery items for all occasions. Birthday parties, weddings, or just for fun, I can create any delicious bakery sweet to match your needs. </Col>
        </Row>
      </Container>
    );
}

export default Bio;