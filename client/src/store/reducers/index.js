import { combineReducers } from "redux";
import customerReducer from "./customer";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import voucher from "./voucher";

export default combineReducers({
  customers: customerReducer,
  alert,
  auth,
  profile,
  voucher,
});
