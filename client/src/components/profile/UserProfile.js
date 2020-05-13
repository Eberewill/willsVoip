import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../store/actions/profile";
import { Card } from "semantic-ui-react";
import Spinner from "../layout/Spinner";
import { Tab, Button, Form, Label, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";

const UserProfile = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const panes = [
    {
      menuItem: "Basic Info",
      render: () => (
        <Tab.Pane>
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="First name"
                placeholder={profile.firstname}
                readOnly
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Last name"
                placeholder={profile.lastname}
                readOnly
              />
            </Form.Group>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Phone Number"
                  placeholder={profile.phonenumber}
                  readOnly
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Location"
                  placeholder={profile.location}
                  readOnly
                />
              </Form.Group>
            </Form>
          </Form>

          <Button color="teal">
            <Link to="/editprofile">EDIT PROFILE</Link>
          </Button>
        </Tab.Pane>
      ),
    },
    { menuItem: "Settings", render: () => <Tab.Pane>Profile Settings</Tab.Pane> },
    {
      menuItem: "User Personal Code",
      render: () => (
        <Tab.Pane>
          <Label.Group tag>
            <Label as="a">{user._id}</Label>
          </Label.Group>
          <Message
            floating
            content="This Personal Code is used for credit transfer to another user on this platform"
          />
        </Tab.Pane>
      ),
    },
  ];

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div>
        <section
          className="kindergarten-features"
          style={{ padding_top: "20px" }}
        >
          <div className="container">
            <div className="row">
              <div>
                <img src={user.avatar} class="ui avatar image" />
                <span>{user.name}</span>
              </div>
              <h3 class="ui dividing header"></h3>
              <div className="col-sm-12 features-boxes">
                <div className="row">
                  <Tab
                    menu={{ fluid: true, vertical: true, tabular: true }}
                    panes={panes}
                  />
                </div>
              </div>
            </div>
            <br /> <br />
            <div>
              {" "}
              <Button>
                <Link to="/dashboard">Back</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};
UserProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(UserProfile);
