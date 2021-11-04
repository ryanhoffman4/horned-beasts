import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';





export default class SelectedBeasts extends React.Component{

 handleClose = () => {
   this.props.hideModal();
 }

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.handleClose}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.selectedBeast.image_url}/>
            <Card.Body>
              <Card.Title>{this.props.selectedBeast.title}</Card.Title>
              <Card.Text>{this.props.selectedBeast.description}</Card.Text>
            </Card.Body>
          </Card> 
        </Modal>
      </>
    )
  }
}