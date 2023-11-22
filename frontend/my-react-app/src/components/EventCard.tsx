import React from 'react';
import { Event } from '../types/Event';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EventCard: React.FC<Event> = ({ title, description, date, image, location, id}) => {
  return (
    <Card className="event-card">
      <Row>
        <Col md={4} xs={12}>
          <span>Date: {date}</span>
          <p>{location}</p>
        </Col>
        <Col md={4} xs={12}>
          <img src={image} alt={title} className="event-image" />
        </Col>
        <Col md={4} xs={12}>
          <h3 className='text'>{title}</h3>
          <p>{description}</p>
          <Link to={`/events/${id}`} className="btn btn-primary">View Event</Link>
        </Col>
      </Row>
  </Card>
  );
};

export default EventCard;
