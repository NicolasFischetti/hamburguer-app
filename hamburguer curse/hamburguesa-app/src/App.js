import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      {id:'1', name: 'Jorge', age: 28},
      {id:'2', name: 'Manu', age: 38},
      {id:'3', name: "Hola", age:26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 38},
        {name: "Hola", age:27}
      ]
    })
    // DoNT USE IT this.state.persons[0].name = "Jorge";
  }

  deletePersonHnadler = (personIndex) => {
    //const persons = this.state.persons.splice();
    const persons =[...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }


  nameChangeHnadler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState ( {persons : persons} )
    
    }

    /*this.setState({
      persons: [
        {name: 'Nico', age: 28},
        {name: event.target.value, age: 38},
        {name: "Hola", age:27}
      ]
    })
  }*/

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => {this.deletePersonHnadler(index)}}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHnadler(event, person.id)}
            />
          })}
          </div>
      );
      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }


    return (
      <div className={classes.App}>
          <h1 className="App-title">Welcome to React</h1>
          <p className={classes.bold}>It is working</p>
          <button 
          className= {btnClass}
          onClick={this.togglePersonsHandler}> Switch Name </button>
          {persons}
      </div>
    );
  }
}

export default App;
