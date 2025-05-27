const EventsModel = require('../models/eventsModel');

async function getAllEvents(req, res) {
  try {
    const events = await EventsModel.getAllEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar eventos' });
  }
}

async function getEventById(req, res) {
  try {
    const event = await EventsModel.getEventById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Evento não encontrado' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar evento' });
  }
}

async function createEvent(req, res) {
  try {
    const newEvent = await EventsModel.createEvent(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar evento' });
  }
}

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
};
