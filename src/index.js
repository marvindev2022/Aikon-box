require("dotenv").config()
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  return console.log("Hello world!")
})

const PORT = process.env.PORT || 3000

app.listen(PORT)
