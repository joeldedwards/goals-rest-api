const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 6969

const app = express()

app.listen(port, () => console.log(`Server Started on port ${port}`))