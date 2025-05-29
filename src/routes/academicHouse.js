const express = require('express');
const router = express.Router();
const AcademicHouseController = require('../controllers/academic_house.controller');

// Rota para listar todas as casas acadêmicas
router.get('/', AcademicHouseController.getAllAcademicHouses);

// Rota para buscar uma casa acadêmica por ID
router.get('/:id', AcademicHouseController.getAcademicHouseById);

// Rota para criar uma nova casa acadêmica
router.post('/', AcademicHouseController.createAcademicHouse);

module.exports = router;
