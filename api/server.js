const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../components/authenticate-middleware.js');
const teacherRouter = require('../components/teachers/teacher-router.js');
const scoreRouter = require('../components/scores/score-router.js');

const session = require('express-session');

const server = express();

server.use(
  session({
    name: 'notsession',
    secret: 'nobody tosses a dwarf!',
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      secure: false,
    },
    httpOnly: true,
    resave: false,
    saveUninitialized: false,
  })
);

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/teachers', teacherRouter);
server.use('/api/scores', scoreRouter);

module.exports = server;
