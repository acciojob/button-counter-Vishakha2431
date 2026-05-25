
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[counter,setCounter]=useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button Clicked {counter} times</p>
        <button onClick={()=>
          setCounter(count=>count+1)
        }>Click me</button>
       
    </div>
  )
}

export default App
