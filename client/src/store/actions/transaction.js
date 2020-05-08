import axios from "axios";
import { setAlert } from "./alert";

import {
  TRANSATION_INITIALIZE,
  TRANSACTION_SUCCESS,
  TRANSACTION_FAIL,
} from "../actions/constants";



    //if transaction is successeccful
    //add transaction amount to the user.profile.account
    //const res = await axios.put('/api/profile/education', FormData, config)

    //dispatch({
    // type: UPDATE_PROFILE,
    // payload: res.data
    // });
    //dispatch(setAlert('Education Added', 'success'));
    //  history.push('/dashboard');
    //locate user with emailAddress, get user profile,
    //add to profile.account
    //add to profile.transactions
export const verifyPayment = (reference, history) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Types": "application/json",
    },
  };
  const uri = ` https://api.paystack.co/transaction/verify/${reference}`;
  try {
    const res = await axios.get(uri, config);
    const {
      status,
      message,
      data: {
        amount,
        paid_at,
        customer: { email },
      },
    } = res.data;

    dispatch({
      type: TRANSACTION_SUCCESS,
      payload: {
        status,
        message,

        amount,
        paid_at,
        email,
      },
    });
    dispatch(setAlert("Payment successfull", "success"));
    history.push("/dashboard");
  } catch (err) {
    const errors = err.message;
    if (errors) {
      console.error(errors);
      // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
    dispatch({
      type: TRANSACTION_FAIL,
      payload: { msg: err.response.status, status: err.response.status },
    });
  }
};
