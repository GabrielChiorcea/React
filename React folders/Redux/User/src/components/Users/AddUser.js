import { useState, useRef } from 'react';
import ErrorModal from '../UI/ErorrModal';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
  const username = useRef();
  const age = useRef();

  // const [username, setUserName] = useState('');
  // const [age, setAge] = useState('');

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age',
      });
      return;
    }

    props.onAddUser(username, age);

    username.current.value = '';
    age.current.value = '';
  };

  // const userNameChangeHandler = (event) => {
  //   setUserName(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setAge(event.target.value);
  // };

  const errorHandler = () => {
    setError();
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      ,
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">username</label>
          <input
            id="username"
            type="text"
            // value={username}
            // onChange={userNameChangeHandler}
            ref={username}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            // value={age}
            // onChange={ageChangeHandler}
            ref={age}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
