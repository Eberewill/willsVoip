import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../store/actions/alert";
import { register } from "../../store/actions/auth";
import PropTypes from "prop-types";

import logo from "./logo.png";
import logo2 from "./logo2.jpg";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //handle the form Submit
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password does not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  //redirect if Register success in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src={logo} /> Log-in to your account
          </Header>
          <Form size="large" onSubmit={(e) => onSubmit(e)}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                type="email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => onChange(e)}
              />

              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                name="password2"
                placeholder="Password"
                type="password"
                value={password2}
                onChange={(e) => onChange(e)}
              />

              <Button color="teal" fluid size="large">
                Register
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an Account? <Link to="/login">Sign In</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
