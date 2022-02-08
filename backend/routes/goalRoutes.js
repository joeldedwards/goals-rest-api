const express = require('express')
const router = express.Router()

module.exports = router

app.get('/api/goals', (req, res) => {
    res.status(200).json({
        message: 'Get Goals'
    })
})