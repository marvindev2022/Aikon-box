const express = require("express")
const gerarSVGsDosIcones = require("./controllers/iconController")
routes = express()

routes.get("/icons", gerarSVGsDosIcones)

module.exports = routes
