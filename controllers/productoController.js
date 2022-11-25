const {Product} = require("../models/productos")


const crearProducto = async(req, res) => {
    try {
        const item = new Product(req.body)
        await item.save()
        res.status(201).json({item})
    } catch (error) {
        res.status(501),json({error})
    }
}

const verProductos = async(req, res) => {
    const items = await Product.find()
    res.status(200).json({items})
}

module.exports = {crearProducto, verProductos}