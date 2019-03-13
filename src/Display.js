// We will have to import the react and components props
import React, { Component } from 'react';

class Display extends Component{
  render(){
    console.log(this.props);
    // const { name, age, birthMonth } = this.props;  // this destructing concept

    /*
      displayInfos is an array and we want to cycle through that array to display it into the DOM.
    */
    const { displayInfos } = this.props; // this is similar to const displayInfos = this.props.displayInfos

    /*
      We are going to use JS method map.
      What does map do --> It takes and array and map each element into a new array.
          map expects a return value always.
      This is what we want to do here:
            --> We want to map displayInfos into a new array.
            --> This new array will have the JSX of each Display field.
            --> We will return this new array as this is has JSX element, one for each info
      We are saving the new array in displayList.
      Now we need to access name, age and birthMonth we would need to reference {info.name} and so on.
      Because each element of array is saved in info.
      So now we can output this new list displayList in our DOM.
    */
    const displayList = displayInfos.map( info => {

      // Each info that is returned here should have unique key which react can update if that particular state is changed.
      // we give it a key
      return (
        <div className='display-info' key={ info.id}>
          <h5>Information of : { info.name }</h5>
          <div> Name: { info.name } </div>
          <div> Age: { info.age } </div>
          <div> Birth-month: { info.birthMonth } </div>

        </div>
      )
    });


    /*
      Here we are outputting the list. And React and JSX would know that we want to
      sequentially display each info element into the DOM. And { displayList } is going to do that for us.

      Now once we have rendered it, we check that the console shows a warning.
      Saying -- 'each array item or iterator should have an unique id'
        --- This is because if we update the age of one of the person it would re-render it on update.
        --- So with the id it would know which specific element to update.
      We do this by adding a key(has to be unique) to the surrounding div above so that each info has a unique id and
      it can manipulate the DOM on the update of that particular info.
       Example: If we delete a info from the state so our DOM could effeciently delete that id.
       We add <div className='info' key={ info.id }> to the div.
    */
    return(
      <div className='InfoList'>
        { displayList }
      </div>
    )
  }
}

export default Display;

// <div> name: { name } </div>
// <div> age: { age } </div>
// <div> birthMonth: { birthMonth } </div>


// This is a using the data coming down from the App Component
//so we need toconvert this into a UI component
// As this doesn't have a state of it's own.
// We will also not need the 'this' here because now we are recieving props that are bieng passed
