//import react library components
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import constructed components
import HornedBeasts from './horned_beasts.js';
import beastArray from '../data.json'

export default class Main extends React.Component {
  render() {
    return (
    <>
      <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
          {beastArray.map((beast) => (
            <HornedBeasts title={beast.title} url={beast.image_url} description={beast.description} handleShow={this.props.showModal} />
          ))}
        </Row>
      </Container>
    </>
    )
  }
}
