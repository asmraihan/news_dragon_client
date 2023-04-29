import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user,logOut } = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                       
                                <Link className='me-3' to='/category/0'>Home</Link>
                           
                            <Link className='me-3' href="#about">About</Link>
                            <Link  href="#career">Career</Link>

                        </Nav>
                        <Nav className=''>
                            {user &&
                                <FaUserCircle style={{ fontSize: '2rem', marginRight : '15px'}}></FaUserCircle>
                            }

                            {user ? <Button onClick={logOut} className='btn-gray-square'>Logout</Button> :
                                <Link to='/login'> <Button className='btn-gray-square'>Login</Button></Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;