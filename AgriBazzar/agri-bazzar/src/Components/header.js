import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';



const Header = (props) => {
    return(
        <Navbar collapseOnSelect expand="lg"  variant="dark" fixed="top" style={{backgroundColor:"#51AF2B",color:"white"}}>
            <Navbar.Brand href="/">Agri Bazzar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/mandi">
                        Mandi
                    </Nav.Link>
                    <Nav.Link href="/signup">SignUp</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default withRouter(Header)