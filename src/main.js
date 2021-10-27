import React from 'react';
import HornedBeasts from './horned_beasts.js';
import beastArray from './data.js'

class Main extends React.Component {
  render() {
    return beastArray.map((beast) => <HornedBeasts title={beast.title} url={beast.image_url} description={beast.description} />);
  }
}

export default Main;