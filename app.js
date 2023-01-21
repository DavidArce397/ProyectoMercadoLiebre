const express = require('express');
const app = express();
const path = require('path');
const rutasHome = require('./routes/home');
const rutasLogin = require('./routes/login');
const rutasRegister = require('./routes/register');


const publicPath = path.join(__dirname, '/public');
app.use(express.static(publicPath));

// app.listen(3050, () => {
//     console.log('Servidor Corriendo.');
// });

// Levantamos servidor para Render
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

app.use('/home', rutasHome);
app.use('/login', rutasLogin);
app.use('/register', rutasRegister);



