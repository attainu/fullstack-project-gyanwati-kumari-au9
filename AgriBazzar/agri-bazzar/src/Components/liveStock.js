import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';


class LiveStock extends Component{
    constructor(){
        super();
        this.state ={
            // 
        }
    }

    render(){
        return(
            <Container fluid>
                <Row style={{marginTop:"40px"}}>
                    <Col md={{span:12}} style={{color:"#51AF2B"}}>
                        <h6>Buy Products & Live Stock</h6>
                    </Col>
                </Row>
                <Row style={{marginTop:"33px",display:"flex",flexWrap:"nowrap"}}>
                    <Col md={{span:3}} style={{boxShadow:"2px 2px 2px 2px",padding:"5px"}}>
                        <Button style={{backgroundColor:"#51AF2B",borderRadius:"20px",width:"120px"}}>Reset</Button>
                        <Button style={{backgroundColor:"#51AF2B",borderRadius:"20px",width:"140px",float:"right"}}>Apply Filter</Button>
                        <h3 style={{backgroundColor:"lightgray",marginTop:"15px",fontSize:"18px",color:"#51AF2B",padding:"5px"}}>Price</h3>
                        <Button style={{backgroundColor:"#51AF2B",borderRadius:"10px",fontSize:"10px",height:"25px"}}>Rs.100/-</Button>
                        <Button style={{backgroundColor:"#51AF2B",borderRadius:"10px",float:"right",height:"25px",fontSize:"10px"}}>Rs.10000/-</Button>
                        <Form>
                            <Form.Group controlId="formBasicRange">
                                <Form.Label>Range</Form.Label>
                                <Form.Control type="range" />
                            </Form.Group>
                        </Form>
                        <h3 style={{backgroundColor:"lightgray",marginTop:"15px",fontSize:"18px",color:"#51AF2B",padding:"5px"}}>State</h3>
                        <Form>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Bihar" />
                            <Form.Check type="checkbox" label="Jharkhand" />
                            <Form.Check type="checkbox" label="Delhi" />
                            <Form.Check type="checkbox" label="Haryan" />
                            <Form.Check type="checkbox" label="Gujarrat" />
                        </Form.Group>
                        </Form>
                        <h3 style={{backgroundColor:"lightgray",marginTop:"15px",fontSize:"18px",color:"#51AF2B",padding:"5px"}}>Category</h3>
                        <Form>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Rice" />
                            <Form.Check type="checkbox" label="Wheat" />
                            <Form.Check type="checkbox" label="Corn" />
                            <Form.Check type="checkbox" label="Chana" />
                            <Form.Check type="checkbox" label="Mustard" />
                        </Form.Group>
                        </Form>

                    </Col>
                    <Col md={{span:9,offset:1}}>
                        <Button style={{backgroundColor:"#51AF2B"}}>Sell Products</Button>{' '}

                        <Dropdown style={{float:"right"}}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Live Stock Sort By
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Rice</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Wheat</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Corn</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Chana</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Mustard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <CardDeck style={{marginTop:"50px"}}>
                            <Card>
                                <Card.Img variant="top" src="https://tiimg.tistatic.com/fp/3/006/452/per-boiled-ir-64-rice-428.jpg" />
                                <Card.Body>
                                <Card.Title>Boiled Rice 20kg</Card.Title>
                                <Card.Text>
                                   Rs. 5000/-
                                </Card.Text>
                                <Button style={{backgroundColor:"#51AF2B"}}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        
                            <Card>
                                <Card.Img variant="top" src="https://www.agrifarming.in/wp-content/uploads/2019/09/HIUT7Tgt.jpg" style={{height:"300px"}} />
                                <Card.Body>
                                <Card.Title>Basmati Rice 20kg</Card.Title>
                                <Card.Text>
                                   Rs. 15000/-
                                </Card.Text>
                                <Button style={{backgroundColor:"#51AF2B"}}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5yKxnz4ycqEcwzdtTs9ZEuMAoXdU330rig&usqp=CAU" />
                                <Card.Body>
                                <Card.Title>Arwa Rice 20kg</Card.Title>
                                <Card.Text>
                                    Rs. 1200/-
                                </Card.Text>
                                <Button style={{backgroundColor:"#51AF2B"}}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </CardDeck>

                        <CardDeck style={{marginTop:"50px"}}>
                            <Card>
                                <Card.Img variant="top" src="https://4.imimg.com/data4/VU/HN/MY-18786767/wheat-grain-500x500.jpg" />
                                <Card.Body>
                                <Card.Title>Wheat 20kg</Card.Title>
                                <Card.Text>
                                   Rs. 1200/-
                                </Card.Text>
                                <Button style={{backgroundColor:"#51AF2B"}}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        
                            <Card>
                                <Card.Img variant="top" src="https://www.sify.com/uploads/maize_sweet_corn_wiki_ufzuTGagibefb.jpg" style={{height:"300px"}} />
                                <Card.Body>
                                <Card.Title>Corn 20kg</Card.Title>
                                <Card.Text>
                                   Rs. 25000/-
                                </Card.Text>
                                <Button style={{backgroundColor:"#51AF2B"}}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://cpimg.tistatic.com/05040251/b/4/Kala-Chana.jpg" />
                                <Card.Body>
                                <Card.Title>Chana/Gram 20kg</Card.Title>
                                <Card.Text>
                                    Rs. 22000/-
                                </Card.Text>
                                <Button style={{backgroundColor:"#51AF2B"}}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                        <CardDeck style={{marginTop:"50px"}}>
                            <Card>
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qWcu5-wpfexuKVhXY4bqKpsaojoBsdjJiA&usqp=CAU" style={{height:"300px"}}/>
                                <Card.Body>
                                <Card.Title>Mustard Seed 20kg</Card.Title>
                                <Card.Text>
                                   Rs. 30000/-
                                </Card.Text>
                                <Button style={{backgroundColor:"#51AF2B"}}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        
                            <Card>
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHvlABKfDw0iEhzBq-j7b8GXxknmPAjuDe2A&usqp=CAU" style={{height:"300px"}} />
                                <Card.Body>
                                <Card.Title>Green Moong 20kg</Card.Title>
                                <Card.Text>
                                   Rs. 5000/-
                                </Card.Text>
                                <Button style={{backgroundColor:"#51AF2B"}}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNPOMYIkVXUmZMtUgpf0V1d9MZiqTgp4P1eQ&usqp=CAU" />
                                <Card.Body>
                                <Card.Title>Potato 20kg</Card.Title>
                                <Card.Text>
                                    Rs. 2000/-
                                </Card.Text>
                                <Button style={{backgroundColor:"#51AF2B"}}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LiveStock;