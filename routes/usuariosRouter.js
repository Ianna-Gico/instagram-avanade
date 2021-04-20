const express = require('express');
const router = express.Router();
//const ValidarCadastro = require('../middlewares/ValidarCadastro');
const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.index);
// http://localhost:3000/usuarios/

router.post('/', usuariosController.create);
// http://localhost:3000/usuarios/

router.put('/:id', usuariosController.update);
// http://localhost:3000/usuarios/1

router.delete('/:id', usuariosController.delete);
// http://localhost:3000/usuarios/1

// http://localhost:3000/usuarios/perfil/1


module.exports = router;