import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import useForm from "./useForm";

const LoginForm = () => {
  const { handleInputs, handleLogIn, loginForm } = useForm();

  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <div>
            <span>Sign in to your account</span>
            <Form onSubmit={handleLogIn}>
              <FormGroup>
                <Label for="LogInEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={handleInputs}
                  id="LogInEmail"
                  value={loginForm.email}
                  placeholder="Enter email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="logInPassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={handleInputs}
                  id="logInPassword"
                  value={loginForm.password}
                  placeholder="Enter password"
                />
              </FormGroup>
              <Button>Sign in</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
