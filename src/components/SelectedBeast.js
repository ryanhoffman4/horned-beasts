import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';





export default class SelectedBeasts extends React.Component{

 // const [show, setShow] = useState(false);

 handleClose = () => {
   this.props.hideModal();
 }

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header>
          </Modal.Header>
          <Modal.Body> You have selected a beast!
          {/* <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.url }/>
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
            </Card.Body>
          </Card> */}
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>

        </Modal>
      </>
    )
  }
}