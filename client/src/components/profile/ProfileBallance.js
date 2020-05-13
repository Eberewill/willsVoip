import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../store/actions/profile";
import { Button, Divider,Message, Header, Grid, Segment } from 'semantic-ui-react'

import Spinner from "../layout/Spinner";

import { Link } from "react-router-dom";

const ProfileBallance = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

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
              <div className="col-sm-12 features-boxes">
                <div className="row">
                    
                <div> <Button icon='home'><Link to="/dashboard">Go Back</Link></Button></div>
                
                  <Segment placeholder>
                    <Grid columns={2} relaxed="very" stackable>
                      <Grid.Column>
                          


                      <Message positive>
                  <Message.Header>
                    {user && user.name} This is your Account ballance, which allows you to make use of our App,
                    
                  </Message.Header>
                  </Message>
                      </Grid.Column>

                      <Grid.Column verticalAlign="middle">
                        <Segment circular style={{ width: 175, height: 175 }}>
                          <Header as="h2">
                            ballance
                            <Header.Subheader>
                              ₦{profile.ballance}
                            </Header.Subheader>
                          </Header>
                
                        </Segment>
                        <div> <Button positive ><Link to="/buycredit">Fund Your Ballance</Link></Button></div>
                      </Grid.Column>
                    </Grid>

                    <Divider vertical></Divider>
                  </Segment>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};
ProfileBallance.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(ProfileBallance);
