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
      show: false,
      selectedBeast: {}
    }
  }

  showModal = () => {
    this.setState({show: true})
  }

  hideModal = () => {
    this.setState({show: false})
  }

  selectBeast = (beast) => {
    this.setState({
      selectedBeast: beast
    })
    this.showModal();
  }

  render() {
    return(
      <div>
        <Header />
        <Main beastarray={beastArray} selectBeast = {this.selectBeast}/>
        <Footer />
        <SelectedBeast show={this.state.show} selectedBeast= {this.state.selectedBeast} hideModal={this.hideModal}/>
      </div>
    )
  }
}