const express = require('express'); //libreria
const router = express.Router();


// Rutas - Endpoints para los visitantes
// Metodo Post se usa para registrar un nuevo visitante
router.post('/visitante/registrar', );
// Metodo Get se usa para obtener todos los visitantes
router.get('/visitante/obtener-todos', );

//Metodo put se usa para actualizar/modificar un visitante
router.put('/visitante/actualizar/:id', );

// Metodo delete se usa para eliminar un visitante
router.delete('/visitante/eliminar/:id', );

module.exports = router;