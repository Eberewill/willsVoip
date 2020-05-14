import axios from "axios";
import { setAlert } from "./alert";

import {
  VOUCHER_RECHARGED,
  VOUCHER_ERROR,
  LOADING,
} from "../actions/constants";

//rechage user card

export const recharge = (code) => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: true,
  });

  try {
    const res = await axios.get(`/api/voucher/recharge/${code}`);

    dispatch({
      type: VOUCHER_RECHARGED,
      payload: res.data,
    });

    dispatch(setAlert("Voucher Was Successfully Recharged", "success"));
  } catch (err) {
    dispatch({
      type: LOADING,
      payload: false,
    });
    dispatch({
      type: VOUCHER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    dispatch(setAlert("Voucher was not recharged", "danger"));
  }
};
