import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../store/actions/profile";
import { Card } from "semantic-ui-react";
import Spinner from "../layout/Spinner";
import { Message, Button, Divider, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Dashboard = ({
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
            {profile !== null ? (
              <> </>
            ) : (
              <>
                <Message negative>
                  <Message.Header>
                    {user && user.name}! Kindly Update Your profile to ontinue
                    using the App
                  </Message.Header>
                  <Button positive>
                    <Link to="/createprofile">Update</Link>
                  </Button>
                </Message>
              </>
            )}
            <div className="row">
              <div className="col-sm-12 features-boxes">
                <div className="row">
                  <Card.Group itemsPerRow={4}>
                    <Card>
                      <div className="col-md-2 ">
                        <Link to="/friendinvite">
                          <img src="images/invite.png" alt="" />
                        </Link>
                      </div>
                    </Card>
                    <Card>
                      <div className="col-md-2 ">
                        <Link to="/userprofile">
                          <img src="images/settings.png" alt="" />
                        </Link>
                      </div>
                    </Card>
                    <Card>
                      <div className="col-md-2 ">
                        <Link to="/ballance">
                          {" "}
                          <img src="images/my-balance.png" alt="" />
                        </Link>
                      </div>
                    </Card>

                    <Card>
                      <div className="col-md-2 ">
                        <Link to="/buycredit">
                          <img src="images/buy-credit.png" alt="" />
                        </Link>
                      </div>
                    </Card>
                  </Card.Group>
                  <Card.Group itemsPerRow={4}>
                    <Card>
                      <div className="col-md-2 ">
                        <Link to="/voucher">
                          <img src="images/voucher-recharge.png" alt="" />
                        </Link>
                      </div>
                    </Card>
                    <Card>
                      <div className="col-md-2 ">
                        <a href="mobile-topup.html">
                          <img src="images/mobile-topup.png" alt="" />
                        </a>
                      </div>{" "}
                    </Card>
                    <Card>
                      <div className="row">
                        <div className="col-md-2 ">
                          <Link to="/transfer">
                            <img src="images/balance-transfer.png" alt="" />
                          </Link>
                        </div>
                      </div>
                    </Card>
                    <Card>
                      <div className="col-md-2 ">
                        <Link to="/transferhistory">
                          <img src="images/transfer-history.png" alt="" />
                        </Link>
                      </div>
                    </Card>
                  </Card.Group>

                  <Card.Group itemsPerRow={4}>
                    <Card>
                      <div className="col-md-2 ">
                        <a href="contact-backup.html">
                          <img src="images/contact-backup.png" alt="" />
                        </a>
                      </div>
                    </Card>
                    <Card>
                      <div className="col-md-2 ">
                        <a href="#">
                          <img src="images/tracking.png" alt="" />
                        </a>
                      </div>
                    </Card>
                    <Card>
                      <div className="col-md-2 ">
                        <a href="#">
                          <img src="images/did.png" alt="" />
                        </a>
                      </div>
                    </Card>
                    <Card>
                      <div className="col-md-2 ">
                        <Link to="/userprofile">
                          <img src="images/update-profile.png" alt="" />
                        </Link>
                      </div>
                    </Card>
                  </Card.Group>

                  <Card.Group itemsPerRow={4}>
                    <Card>
                      <div className="col-md-2 ">
                        <a href="#">
                          <img src="images/qr.png" alt="" />
                        </a>
                      </div>
                    </Card>

                    <Card>
                      <div className="col-md-2 ">
                        <a href="#">
                          <img src="images/ticketing.png" alt="" />
                        </a>
                      </div>
                    </Card>
                    <Card>
                      <div className="col-md-2 ">
                        <a href="#">
                          <img src="images/courier.png" alt="" />
                        </a>
                      </div>
                    </Card>
                    <Card>
                      <div className="col-md-2 ">
                        <a href="#">
                          <img src="images/education.png" alt="" />
                        </a>
                      </div>
                    </Card>
                  </Card.Group>
                  <Card.Group itemsPerRow={4}>
                    <Card>
                      <div className="col-md-2 ">
                        <a href="#">
                          <img src="images/medical.png" alt="" />
                        </a>
                      </div>
                    </Card>
                    <Card>
                      <div className="col-md-2 ">
                        <a href="law.html">
                          <img src="images/law.png" alt="" />
                        </a>
                      </div>
                    </Card>
                    <Card>
                      <div className="col-md-2 ">
                        <a href="#">
                          <img src="images/farming.png" alt="" />
                        </a>
                      </div>
                    </Card>
                    <Card>
                      <div className="col-md-2 ">
                        <a href="city-guide.html">
                          <img src="images/city-guide.png" alt="" />
                        </a>
                      </div>
                    </Card>
                  </Card.Group>

                  <Card.Group itemsPerRow={4}>
                    <Card>
                      <div className="col-md-2 ">
                        <a href="#">
                          <img src="images/why-wills.png" alt="" />
                        </a>
                      </div>
                    </Card>
                  </Card.Group>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
