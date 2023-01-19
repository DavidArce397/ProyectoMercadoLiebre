const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, '/public');
app.use(express.static(publicPath));

// app.listen(3050, () => {
//     console.log('Servidor Corriendo.');
// });

// Levantamos servidor para Render
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
});



