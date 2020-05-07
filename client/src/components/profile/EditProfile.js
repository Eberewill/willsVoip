import React, { useEffect } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import { withRouter, Link } from "react-router-dom";
import { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { createProfile, getCurrentProfile } from "../../store/actions/profile";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    location: "",
    phonenumber: "",
  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      firstname: loading || !profile.firstname ? "" : profile.firstname,
      lastname: loading || !profile.lastname ? "" : profile.lastname,
      phonenumber: loading || !profile.phonenumber ? "" : profile.phonenumber,
      location: loading || !profile.location ? "" : profile.location,
    });
  }, [loading, getCurrentProfile]);

  //pull out formdata
  const { firstname, lastname, location, phonenumber } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <section className="kindergarten-features" style={{ padding_top: "20px" }}>
      <div className="container">
        <div className="col-sm-12 features-boxes">
          <Message success>
            <Message.Header>Edit your Profile </Message.Header>
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
                  label="Phone Number (+country code)"
                  placeholder="Enter Phone number"
                  name="phonenumber"
                  value={phonenumber}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Checkbox
                label="I agree to the Terms and Conditions"
                required
              />
              <Button type="Update">Submit</Button>
              <Link to="/userprofile">
                <Button secondary type="submit">
                  Return To Profile
                </Button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
