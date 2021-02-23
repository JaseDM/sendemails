const express = require('express');
const { userInfo } = require('os');
const paht = require('path');
require('dotenv').config();



const app = express();
const port = process.env.PORT;

// Middleware 
app.use(express.json({limit: '300kb', extended: true}));
// express.urlencoded Para leer los datos del body
app.use(express.urlencoded({extended: false}));
app.use(require('./routes/sendmail'));

app.use(express.static(paht.join( __dirname , 'public')))
// rutas 




app.listen(port, () => {
    console.log(`Servidor corriendo por el puerto ${port}`);
})