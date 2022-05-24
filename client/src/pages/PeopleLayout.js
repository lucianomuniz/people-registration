import { useState, useEffect } from 'react';
import { Appear, Link, Paragraph, Words } from 'arwes';

import Clickable from '../components/Clickable';
import SearchBox from './SearchBox';
import PeopleList from './PeopleList';

const PeopleLayout = (props) => {
  const { entered, classes, people, deletePerson } = props;

  const [isFiltered, setIsFiltered] = useState(true);
  const [searchNameField, setSearchNameField] = useState('');
  const [searchIdField, setSearchIdField] = useState('');
  const [filteredPeople, setFilteredPeople] = useState(people);

  useEffect(() => {
    const newFilteredPeople = people.filter((person) => {
      return person.name.toLocaleLowerCase().includes(searchNameField);
    });

    setFilteredPeople(newFilteredPeople);
    setIsFiltered(true);
  }, [people, searchNameField]);

  useEffect(() => {
    const newFilteredPeople = people.filter((person) => {
      return person.id === searchIdField;
    });

    setFilteredPeople(newFilteredPeople);
    setIsFiltered(true);
  }, [people, searchIdField]);

  const onSearchNameChange = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    setSearchNameField(searchString);
  };

  const onSearchIdChange = (e) => {
    const searchNumber = Number(e.target.value);
    setSearchIdField(searchNumber);
  };

  const filterListByPhoneLength = () => {
    if (!isFiltered) {
      const filteredPeople = people.filter((person) => {
        return (
          person.phones?.map((phone) => {
            return phone.number;
          }).length >= 2
        );
      });

      setFilteredPeople(filteredPeople);
      setIsFiltered(true);
    } else {
      setFilteredPeople(people);
      setIsFiltered(false);
    }
  };

  return (
    <Appear id='peopleLayout' animate show={entered}>
      <Paragraph>
        <Words animate>LIST OF PEOPLE</Words>
      </Paragraph>
      <Words>Search for person</Words>
      <Paragraph>
        <SearchBox
          entered={entered}
          name='id'
          label='Id'
          placeholder='person ID'
          onChangeHandler={onSearchIdChange}
        />
        <SearchBox
          entered={entered}
          name='name'
          label='Name'
          placeholder='person name'
          onChangeHandler={onSearchNameChange}
        />
      </Paragraph>
      <Paragraph>
        <Clickable style={{ fontSize: '1rem', color: 'red' }}>
          <Link className={classes.link} onClick={filterListByPhoneLength}>
            {!isFiltered
              ? 'Click to show only people with 2+ phone numbers'
              : 'Show all people'}
          </Link>
        </Clickable>
      </Paragraph>
      <PeopleList
        entered={entered}
        classes={classes}
        people={filteredPeople}
        deletePerson={deletePerson}
      />
    </Appear>
  );
};

export default PeopleLayout;
