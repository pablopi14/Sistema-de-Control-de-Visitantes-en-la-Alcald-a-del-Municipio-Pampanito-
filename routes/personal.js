const express = require('express'); //libreria
const router = express.Router();


// Rutas - Endpoints para el personal

router.post('/personal/login', );

// Metodo Post se usa para registrar un nuevo personal
router.post('/personal/registrar', );
// Metodo Get se usa para obtener todo el personal
router.get('/personal/obtener-todos', );

//Metodo put se usa para actualizar/modificar un personal
router.put('/personal/actualizar/:id', );

// Metodo delete se usa para eliminar un personal
router.delete('/personal/eliminar/:id', );


module.exports = router;