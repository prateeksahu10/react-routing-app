import React,{ Component } from 'react';
import Addinfo from './Addinfo';

class About extends Component{
  state={
          displayinfos:[
            {
              id:1,
              Name:" Prateek Sahu ",
              Birthday:"10-April-1998 ",
              AboutMe:" I am a web developer "
            },
          ]
  }
  Addinfo=(info)=>{
    info.id = Math.floor(Math.random()*10);
    let displayinfos = [...this.state.displayinfos,info];
    this.setState({
      displayinfos
    })
  }
  render(){
    const { displayinfos } = this.state;
    const displaylist = displayinfos.map(arr=>{
      return(
        <div className = " info post card container center" key = { arr.id }>
          <p>Name: { arr.Name }</p>
          <p>Birthday: { arr.Birthday }</p>
          <p>AboutMe: { arr.AboutMe }</p>
        </div>
      )
    })
     return(
      <div>
          { displaylist }
          <div className=" Addinfo post card container center">
            <Addinfo addinfo = { this.Addinfo }/>
          </div>
      </div>
    )
  }
}

export default About;
