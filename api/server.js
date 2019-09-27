const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const authenticate = require('../components/authenticate-middleware.js');
const teacherRouter = require('../components/teachers/teacher-router.js');
const scoreRouter = require('../components/scores/score-router.js');

const session = require('express-session');

const server = express();


server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.send("Connected to api.")
});


server.use('/api/teachers', teacherRouter);
server.use('/api/scores', scoreRouter);

module.exports = server;
