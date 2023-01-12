import { useState } from "react";
import "./App.css";
import img1 from "../src/assets/images/backgroundForm.jpg";
import Container from "react-bootstrap/Container";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Form>
        <Form.Group className="signIn">
          <img className="formBackground" src={img1} alt="background" />
          <Form.Label>Enter your email</Form.Label>
          <Form.Control
            className="formInput"
            type="email"
            placeholder="B.samy@gmail.com"
          />
          <Form.Label>Enter your password</Form.Label>
          <Form.Control
            className="formInput"
            type="password"
            placeholder="1A#@Samy"
          />
          <Form.Text className="text-muted">
            the password has to be at least 8 char
          </Form.Text>
          <Button type="submit">submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
