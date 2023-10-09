import React, { useState } from 'react';

export default {
  title: 'ReactMemo',
};

const UsersList = (props: { users: string[] }) => {
  console.log('Component Users was rendered');
  return (
    <ul>
      {props.users.map((u, i) => <li key={i}>{u}</li>)}
    </ul>
  );
};

const Users = React.memo(UsersList);

export const ReactMemo = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(['Dimon', 'Valera', 'Artem', 'Katya']);
  
  const addUser = () => setUsers([...users, 'Olcha ' + users.length]);
  
  return (
    <>
      <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
      </div>
      
      <br />
      
      <button onClick={addUser}>add user</button>
      
      {/* with React.memo*/}
      <Users users={users} />
      
      {/* without React.memo*/}
      <UsersList users={users} />
    </>
  );
};