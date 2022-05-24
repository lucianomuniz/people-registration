const API_URL = 'v1';

// Load person, sort by ID, and return as JSON.
async function httpGetAllPeople() {
  const response = await fetch(`${API_URL}/people`);
  const fetchedPeople = await response.json();
  return fetchedPeople.sort((a, b) => {
    return a.id - b.id;
  });
}

// Add a given person data.
async function httpAddNewPerson(person) {
  try {
    return await fetch(`${API_URL}/people`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person),
    });
  } catch (err) {
    return {
      ok: false,
    };
  }
}

// Update a given person data.
async function httpUpdatePerson(person) {
  try {
    return await fetch(`${API_URL}/people/${person.id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person),
    });
  } catch (err) {
    console.log(err);
    return {
      ok: false,
    };
  }
}

// Delete person with given ID.
async function httpDeletePerson(id) {
  try {
    return await fetch(`${API_URL}/people/${id}`, {
      method: 'delete',
    });
  } catch (err) {
    console.log(err);
    return {
      ok: false,
    };
  }
}

export {
  httpGetAllPeople,
  httpAddNewPerson,
  httpUpdatePerson,
  httpDeletePerson,
};
