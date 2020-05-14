import {
  VOUCHER_RECHARGED,
  VOUCHER_ERROR,
  LOADING,
} from "../actions/constants";

const initialState = {
  voucher: {},
  errors: {},
  load: false,
  amount: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case VOUCHER_RECHARGED:
      return {
        ...state,
        load: false,
        voucherAmount: payload,
      };
    case LOADING:
      return {
        load: payload,
      };
    case VOUCHER_ERROR:
      return {
        ...state,
        voucherAmount: null,
      };
    default:
      return state;
  }
}
