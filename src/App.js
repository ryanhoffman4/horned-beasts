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
      filteredArray: beastArray,
      horn_number: 0
    }
  }

  filterArray = (horn_number) => {
    let dummy_array = [];
    dummy_array = beastArray.filter((beast) => beast.horns === horn_number);
    console.log(dummy_array);
    this.setState({filteredArray: dummy_array});
    console.log(this.state.filteredArray);

    // if (horn_number === 0) {
    //   this.setState({filteredArray: 5})
    // } else if (horn_number === 1) {
    //   this.setState({filteredArray: beastArray.filter((beast) => beast.horns == 1)})
    // } else if (horn_number === 2) {
    //   this.setState({filteredArray: beastArray.filter((beast) => beast.horns == 2)})
    // } else if (horn_number === 3 ) {
    //   this.setState({filteredArray: beastArray.filter((beast) => beast.horns == 3)})
    // }

    // console.log(this.state.filteredArray);
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
        <Header filterArray={this.filterArray} />
        <Main filteredArray={this.state.filteredArray} beastArray={beastArray} selectBeast = {this.selectBeast}/>
        <Footer />
        <SelectedBeast show={this.state.show} selectedBeast= {this.state.selectedBeast} hideModal={this.hideModal}/>
      </div>
    )
  }
}