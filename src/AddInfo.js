/*
  We need to add the info to our list
  What our component should be, class or UI.
  If we think about it, we would need to store what user types locally.
  We are going to store that as a state in the component so we will need a class based Component.
*/

import React, { Component } from 'react';
import './AddInfo.css';

class AddInfo extends Component {
  // onChange we need to update the state of the App when a user submits.
  // For that we need a state to store the user input. we need 3 props that are there.
  // So we need to write a function to sync up our state with the inputs.
  // Do you think we need to write seperate functions for each input i.e name, age, birthMonth
  // We might tend to think that way, but we can write a single function.

  state= {
      name: null,
      age: null,
      birthMonth: null
  }

  handleChange= (e) => {
    this.setState({
      /*
        We are capturing the id of the target because we have given the id to the input fields.
        The id is same as the state we have so this helps to capture the id onCHange of any input field
        and we get the corresponding state.
         Example:
              When user types in Name Input box ---- e.target.id = name
              When user types in Age Input box ---- e.target.id = age
              When user types in birthMonth Input box ---- e.target.id = birthMonth

        We are accessing the states in []. This is because if we want to access the name property in this.state
         we write:
                  this.state.name which is equivalent to ['name'].

        The following way of accessing state helps us to dynamically update state and we are in sync with what user inputs
      */
      [e.target.id]: e.target.value
    }
    )
  }

  handleSubmit= (e) => {
    // We are writing this function because we want to add the new displayInfo to the existing App.
    e.preventDefault();

    /*
      On Submit we have to add the data to the displayInfos array in the App Component
      so that we can have the Display component recieve this data and it displays it.

    */
    console.log('Inside AddInfo Component', this.state);
    /*
      Since we cannot access the state of the App component in this class we can't update the displayInfos from here.
      We need to find a way to access those state(App component displayInfos) here
      then send back the data to update in the App Component state.

      For that we first create a function in App component which recieves an argument.
      We created a function like below in App component:
          let addInfo = (info) => {}
      Then we pass the function as a prop to this form component.
      Since the addInfo function recieves the argument (info) we pass the this.state as we are dynamically changing the state on input.
      This will give access to the state of AddInfo component in the App component.
    */
    this.props.addInfo(this.state);   // We are accessing the function as a prop we passed from the parent component.
  }
  render(){
    return(
      <div className='AddInfo'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name' > Name </label>
          <input type='text' id='name' onChange={this.handleChange} /> <br />
          <label htmlFor='age'> Age </label>
          <input type='text' id='age' onChange={this.handleChange} /> <br />
          <label htmlFor='birthMonth'> Birth Month </label>
          <input type='text' id='birthMonth' onChange={this.handleChange}/> <br />
          <button> Submit </button>
        </form>
      </div>
    )
  }
}

export default AddInfo;
