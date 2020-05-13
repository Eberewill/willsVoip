const express = require("express");
const router = express.Router();
const auth = require("../../middleweare/auth");
const { check, validationResult } = require("express-validator");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Voucher = require("../../models/Voucher");

//add voucher by admin
router.post(
  "/vaddbyAdmin",
  [auth],
  [
    check("code", "You must provide a valid Code").not().isEmpty(),
    check("amount", "You must provide a valid Amount").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { code, amount } = req.body;
    const newVoucher = { code, amount };

    try {
      const voucher = new Voucher(newVoucher);
      await voucher.save();
      res.json(voucher);
    } catch (err) {
      console.error(err.message);
      res.status(400).send("server Errror");
    }
  }
);

// @route GET api/voucher
//@desc  Get all voucher
// @access Private

router.get("/vouchers", auth, async (req, res) => {
  try {
    const vouchers = await Voucher.find();

    res.json(vouchers);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("server error");
  }
});
// @route GET api/voucher/recharge with{amount body}
//@desc  Get voucher by code
// @access Private

router.post("/recharge", auth, async (req, res) => {
  try {
    //get voucher
    const voucher = await Voucher.findOne({ code: req.body.code });
    if (!voucher) {
      return res.status(404).json({ msg: "Voucher Recharge Code  not found " });
    }

    //get current profile and increament the Ballance with voucher ammount
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $inc: { ballance: voucher.amount } }
    );
    await profile.save();

    res.json(voucher.amount);
  } catch (err) {
    console.error(err.message);

    if (err.kind == "ObjectId") {
      return res.status(404).json({ msg: "Voucher not found" });
    }
    res.status(400).send("server erro");
  }
});

module.exports = router;
