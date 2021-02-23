const { Router } = require('express');

const rutas = Router();



rutas.post('/send-email', (req, res) => {
    const body = req.body;
    console.log(body);
    res.json({
        ok: true,
        status: 200,
        body
    })
})




module.exports = rutas;
