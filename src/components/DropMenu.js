import React from 'react';
import Form from 'react-bootstrap/Form';

export default class DropMenu extends React.Component {

  handleClick = (event) => {
    this.props.filterArray(event.target.value);
  }

  render() {
    return(
      <div>
          <Form.Select onClick={this.handleClick}>
            <option>Choose your horn number:</option>
            <option value="0">Any</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
      </div>
    )
  }
}