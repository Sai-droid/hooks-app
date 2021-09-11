import React from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {useState} from 'react'


function AboutPage() {
    const[age,setAge] = useState(21);
    
    const ageIncrease =()=>{
        setAge(age+1)
    }

    const ageDecrease =()=>{
        setAge(age-1)
    }

    
    return (
        <div>
          <h1>use state hooks</h1>
          
          <button onClick={ageIncrease}>+</button>
          <h2>age:{age}</h2>
          <button onClick={ageDecrease}>-</button>
        </div>
    )
}

export default AboutPage
