const express = require('express')

let router = express.Router();



router.route('/cats')
.get((req, res) => {
res.send("hi this is cats")
})

module.exports = router;