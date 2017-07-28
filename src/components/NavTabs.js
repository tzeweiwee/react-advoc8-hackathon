import React, { Component } from 'react';
import NavTab from './NavTab';

class NavTabs extends Component {
  constructor() {
      super();
      this.state = {
          tabs: [ 
            "Student: Ellen",
            "Citizen: Kim",
            "Volunteer: Andy",
            "Doctor: Hafiz"
          ],
          tabsList: ""
      }
  }

  componentWillMount(){
    let tabs = this.state.tabs.map(el => {
      return(
          <NavTab key={el} tabname={el}/>
      
        );
    });

    this.setState({
      tabsList: tabs
    });

  }

  render() {


    return (
      <div className="NavTabs">
          <div className="tabs is-centered">
            <ul>
                {this.state.tabsList}
            </ul>
          </div>
      </div>
    );
  }
}

export default NavTabs;
