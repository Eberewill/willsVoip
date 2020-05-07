import React from "react";
import { Button, Form, Message } from "semantic-ui-react";
import { withRouter, Link } from "react-router-dom";
import { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { createProfile } from "../../store/actions/profile";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    location: '',
    phonenumber: ''
    
  });

  //pull out formdata
  const { firstname, lastname,  location, phonenumber } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name ]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <section className="kindergarten-features" style={{ padding_top: "20px" }}>
      <div className="container">
        <div className="col-sm-12 features-boxes">
          <Message success>
            <Message.Header>Create Profile for</Message.Header>
          </Message>
          <div className="row">
            <Form onSubmit={(e) => onSubmit(e)}>
              <Form.Group unstackable widths={2}>
                <Form.Input
                  label="First name"
                  placeholder="First name"
                  value={firstname}
                  name="firstname"
                  onChange={(e) => onChange(e)}
                />
                <Form.Input
                  label="Last name"
                  placeholder="Last name"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group widths={2}>
                <Form.Input
                  label="Location"
                  placeholder="Location"
                  name="location"
                  value={location}
                  onChange={(e) => onChange(e)}
                />
                <Form.Input
                label="Phone Number"
                  placeholder="Enter Phone number"
                  name='phonenumber'
                  value={phonenumber}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Checkbox label="I agree to the Terms and Conditions" />
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
