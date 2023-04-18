import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import './Header.css'
const Header = () => {
    return (
        <Container className='mt-5'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary mt-2'>Journalism Without Fear or Favor</p>
                <p className='fw-medium'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex w-75 mx-auto'>
                <Button className='btn-red-square fw-semibold'>Latest</Button>
                <Marquee className='text-danger fw-semibold' speed={100}>
                    I can be a React component, multiple React components, or just some text....
                </Marquee>
            </div>
            {/* navbar */}
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                 
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className='me-3' href="#home">Home</Nav.Link>
                            <Nav.Link className='me-3' href="#about">About</Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>
                         
                        </Nav>
                        <Nav className=''>
                            <Nav.Link href="#deets">profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                            <Button className='btn-gray-square'>Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;