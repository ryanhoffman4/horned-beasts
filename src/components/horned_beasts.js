import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    }
  }

  like = () => {
    this.setState({timesClicked: this.state.timesClicked + 1})
  }

  handleClick = () => {
    this.props.selectBeast(this.props.beast)
  }

  render() {
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Img onClick={this.handleClick} variant="top" src={this.props.url }/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Button variant="primary" onClick={this.like}>Likes: {this.state.timesClicked}</Button>
        </Card.Body>
      </Card> 
    )
  }
}