import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Event } from '../types/Event';
import EventCard from './EventCard';
import { Container } from 'react-bootstrap';

const EventList: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
  
    useEffect(() => {
      axios.get<Event[]>('http://localhost:3002/api/events')
        .then(response => setEvents(response.data))
        .catch(error => console.error('Error fetching events:', error));
    }, []);
  
    return (
      <Container>
        {events.map((event, index) => (
          <div key={index} className="event-list-item">
            <EventCard {...event} />
          </div>
        ))}
      </Container>
    );
  };

export default EventList;