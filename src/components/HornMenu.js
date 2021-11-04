import React from 'react';
import Form from 'react-bootstrap/Form';

export default class HornMenu extends React.Component {

  handleClick = (event) => {
    this.props.renderArray(event.target.value);
  }

  render() {
    return(
      <>
        <h3>Horn Selection: </h3>
        <Form onChange={this.handleClick}>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Any"
                value="0"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="1"
                value="1"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="2"
                value="2"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="3"
                value="3"
                name="group1"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label=">3"
                value="100"
                name="group1"
                type={type}
                id={`inline-${type}->3`}
              />
            </div>
          ))}
        </Form>
      </>
    )
  }
}