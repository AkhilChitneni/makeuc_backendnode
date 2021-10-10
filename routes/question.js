const express = require('express')

let router = express.Router();

question = require('../models/question')

router.route('/:id')
.get((req, res) => {
    console.log(req.params.id)
    question.find({survey: req.params.id},(err, qts) => {
        res.send(qts)
    })
})

module.exports = router;