import React, { useEffect, Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { getCurrentProfile, verify, updateTransaction } from "../../store/actions/profile";
import { Card, Form } from "semantic-ui-react";
import Spinner from "../layout/Spinner";
import { Message, Button, Input, Label } from "semantic-ui-react";
import  cardpay from '../../components/images/card-pay.png'
import { setAlert} from '../../store/actions/alert'

const BuyCredit = ({setAlert,verify,updateTransaction,
  getCurrentProfile,
  auth: { user, email },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  

  function payWithPaystack(amount){
    var handler = window.PaystackPop.setup({
      key: "pk_test_844eaa22b8ac7b8a090cb56488d47e311bb564c2",
      email: `${user.email}`,
      amount: amount*100,
      currency: "NGN",
  
      metadata: {
         custom_fields: [
            {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348012345678"
            }
         ]
      },
      callback: function(response){
        //verifyPayment()
        verify(response.reference)
        .then(usefulData  => alert(`Your Transaction of ${usefulData.amount} was ${usefulData.message}`) )
        return <Redirect to='/ballance' />
        ; 
          
      },
      onClose: function(){
          alert('window closed');
      }
    });
    handler.openIframe();
  }
  //Handle amount imput
  const [formData, setFormData] = useState({
    amount: ''
});



const {amount} = formData;

const onChange = e => 
setFormData({...formData, [e.target.name]: e.target.value});
 

  const onSubmit =  async e => {
    e.preventDefault();
    
        payWithPaystack(amount)
    }



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
            <Message success>
              <Message.Header>
                Credit into your Account ballance directly from your Bank Account
              </Message.Header>
            </Message>
<Form onSubmit={e => onSubmit(e)}>
            <Input labelPosition="right" type="text" placeholder="Amount">
              <Label basic>₦</Label>
              <input
              name='amount'
              value={amount}
              onChange={e => onChange(e)}
              />
              <Label>.00</Label>
            </Input>{'    '}<br/>
            <img src={cardpay} style={{width : '200px', height: "40px" }}/>
             <h4 style={{color: 'blue'}}>Pay With Paystack</h4>
<Button positive onClick={payWithPaystack} size='massive'>Pay Now</Button>
</Form>
            <div>
            
          </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};
BuyCredit.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  setAlert: PropTypes.func.isRequired,
  verify: PropTypes.func.isRequired,
  updateTransaction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  transaction: state.transaction,
  loading: state.loading
});

export default connect(mapStateToProps, { getCurrentProfile, setAlert,updateTransaction, verify})(BuyCredit);
