import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import EventCard from '../components/EventCard';
import { Event } from '../types/Event';

const EventCategory: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    if (category) {
      axios
        .get<Event[]>(`http://localhost:3002/${category}`)
        .then((response) => {
          console.log('Response from backend:', response.data);
          setEvents(response.data);
        })
        .catch((error) => console.error('Error fetching events:', error));
    }
  }, [category]);

  return (
    <div>
      {category && <h2>{category.toUpperCase()} Events</h2>}
      {events.map((event) => (
        <EventCard key={event.title} {...event} />
      ))}
    </div>
  );
};

export default EventCategory;