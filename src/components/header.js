import React from 'react';
import HornMenu from './HornMenu.js';

export default class Header extends React.Component {

  render() {
    return(
      <div>
        <h1>Horned Beasts</h1> 
        <HornMenu renderArray={this.props.renderArray}/>
      </div>
    )
  }
}