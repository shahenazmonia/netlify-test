import React, {Component} from 'react';
import axios from 'axios';
import './header.css';
import data from './data.json'
class Header extends Component {
  constructor() {
   super();
   this.state = {
     userList: []
   };
  }

  render() {
    console.log(data);
    if(data){
      const {name,age} = data;
      return(
     <div className="row container">
       {data.name}
       {data.age}
     </div>
      )
    }


  }
}
export default Header;
