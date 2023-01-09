import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random() }];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList user={userList} />
    </>
  );
}

export default App;
