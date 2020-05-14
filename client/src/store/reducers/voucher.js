import {
  VOUCHER_RECHARGED,
  VOUCHER_ERROR,
  LOADING,
} from "../actions/constants";

const initialState = {
  voucher: null,
  errors: {},
  load: false,
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case VOUCHER_RECHARGED:
      return {
        ...state,
        load: false,
        voucher: payload,
      };
    case LOADING:
      return {
        load: payload,
      };
    case VOUCHER_ERROR:
      return {
        ...state,
        voucher: null,
      };
    default:
      return state;
  }
}
