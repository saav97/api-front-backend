const express = require('express');
const router = express.Router();
const usuariosController = require('./../controllers/usuarioController');

//Definimos las rutas y derivamos al controlador correspondiente

router.get('/', usuariosController.getUsuarios);
router.get('/:id',usuariosController.getUserById);

module.exports = router;

