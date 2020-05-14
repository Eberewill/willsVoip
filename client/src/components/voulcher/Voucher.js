import React, { useEffect, Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { recharge } from "../../store/actions/voucher";
import Spinner from "../layout/Spinner";
import ld from "./load.gif";
import {
  Grid,
  Button,
  Message,
  Input,
  Icon,
  Header,
  Form,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const Voucher = ({
  recharge,
  auth: { user },
  voucher: { voucher, amount, load },
}) => {
  const [code, setCode] = useState();
  return load ? (
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
              <Grid columns={2} relaxed="very" stackable>
                <Grid.Column>
                  <Segment>
                    <Message success>
                      <Message.Header>
                        <Icon positive name="info" />
                        Voucher is another option to fund your Account, Enter
                        your Voucher code and press Enter. wait for some
                        seconds. Your Code will be Validated and credited
                        directly to your Ballance
                      </Message.Header>
                    </Message>
                  </Segment>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      recharge(code);
                    }}
                  >
                    <Input
                      icon="tags"
                      iconPosition="left"
                      label={{ tag: true, content: "Enter Code" }}
                      labelPosition="right"
                      placeholder="Voucher Code"
                      name="code"
                      value={code}
                      isRequired
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <Button positive icon labelPosition="right" value="summit">
                      Recharge
                      <Icon name="right arrow" />
                    </Button>
                  </Form>
                </Grid.Column>

                <Grid.Column>
                  {voucher ? (
                    <>
                      <Segment>
                        <Message success>
                          <Message.Header>
                            <Icon name="sync" />
                            Congratulations!! Your Account Have been
                            successfully credited with ₦{voucher.amount} You can
                            go Navigate to your ballance to comfirm purchase
                            <br />
                            <hr></hr>
                            <button className="ui icon left labeled button">
                              <i
                                aria-hidden="true"
                                className="left arrow icon"
                              ></i>
                              <Link to="/ballance">Check Ballance</Link>
                            </button>
                          </Message.Header>
                        </Message>
                      </Segment>
                    </>
                  ) : (
                    <></>
                  )}
                </Grid.Column>
              </Grid>
            </div>{" "}
            <div>
              <br />
              <br />
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
Voucher.propTypes = {
  auth: PropTypes.object.isRequired,
  recharge: PropTypes.func.isRequired,
  voucher: PropTypes.object.isRequired,
  load: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  voucher: state.voucher,
  amount: state.voucher.amount,
});

export default connect(mapStateToProps, {
  recharge,
})(Voucher);
