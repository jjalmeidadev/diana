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

async function updateEventById(req, res) {
  try {
    const updatedEvent = await EventsModel.updateEventById(req.params.id, req.body);
    if (!updatedEvent) return res.status(404).json({ error: 'Evento não encontrado' });
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar evento' });
  }
}

async function deleteEventById(req, res) {
  try {
    const deletedEvent = await EventsModel.deleteEventById(req.params.id);
    if (!deletedEvent) return res.status(404).json({ error: 'Evento não encontrado' });
    res.json({ message: 'Evento deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar evento' });
  }
}

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  updateEventById,
  deleteEventById,
};
