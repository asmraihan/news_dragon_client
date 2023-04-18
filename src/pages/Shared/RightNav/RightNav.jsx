import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
import bg1 from '../../../assets/bg1.png'
const RightNav = () => {
    return (
        <div>
            <h4 className='my-2'>Login with</h4>
            <Button className='mb-2 w-100' variant="outline-primary"> <FaGoogle /> Login with Google</Button>{' '}
            <Button variant="outline-secondary w-100"> <FaGithub /> Login with GitHub</Button>{' '}
            <div>
                <h4 className='mt-4'>Find us on</h4>
                <ListGroup className='fs-5'>
                    <ListGroup.Item> <FaFacebook className='text-primary' /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter className='text-primary'  /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram className='text-danger' /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img className='w-100' src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;