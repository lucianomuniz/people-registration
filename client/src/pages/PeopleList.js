import { useMemo } from 'react';
import { withStyles, Appear, Link, Table } from 'arwes';

import Clickable from '../components/Clickable';

const styles = () => ({
  link: {
    color: 'red',
    textDecoration: 'none',
  },
});

const PeopleList = (props) => {
  const { entered, classes, people, deletePerson } = props;

  const tableBody = useMemo(() => {
    return people?.map((person) => {
      return (
        <tr key={String(person.id)}>
          <td>
            <Clickable style={{ color: 'red' }}>
              <Link
                className={classes.link}
                onClick={() => deletePerson(person.id)}
              >
                ✖
              </Link>
            </Clickable>
          </td>
          <td>{person.id}</td>
          <td>{person.name}</td>
          <td>
            {person.phones
              ?.map((phone) => {
                return `(${phone.ddd}) ${phone.number}`;
              })
              .join(', ')}
          </td>
        </tr>
      );
    });
  }, [people, deletePerson]);

  return (
    <Appear id='peopleList' animate show={entered}>
      <Table animate show={entered}>
        <table style={{ tableLayout: 'fixed' }}>
          <thead>
            <tr>
              <th style={{ width: '3rem' }}></th>
              <th style={{ width: '3rem' }}>No.</th>
              <th style={{ width: '11rem' }}>Name</th>
              <th>Phone Numbers</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      </Table>
    </Appear>
  );
};

export default withStyles(styles)(PeopleList);
