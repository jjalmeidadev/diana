const express = require('express');
const router = express.Router();
const EventsController = require('../controllers/events.controller');

// Rota para listar todos os eventos
router.get('/', EventsController.getAllEvents);

// Rota para buscar um evento por ID
router.get('/:id', EventsController.getEventById);

// Rota para criar um novo evento
router.post('/', EventsController.createEvent);

module.exports = router;
