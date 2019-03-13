import React from 'react';

/*
  This Display component doesn't have a state of it own.
  This is a using the data coming down from the App Component
  So we need to convert this into a UI component
  As this doesn't have a state of it's own.
  We will conver this into functional component because this is primarily concerned with UI
    i.e it's just output the data

  const StatelessDisplay = () => {}
  --> we will not render() anything in this component here and
  --> therefore we can remove the render() method and just return the JSX
  --> We will also remove the Component from import because this not a class anymore.

  Now let's render-- show error because we have displayInfos passed down to this component
  but we can't access it in functional component.
  For this we will add props property (props) => {}
  We will also not need the 'this' here because now we are recieving props that are being passed

*/
// class StatelessDisplay extends Component{
  // render(){
  const StatelessDisplay = (props) => {
    const { displayInfos,deleteInfo } = props; // this is similar to const displayInfos = this.props.displayInfos

    const displayList = displayInfos.map( info => {
      // Sometimes we just want to render some part of the component and we can dothat.
      // if( info.age > 20) then render
      // Using Ternary Operator: condition ? (if true return this) : (if false return this)
      return (
        <div className='display-info' key={info.id}>
          <h5>Information of : { info.name }</h5>
          <div> Name: { info.name } </div>
          <div> Age: { info.age } </div>
          <div> Birth-month: { info.birthMonth } </div>
          <button onClick={()=>{deleteInfo(info.id)} }>Delete</button>
          
        </div>
      )
    });

    return(
      <div className='InfoList'>
        { displayList }
      </div>
    )
  }

export default StatelessDisplay;
