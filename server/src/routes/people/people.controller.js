const {
  getAllPeople,
  getPersonById,
  addNewPerson,
  updatePerson,
  deletePersonById,
  existsPersonWithId,
} = require('../../models/people.model');

async function httpGetAllPeople(req, res) {
  return res.status(200).json(await getAllPeople());
}

async function httpGetPerson(req, res) {
  const person = await getPersonById(req.params.id);
  return res.status(200).json(person);
}

async function httpAddNewPerson(req, res) {
  const person = req.body;

  if (!person.name || !person.phones) {
    return res.status(400).json({
      error: 'Missing required person property',
    });
  }

  await addNewPerson(person);
  return res.status(201).json(person);
}

async function httpUpdatePerson(req, res) {
  const person = req.body;
  const personId = Number(req.params.id);

  const existsPerson = await existsPersonWithId(personId);
  if (!existsPerson || person.id !== personId) {
    return res.status(404).json({
      error: 'Person not found or property issue',
    });
  }

  if (!person.name || !person.phones) {
    return res.status(400).json({
      error: 'Missing required person property',
    });
  }

  await updatePerson(person);
  return res.status(201).json(person);
}

async function httpDeletePerson(req, res) {
  const personId = Number(req.params.id);

  const existsPerson = await existsPersonWithId(personId);
  if (!existsPerson) {
    return res.status(404).json({
      error: 'Person not found',
    });
  }

  const deleted = await deletePersonById(personId);
  if (!deleted) {
    return res.status(400).json({ error: 'Person not deleted' });
  }

  return res.status(200).json({ ok: 'true' });
}

module.exports = {
  httpGetAllPeople,
  httpGetPerson,
  httpAddNewPerson,
  httpUpdatePerson,
  httpDeletePerson,
};
