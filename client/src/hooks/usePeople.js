import { useCallback, useEffect, useState } from 'react';

import {
  httpGetAllPeople,
  httpAddNewPerson,
  httpUpdatePerson,
  httpDeletePerson,
} from './requests';

function usePeople(onSuccessSound, onAbortSound, onFailureSound) {
  const [people, setPeople] = useState([]);
  const [isPending, setPending] = useState(false);

  const getPeople = useCallback(async () => {
    const fetchedPeople = await httpGetAllPeople();
    setPeople(fetchedPeople);
  }, []);

  useEffect(() => {
    getPeople();
  }, [getPeople]);

  const addNewPerson = useCallback(
    async (e) => {
      e.preventDefault();
      setPending(true);

      const data = new FormData(e.target);
      const name = data.get('name');
      const ddd = data.get('ddd');
      const number = data.get('number');
      const phones = [];
      phones.push({ ddd, number });

      const response = await httpAddNewPerson({
        name,
        phones,
      });

      const success = response.ok;
      if (success) {
        getPeople();
        setTimeout(() => {
          setPending(false);
          onSuccessSound();
        }, 800);
      } else {
        onFailureSound();
      }
    },
    [getPeople, onSuccessSound, onFailureSound]
  );

  const updatePerson = useCallback(
    async (e) => {
      e.preventDefault();

      const data = new FormData(e.target);
      const name = data.get('name');
      const ddd = data.get('ddd');
      const number = data.get('number');
      const phones = [];
      phones.push({ ddd, number });

      const response = await httpUpdatePerson({
        name,
        phones,
      });

      const success = response.ok;
      if (success) {
        getPeople();
        setTimeout(() => {
          onSuccessSound();
        }, 800);
      } else {
        onFailureSound();
      }
    },
    [getPeople, onSuccessSound, onFailureSound]
  );

  const deletePerson = useCallback(
    async (id) => {
      const response = await httpDeletePerson(id);
      const success = response.ok;

      if (success) {
        getPeople();
        onAbortSound();
      } else {
        onFailureSound();
      }
    },
    [getPeople, onAbortSound, onFailureSound]
  );

  return {
    people,
    isPending,
    addNewPerson,
    updatePerson,
    deletePerson,
  };
}

export default usePeople;
