const express = require('express')

const Survey = require('../models/survery')

const Question = require('../models/question')

let router = express.Router();


router.route('/')
.get((req, res) => {
    Survey.find({},(err, surveys) => {
        res.send(surveys)
    })
})
.post((req, res) => {
    console.log("enter the dragon")

    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }


      const survey = new Survey({
        name: req.body.name,
        description: req.body.description,
        uniqueNumber: 5
      });
    
      // Save survey in the database
      survey
        .save(survey)
        .then(data => {
            console.log(data["_id"])
            console.log(req.body.questions)
            req.body.questions.forEach(element => {
                
                let q = new Question({
                    question: element.question,
                    type: element.type,
                    options: element.options,
                    survey: survey._id
                })
                q.save(q).then(data=>{(console.log(data))})

              
         
            });

          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        })
})


module.exports = router;