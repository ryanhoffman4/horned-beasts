import React from 'react';


class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    }
  }

  like = () => {
    this.setState({timesClicked: this.state.timesClicked + 1})
  }

  render() {
    return(
      <div>
        <h2>{this.props.title}</h2>
        <h2>Likes: {this.state.timesClicked}</h2>
        <img src={this.props.url} alt='' onClick={this.like}></img>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default HornedBeasts;