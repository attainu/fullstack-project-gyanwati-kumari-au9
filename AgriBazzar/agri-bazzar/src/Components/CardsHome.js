import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React from 'react';

const Cards = () => {
    return(
        <Container>
        <Row style={{display:"flex"}}>
          <Col md={{ span:3}}>
                <Card style={{ width: '14rem',top:"-160px",left:"100px"}}>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Live Stock</Card.Title>
                        <Card.Text style={{textAlign:"center"}}>
                        50 items
                        </Card.Text>
                        <Card.Img variant="top" src="images/live.jpg" style={{borderRadius:"100%"}}/>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
          </Col>
          <Col md={{ span: 3 }}>
                <Card style={{ width: '14rem' ,top:"-160px",left:"100px"}}>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Crops</Card.Title>
                        <Card.Text style={{textAlign:"center"}}>
                        150 items
                        </Card.Text>
                        <Card.Img variant="top" src="images/capsicum.jpg" style={{borderRadius:"100%"}}/>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
          </Col>
          <Col md={{ span: 3}}> 
                <Card style={{ width: '14rem' ,top:"-160px",left:"100px"}}>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Farm Equipments</Card.Title>
                        <Card.Text style={{textAlign:"center"}}>
                        250 items
                        </Card.Text>
                        <Card.Img variant="top" src="images/equip.jpg" style={{borderRadius:"100%"}}/>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
          </Col>
          <Col md={{ span: 3 }}>
                <Card style={{ width: '14rem' ,top:"-160px",left:"100px"}}>
                    <Card.Body>
                        <Card.Title style={{textAlign:"center"}}>Books</Card.Title>
                        <Card.Text style={{textAlign:"center"}}>
                        300 items
                        </Card.Text>
                        <Card.Img variant="top" src="images/book.jpg" style={{borderRadius:"100%"}}/>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
          </Col>
        </Row>
      </Container>
    )
}

export default Cards;