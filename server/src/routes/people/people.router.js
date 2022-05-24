const express = require('express');

const {
  httpGetAllPeople,
  httpGetPerson,
  httpAddNewPerson,
  httpUpdatePerson,
  httpDeletePerson,
} = require('./people.controller');

const peopleRouter = express.Router();

peopleRouter.get('/', httpGetAllPeople);
peopleRouter.get('/:id', httpGetPerson);
peopleRouter.post('/', httpAddNewPerson);
peopleRouter.post('/:id', httpUpdatePerson);
peopleRouter.delete('/:id', httpDeletePerson);

module.exports = peopleRouter;
