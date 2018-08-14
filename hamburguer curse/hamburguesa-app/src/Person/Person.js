import React from 'react';
import classes from './person.css';


const person = props => {
  
  return (
    <div className={classes.person}>
        <p onClick={props.click}> I´m a {props.name}! iam {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;