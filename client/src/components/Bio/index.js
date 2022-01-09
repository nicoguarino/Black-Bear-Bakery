import React from 'react';
import './style.css';
import { Container, Figure } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Bio() {
    return (
    <Container className="bio-container">
        <div>
            <div class="divider div-transparent"></div>
        </div>
        <h2>Meet the baker</h2>
        <Row>
            <Col sm={12} xs={12} md={12} lg={6} className="col d-flex justify-content-center">
                <Figure>
                    <Figure.Image 
                        width={420}
                        height={580}
                        className="bio-img"
                        src="https://i.imgur.com/33U65aA.jpg"
                    />
                </Figure>
            </Col>
            <Col sm={12} xs={12} md={12} lg={6} className="col">
                <p>My name is Emily Black and I'm an avid horse lover, mother of two, and owner of Black Bear Bakery. I service Durango, CO and surrounding areas with delectable bakery items for all occasions. Birthday parties, weddings, baby showers, or just to satisfy your sweet tooth, I can create any delicious bakery item to match your needs.</p> 
                <p>
                When I'm not baking, you can find me riding my mustang Ella though the mountains of southwest colorado or spending time with my family - my wonderfully supportive husband, Colton, and two beautiful children, Kyler and Brinley.
                </p>
                If you don't find exactly what you need in my <a href="/store">online store</a>, I do take custom orders of any kind, so call me at (970)-238-0372 or contact me <a href="/contact">here</a>. I look forward to hearing from you!
                
                </Col>
        </Row>
        <div>
            <div class="divider div-transparent"></div>
        </div>
      </Container>
    );
}

export default Bio;