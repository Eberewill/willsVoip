import { VOUCHER_RECHARGED, VOUCHER_ERROR } from "../actions/constants";

const initialSate = {
  voucherAmount: null,
  loadingcard: true,
  errors: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case VOUCHER_RECHARGED:
      return {
        ...state,
        voucherAmount: payload,
        loadingcard: false,
      };
    case VOUCHER_ERROR:
      return {
        ...state,
        voucherAmount: null,
        loadingcard: false,
      };
    default:
      return state;
  }
}
