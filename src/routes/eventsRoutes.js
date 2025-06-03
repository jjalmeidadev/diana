const express = require('express');
const router = express.Router();
const EventsController = require('../controllers/eventsController');

// Rota para listar todos os eventos
router.get('/events', EventsController.getAllEvents);

// Rota para buscar um evento por ID
router.get('/events/:id', EventsController.getEventById);

// Rota para criar um novo evento
router.post('/events', EventsController.createEvent);

// Rota para atualizar um evento por ID
router.put('/events/:id', EventsController.updateEventById);

// Rota para deletar um evento por ID
router.delete('/events/:id', EventsController.deleteEventById);

module.exports = router;
