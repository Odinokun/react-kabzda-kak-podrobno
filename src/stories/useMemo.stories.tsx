import React, { useMemo, useState } from 'react';

export default {
  title: 'UseMemo',
};

export const DifficultCounting = () => {
  const [a, setA] = useState<number>(5);
  const [b, setB] = useState<number>(5);
  let resultA = 1;
  let resultB = 1;
  
  resultA = useMemo(() => {
    console.log('resultA');
    let tempResultA = resultA;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 100000000) {
        fake++;
      }
      tempResultA *= i;
    }
    return tempResultA;
  }, [a]);
  
  for (let i = 1; i <= b; i++) {
    resultB *= i;
  }
  
  return (
    <>
      <input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
      <hr />
      <div>
        Result for a: {resultA}
      </div>
      <div>
        Result for b: {resultB}
      </div>
    </>
  );
};

export const HelpsToReactMemo = () => {
  const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret');
    return (
      <ul>
        {props.users.map((u, i) => <li key={i}>{u}</li>)}
      </ul>
    );
  };
  const Users = React.memo(UsersSecret);
  
  console.log('HelpsToReactMemo');
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(['Dimon', 'Valera', 'Artem', 'Katya', 'Igor', 'Bob']);
  
  const newArray = useMemo(() => users.filter(u => u.toLowerCase().indexOf('a') > -1), [users]);
  
  return (
    <>
      <div>
        <button onClick={() => setCounter(counter + 1)}> +</button>
        {counter}
      </div>
      <br />
      <Users users={newArray} />
      {/* wrong variant */}
      {/*<Users users={users.filter(u => u.toLowerCase().indexOf('a') > -1)} />*/}
    </>
  );
};