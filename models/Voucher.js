const mongoose = require("mongoose");
const voucherSchema = mongoose.Schema({
  code: {
    type: String,
  },
  amount: {
    type: Number,
  },
});

module.exports = new mongoose.model("Voucher", voucherSchema);
