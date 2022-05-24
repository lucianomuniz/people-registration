const peopleDB = require('./people.mongo');
const peopleData = require('../../data/people_data');

const DEFAULT_ID = 100;

function loadPeopleData() {
  if (peopleData && peopleData.length > 0) {
    peopleData.map((person) => savePerson(person));
    console.log(`${peopleData.length} people loaded in database!`);
  } else {
    console.log('No person to to load');
  }
}

async function getLatestPersonId() {
  const latestPerson = await peopleDB.findOne().sort('-id');

  if (!latestPerson) {
    return DEFAULT_ID;
  }

  return latestPerson.id;
}

async function getAllPeople(skip, limit) {
  return await peopleDB
    .find({}, { _id: 0, __v: 0 })
    .sort({ id: 1 })
    .skip(skip)
    .limit(limit);
}

async function getPersonById(personId) {
  return await peopleDB.find({ id: personId }, { _id: 0, __v: 0 });
}

async function existsPersonWithId(personId) {
  return await findPerson({ id: personId });
}

async function findPerson(filter) {
  return await peopleDB.findOne(filter);
}

async function addNewPerson(person) {
  const newId = (await getLatestPersonId()) + 1;

  const newPerson = Object.assign(person, {
    id: newId,
  });

  await savePerson(newPerson);
}

async function savePerson(person) {
  await peopleDB.findOneAndUpdate({ id: person.id }, person, {
    upsert: true,
  });
}

async function updatePerson(person) {
  await savePerson(person);
}

async function deletePersonById(personId) {
  return await peopleDB.deleteOne({ id: personId });
}

module.exports = {
  loadPeopleData,
  existsPersonWithId,
  savePerson,
  getAllPeople,
  getPersonById,
  addNewPerson,
  updatePerson,
  deletePersonById,
};
