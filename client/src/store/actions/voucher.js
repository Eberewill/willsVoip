import axios from "axios";
import { setAlert } from "./alert";

import { VOUCHER_RECHARGED, VOUCHER_ERROR } from "../actions/constants";

//rechage user card

export const rechargeVoulcher = (code) => async (dipatch) => {
  try {
    const config = {
      headers: {
        "Content-Types": "application/json",
      },
    };
    const res = axios.post("/api/voucher/recharge", code, config);
  } catch (error) {}
};
