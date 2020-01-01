import React, { useState, useEffect } from 'react';
import './App.css';
import Div from './components/Div';
import MyContext from './context';
import Button from './components/Button';


function App() {
  
  const [state, setState] = useState([])
  const [name, setName ] = useState("")
 


useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=>res.json())
  .then(data=>setState(data))
},[])






  const compare = (_arguments)=>{
    return ( a, b ) => {
      if ( a[_arguments] < b[_arguments] ){
        return -1;
      }
      if ( a[_arguments] > b[_arguments] ){
        return 1;
      }
      return 0;
    }
  }
 
 

  const onClick = (_args, _filtername) => {

    if(!_args){
      state.sort(compare(_filtername));
      setName(true)
    }else{
      state.sort(compare(_filtername)).reverse();
      setName(false)
    }

    setState(state);

  }
  

  return (
    <div className="App">
      <MyContext.Provider value={state}>
        <Div />
        <Button click={onClick} name={name} />
        </MyContext.Provider>
        </div>
  );
}

export default App;
