// import React from "react";
import {useState} from "react";
// import classes from "./App.module.scss";
import style from "./App.module.scss";
import "./App.module.scss";

export const App = ()=>{
  const [count, setCount] = useState(0);
  const increment = () =>{setCount(prev=>prev+1)}

  return (
    <div>
      Hello world fdgdfg df 
      <h1>PLATFORM={__PLATFORM__}</h1>
      <h2>Test hotsfdsdfsdf</h2>
      <h1 className="value">{count}</h1>
      <button className="button" onClick={increment}>increment</button>
    </div>
  )
}
