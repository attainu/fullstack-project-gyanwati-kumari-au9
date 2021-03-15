import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Crops from "../Components/Crops";


class Mandi extends Component{
    render(){
        return(
            <Container fluid>
                <Row>
                    <Crops/>
                </Row>
            </Container>
        )
    }
}

export default Mandi;