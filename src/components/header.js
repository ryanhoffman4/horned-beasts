import React from 'react';
import DropMenu from './DropMenu.js';

export default class Header extends React.Component {

  render() {
    return(
      <div>
        <h1>Horned Beasts</h1> 
        <DropMenu filterArray={this.props.filterArray}/>
      </div>
    )
  }
}