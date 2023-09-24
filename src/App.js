import './App.css';
import { useState, useEffect } from 'react';

// const Person=(props)=>{
//   return(
//     <>
//     <h1>FirstName: {props.name}</h1>
//     <h2>LastName:{props.lname} </h2>
//     <h3>Age: {props.age}</h3>
//     </>
//   )
// }

const App=() =>{
   const [counter,Setcounter] = useState(0)
   useEffect(()=>{
    alert('You change the counter',counter)
   },[counter])
  return (
    <div className="App">
      {/* <Person name='Tiger' lname='khan' age={23} />
      <Person name="asdk" lname="das" age={24}/> */}
      <button onClick={()=>Setcounter((prevCount)=>prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>Setcounter((prevCount)=>prevCount+1)}>+</button>      
    </div>
  );
}

export default App;
