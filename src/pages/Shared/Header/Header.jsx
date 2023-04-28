import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <Container className='mt-5'>
            <div className="text-center">
                <Link to='/'><img src={logo} alt="" /></Link>
                <p className='text-secondary mt-2'>Journalism Without Fear or Favor</p>
                <p className='fw-medium'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex w-75 mx-auto my-4'>
                <Button className='btn-red-square fw-semibold'>Latest</Button>
                <Marquee className='text-danger fw-semibold' speed={100}>
                    News flash !! I hate bootstrap !!! ....
                </Marquee>
            </div>
            {/* navbar */}
           
        </Container>
    );
};

export default Header;