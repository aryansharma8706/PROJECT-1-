//NOTE STEP1 IMPORT CREATECONTEXT FN FROM REACT ;
import { createContext  , useState} from "react";

//NOTE STEP2 call the createContext fn and save its result with in a variable name same as user context file and export it
 export const DataContext = createContext()

//NOTE STEP3 Create a PROVIDER COMPONENT where you can define the data which you are going to share across your react application.
export const DataProvider = ({children}) => {
  const [name , setName] = useState('SHARED VIA CONTEXT')
  //NOTE  const sum  = (a,b) => {
  //   return a + b
  // }
  return (
  <DataContext.Provider value={{name,setName,}}>
{children} 
{/* //children is equal to app */}
 </DataContext.Provider>
  )
}
   
      {/* here the value of children itself is app component = app */}
 



//NOTE PROPS DRILLING 
//NOTE CONTEXT FILE 


