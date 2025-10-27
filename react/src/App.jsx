// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { increment } from './redux/slices/CounterSlice';
// import { pending, success } from './redux/slices/TodoSlice';
// import HoverRating from './components/HoverRating';
// function App() {
//   const { count } = useSelector((state) => state.count);
//   const { loading, todos } = useSelector((state) => state.todos);
//   const dispatch = useDispatch();

//   const handleIncrement = () => {
//     dispatch(increment());
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         dispatch(pending());
//         const response = await fetch(
//           'https://jsonplaceholder.typicode.com/todos'
//         );
//         const data = await response.json();
//         dispatch(success(data));
//       } catch (error) {}
//     };
//     fetchData();
//   }, []);
//   return (
//     <div className="font-bold text-3xl flex h-screen items-center justify-center flex-col">
//       <h1>{count}</h1>
//       {/* //replace this with count state variable */}
//       <button
//         onClick={handleIncrement}
//         className="px-10 py-4 bg-blue-300 text-white font-bold"
//       >
//         Increment
//       </button>
//       {loading && <div className="text-3xl">Loading....</div>}

//       {todos && !loading && <div>{JSON.stringify(todos)}</div>}
//       <HoverRating/>
//     </div>
//   );
// }

// export default App;


import React from 'react'

function App() {
  return (
    <div>
      
    </div>
  )
}

export default App
