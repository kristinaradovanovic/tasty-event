import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Event } from '../types/Event';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

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

  return (
    <Container>
      {event ? (
        <div className="event-detailed">
          <h2>{event.title}</h2>
          <p>Description: {event.description}</p>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          <p>Location: {event.location}</p>
          <p>Price: {event.price}</p>
          <img src={event.image} alt={event.title} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default EventDetailed;