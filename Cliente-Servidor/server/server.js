const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Ruta de la API que devuelve una lista de usuarios
app.get('/api/usuarios', (req, res) => {
    const usuarios = [
        { id: 1, nombre: 'Ana', edad: 30, ciudad: 'Madrid' },
        { id: 2, nombre: 'Carla', edad: 25, ciudad: 'Valencia' },
        { id: 3, nombre: 'David', edad: 40, ciudad: 'Barcelona' }
    ];
    res.json(usuarios);
});

app.listen(port, () => {
    console.log(`Servidor corriendo`);
});
