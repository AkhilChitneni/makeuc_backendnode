const express = require('express')

let router = express.Router();

response = require('../models/response')


router.route('/')
.get((req, res) => {
    response.find({},(err, rsps) => {
        res.send(rsps)
    })
})

module.exports = router;