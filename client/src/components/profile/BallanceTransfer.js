import React, { useEffect, Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, getProfile, updateTransfer } from "../../store/actions/profile";
import Spinner from "../layout/Spinner";
import { Grid, Button, Divider,Input, Icon,Step, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

const BallanceTransfer = ({
  getCurrentProfile,getProfile,updateTransfer,
  auth: { user },
  profile: { profile, loading, tprofile},
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const  [profileNumber, setProfileNumber] = useState('')
  const [amount, setAmmount] = useState('')

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div>
        <section
          className="kindergarten-features"
          style={{ padding_top: "20px" }} >
          <div className="container">
            <div className="row">
          
              <Grid columns={2} relaxed="very" stackable>
                  <Grid.Column>

              <Step.Group vertical>
    <Step completed>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Enter Reciepient Code</Step.Title>
        <Step.Description>Enter the Account Personal Code (APC) of the reciever</Step.Description>
      </Step.Content>
    </Step>

    <Step completed>
      <Icon name='payment' />
      <Step.Content>
        <Step.Title>Enter Amount</Step.Title>
        <Step.Description>Enter the Amount you will like to be transfered from your ballance</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Confirm Transfer</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
  </Grid.Column>

  <Grid.Column>
      
   <Form onSubmit={e => {
            e.preventDefault();
            getProfile(profileNumber)
            }}>
    <Form.Field>
      <label>Enter Reciepient Personal Code </label>
      <input placeholder='number'
      name='profileNumber'
      value={profileNumber}
      onChange={e => setProfileNumber(e.target.value)}
      required
       />
    </Form.Field>
    <Button type='submit'>Fetch User</Button>
  </Form>
 <h3>{tprofile? tprofile.firstname : <>........</>}</h3>


       
 <Form onSubmit={e => {
            e.preventDefault();
            updateTransfer(amount, profileNumber)
          
            setAmmount('') }}>
    <Form.Field>
      <label>Enter Amount To Transfer {tprofile._id} </label>
      <input placeholder='Amount' type='number'
      name="amount"
      value={amount}
      onChange={e => setAmmount(e.target.value)} />
    </Form.Field>
    <Button type='submit'>Comfirm Transfer</Button>
  </Form>

  </Grid.Column>
               
                
  </Grid>      


            </div> <div> 
              <br/>
              <br/>
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
BallanceTransfer.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  tprofile: PropTypes.object.isRequired,
  updateTransfer:PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  tprofile: state.tprofile
});

export default connect(mapStateToProps, { getCurrentProfile, getProfile,updateTransfer })(BallanceTransfer);
