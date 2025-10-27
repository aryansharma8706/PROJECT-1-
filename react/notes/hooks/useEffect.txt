import React from 'react';
import { useEffect , useState} from 'react';
function App() {
  const [name , setName] = useState(
    'test'
  )
  const [data, setData] = useState([])
  const [lastName, setLastName] = useState('singh')
  useEffect(()=>{
    console.log('run on everytime')
  })

  useEffect(()=>{
    console.log('run on initial render')
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => setData(json));
  },[])
 
  useEffect(()=>{
    console.log('run on every time when name change')
  },[name,lastName])

    const handleClick  = () => {
      setName('NEW-TEST')
    }
    const handleLastNameClick = () =>{
      setLastName('Last-name')
    }
  return (
    <div>
      <h1>Use effect</h1>
      <h2>{name}</h2>
      <h1>hllo</h1>
      <h1>{lastName}</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleLastNameClick}>Change lastname</button>
    </div>
  );
}

export default App;
