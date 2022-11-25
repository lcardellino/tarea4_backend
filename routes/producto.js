const express = require('express')
const { verProducto } = require('../controllers/productoController')
const router = express.Router()
const {crearProducto, verProductos} = require("../controllers/productoController")


router.post('/crear', crearProducto)
router.get('/ver', verProductos)

module.exports = router