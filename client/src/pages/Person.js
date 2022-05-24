import { Appear, Button, Loading, Paragraph, Words } from 'arwes';
import Clickable from '../components/Clickable';

const Person = (props) => {
  return (
    <Appear id='person' animate show={props.entered}>
      <Paragraph>
        <Words animate>ADD PERSON</Words>
      </Paragraph>
      <Paragraph>Insert the name and the phone number of the person:</Paragraph>
      <form
        id='formPerson'
        onSubmit={props.addNewPerson}
        style={{
          display: 'inline-grid',
          gridTemplateColumns: 'auto auto',
          gridGap: '10px 20px',
        }}
      >
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='First name'
          required
        />
        <label htmlFor='ddd'>DDD:</label>
        <input
          type='text'
          id='ddd'
          name='ddd'
          pattern='[0-9]{2}'
          placeholder='11'
          required
        />
        <label htmlFor='ddd'>Mobile:</label>
        <input
          type='tel'
          id='number'
          name='number'
          pattern='[0-9]{5}-[0-9]{4}'
          placeholder='91234-5678'
          required
        />
        <Clickable>
          <Button
            animate
            show={props.entered}
            type='submit'
            layer='success'
            disabled={props.isPending}
          >
            Add
          </Button>
        </Clickable>
        {props.isPending && <Loading animate small />}
      </form>
    </Appear>
  );
};

export default Person;
