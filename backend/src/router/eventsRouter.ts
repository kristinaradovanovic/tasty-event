import express, { Router } from 'express'
import eventData from '../data'
import EventType from '../types/EventType'



const eventsRouter: Router = express.Router()

eventsRouter.get('/', (req, res) => {
  res.json(eventData);
});

eventsRouter.get('/:category', (req, res) => {
  const { category } = req.params;
  const filteredEvents: EventType[] = eventData.filter((event) => event?.category === category);
  res.json(filteredEvents);
});

export default eventsRouter
