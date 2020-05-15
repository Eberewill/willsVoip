import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import voucher from "./voucher";

export default combineReducers({
  alert,
  auth,
  profile,
  voucher,
});
