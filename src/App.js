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
      selectedBeast: {},
      renderedArray: beastArray,
    }
  }

  renderArray = (horn_value) => {
    let number = Number(horn_value)
    if (number === 7) {
    this.setState({renderedArray: beastArray})
    } else {
    this.setState({renderedArray: beastArray.filter((beast) => beast.horns === number)})
    }
    this.render();
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
        <Header renderArray={this.renderArray} />
        <Main renderedArray={this.state.renderedArray} selectBeast = {this.selectBeast}/>
        <Footer />
        <SelectedBeast show={this.state.show} selectedBeast= {this.state.selectedBeast} hideModal={this.hideModal}/>
      </div>
    )
  }
}