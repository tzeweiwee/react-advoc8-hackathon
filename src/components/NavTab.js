import React, { Component } from 'react';

class NavTab extends Component {

  render() {
    return (
      <li><a>{this.props.tabname}</a></li>
    );
  }
}

export default NavTab;
