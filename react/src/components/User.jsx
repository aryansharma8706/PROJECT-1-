import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
function User({ username }) {
  const { name, setname } = useContext(DataContext);
  console.log(name);
  return (
    <div className="border p-6 border-blue-500 m-3 rounded-sm">
      <h1>User component</h1>
      <h1>Show user name : {username}</h1>
      <h1>{name}</h1>
    </div>
  );
}

export default User;

//TODO create a context file and create a function to fetch data from jsonplaceholder api then shared this function via context api and then call the fn in a component to fetch the data .
