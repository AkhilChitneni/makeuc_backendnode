const express = require('express');

const routes = require('./routes/catalog')
const http = require('http');

const survey = require('./routes/survey')
const question = require('./routes/question')
const response = require('./routes/response')
const { Server } = require("socket.io");



const app = express();
const server = http.createServer(app);
const io = new Server(server);
var mongoose = require('mongoose');


var mongoDB = 'mongodb+srv://user:user@cluster0.zsf3w.mongodb.net/test';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Database connection successful")
    const app = express()
    app.use(express.json()) // new
    app.use("/survey/", survey)
    app.use("/question/", question)
    app.use("/response/", response)

    app.get("/", (req, res) => {
        res.send("hi this is server")
    })

    io.on('connection', (socket) => {
        console.log('a user connected');
      });



    
      app.listen(3000, () => console.log('Example app is listening on port 3000.'));
})
;





