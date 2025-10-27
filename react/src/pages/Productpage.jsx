import React from 'react';
import { Link } from 'react-router-dom';

function Productpage() {
  return (
    <div className="flex gap-10 justify-center">
      <Link to="/products/1" className="text-2xl underline text-blue-700">
        Mobile
      </Link>
      <Link to="/products/2" className="text-2xl underline text-blue-700">
        AC
      </Link>
      <Link to="/products/3" className="text-2xl underline text-blue-700">
        Television
      </Link>
    </div>
  );
}

export default Productpage;
