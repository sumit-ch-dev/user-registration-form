import { Component, useState } from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      validFullName: false,
      userName: "",
      validUserName: false,
      email: "",
      phone: "",
      password: "",
      url: "",
      formValid: false
    };
  }
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };

  validateField(fieldName, value) {

  }

  render() {
    return (
      <Form style={{ margin: "0 5rem" }} onSubmit={this.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Full Name: </Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleInputChange}
              placeholder="Enter your full name"
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>User Name: </Form.Label>
            <Form.Control
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleInputChange}
              placeholder="type your user name here...."
            ></Form.Control>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="type your email here...."
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Phone Number: </Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
              placeholder="type your phone number here...."
            ></Form.Control>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Password: </Form.Label>
            <InputGroup>
              <Form.Control
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                placeholder="type your password"
                aria-describedby="basic-addon2"
              />
              <Button id="button-addon2">show</Button>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} className="mb-3">
            <Form.Label>Facebook URL Verification: </Form.Label>
            <Form.Control
              type="url"
              name="url"
              value={this.state.url}
              onChange={this.handleInputChange}
              placeholder="type your URL here...."
            ></Form.Control>
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
export default RegistrationForm;
