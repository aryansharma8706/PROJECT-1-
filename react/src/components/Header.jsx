import React from 'react';

function Header({ username }) {
  return (
    <div className="border-4 p-6 border-blue-500 m-3 rounded-sm">
      <h1>Header component</h1>
      <h1>Show user name : {username}</h1>
    </div>
  );
}

export default Header;
