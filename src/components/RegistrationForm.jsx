import { Component } from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      URL: "",
    };
    this.handleInpurChange = this.handleInpurChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInpurChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    
    this.setState({
      [name] : value
    })
  };
  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <Form style={{ margin: "0 5rem" }} onSubmit={this.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Full Name: </Form.Label>
            <Form.Control
              type="text"
              name="fullname"
              value={this.state.value}
              onChange={this.handleInpurChange}
              placeholder="type your full name...."
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>User Name: </Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={this.state.value}
              onChange={this.handleInpurChange}
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
              value={this.state.value}
              onChange={this.handleInpurChange}
              placeholder="type your email here...."
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Phone Number: </Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={this.state.value}
              onChange={this.handleInpurChange}
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
                value={this.state.value}
                onChange={this.handleInpurChange}
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
              name="URL"
              value={this.state.value}
              onChange={this.handleInpurChange}
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
