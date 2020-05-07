import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../store/actions/profile";
import { Card } from "semantic-ui-react";
import Spinner from "../layout/Spinner";
import { Segment, Header } from "semantic-ui-react";
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
                                   
                                        <Segment circular style={{ width: 175, height: 175 }}>
                                            <Header as="h2">
                                                ballance
                      <Header.Subheader>₦{profile.ballance}</Header.Subheader>
                                            </Header>
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
