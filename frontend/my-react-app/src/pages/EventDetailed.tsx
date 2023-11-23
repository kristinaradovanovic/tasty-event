import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Event } from '../types/Event';
import { useParams } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import { CartItem } from '../types/CartItem';

const EventDetailed: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    console.log('ID:', id);
    axios.get<Event>(`http://localhost:3002/events/${id}`)
      .then(response => setEvent(response.data))
      .catch(error => {
        console.error('Error fetching event details:', error);
        console.log('ID:', id);
      });
  }, [id]);


    const addToCart = async () => {
      if (event) {
        const newItem: CartItem = {
          id: event.id,
          title: event.title,
          price: event.price,
          quantity: 1,
          image: event.image
        };
    
        try {
          await axios.post('http://localhost:3002/cart', newItem);
          console.log('Item added to cart successfully!');
        } catch (error) {
          console.error('Error adding to cart:', error);
        }
      }
    };

  return (
    <div>
      <Row>
        <Col md={6}>
          <img src={event?.image} alt={event?.title} className="large"/>
        </Col>
        <Col md={6}>
          {event && (
              <>
                <h2 className='text'>{event.title}</h2>
                <p className='text-p'>{event.time}</p>
                <p className='text-p'>{event.location}</p>
                <p className='text-p'>{event.description}</p>
                <p className='text-p'>Price: {event.price}$</p>
                <Button onClick={addToCart}>Add to Cart</Button>
              </>
            )}
        </Col>
      </Row>
    
    </div>
  );
};

export default EventDetailed;
