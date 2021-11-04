//import react library components
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import constructed components
import HornedBeasts from './horned_beasts.js';


export default class Main extends React.Component {
  
  render() {
    return (
      <>
        <Container>
          <Row xs={1} sm={2} md={3} lg={4}>
            {this.props.renderedArray.map((beast) => (
              <HornedBeasts 
              beast = {beast}
              title={beast.title} 
              url={beast.image_url} 
              description={beast.description} 
              selectBeast={this.props.selectBeast} />
            ))}
          </Row>
        </Container>
      </>
    )
  }
}