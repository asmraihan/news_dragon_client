import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news
    return (
        <Card className="mb-4">
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <div className='d-flex align-items-center'>
                            <div className='me-2'> <Image style={{ height: '40px' }} src={author?.img} roundedCircle /></div>
                            <div>
                                <h5>{author?.name}</h5>
                                <p><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link> </>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex ">
                <div className='flex-grow-1 d-flex align-items-center'>
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                    <span className='ms-1'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;