const express = require('express');

const peopleRouter = require('./people/people.router');

const api = express.Router();

api.use('/people', peopleRouter);

module.exports = api;
