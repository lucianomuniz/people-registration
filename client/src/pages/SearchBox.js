import { Appear } from 'arwes';

const SearchBox = ({ entered, name, label, placeholder, onChangeHandler }) => (
  <Appear id='search' animate show={entered}>
    <label htmlFor='name' style={{ margin: '0.5rem', fontSize: '1.3rem' }}>
      {label}:
    </label>
    <input
      type='text'
      id={name}
      name={name}
      placeholder={placeholder}
      onChange={onChangeHandler}
      style={{ height: '1.8rem' }}
    />
  </Appear>
);

export default SearchBox;
