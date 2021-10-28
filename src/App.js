import React from 'react';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';

import beastArray from './data.json'
import SelectedBeast from './components/SelectedBeast.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  showModal = () => {
    this.setState({show: true})
  }

  hideModal = () => {
    this.setState({show: false})
  }

  render() {
    return(
      <div>
        <Header />
        <Main beastarray={beastArray} showModal={this.showModal}/>
        <Footer />
        <SelectedBeast show={this.state.show} hideModal={this.hideModal}/>
      </div>
    )
  }
}