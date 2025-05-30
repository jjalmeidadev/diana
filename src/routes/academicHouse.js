const express = require('express');
const router = express.Router();
const AcademicHouseController = require('../controllers/academic_houseController');

// Rota para listar todas as casas acadêmicas
router.get('/academic-house', AcademicHouseController.getAllAcademicHouses);

// Rota para buscar uma casa acadêmica por ID
router.get('/academic-house/:id', AcademicHouseController.getAcademicHouseById);

// Rota para criar uma nova casa acadêmica
router.post('/academic-house', AcademicHouseController.createAcademicHouse);

// Rota para atualizar uma casa acadêmica por ID
router.put('/academic-house/:id', AcademicHouseController.updateAcademicHouse);

// Rota para deletar uma casa acadêmica por ID
router.delete('/academic-house/:id', AcademicHouseController.deleteAcademicHouse);

module.exports = router;
