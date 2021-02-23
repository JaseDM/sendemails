const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;




app.get('/', (req, res) => {
    res.send('conectado')
})



app.listen(port, () => {
    console.log(`Servidor corriendo por el puerto ${port}`);
})