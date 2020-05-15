const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("config");
const auth = require("../../middleweare/auth");
const { check, validationResult } = require("express-validator");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route GET api/profile/me
// @desc  Getcurrent users profile
// @access private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      return res.status(500).json({ msg: "there is no profile for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
  }
});

// @route Post api/profile
// @desc  Crete Uer Profile
// @access private
router.post(
  "/",
  [
    auth,
    [
      check("firstname", "Status is required").not().isEmpty(),
      check("lastname", "Status is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //destructure the request body params
    const { firstname, lastname, location, phonenumber } = req.body;

    //build profile body
    const profileFields = {};
    profileFields.user = req.user.id;
    if (firstname) profileFields.firstname = firstname;
    if (lastname) profileFields.lastname = lastname;
    if (location) profileFields.location = location;
    if (phonenumber) profileFields.phonenumber = phonenumber;

    //build social object

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        //update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id }, //find varible
          { $set: profileFields }, //updte with profileFields object.
          { new: true }
        );

        return res.json(profile);
      }
      //create profile
      profile = new Profile(profileFields);
      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(400).send("server Errror");
    }
  }
);
// @route GET api/profile
// @desc  Get all Profile
// @access Public

router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server Error");
  }
});

// @route GET api/profile/:user_id
// @desc  Get User profile by ID
// @access Public

router.get("/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "avatar"]);
    if (!profile) return res.status(400).json({ msg: "Profile not found" });
    res.json(profile);
  } catch (err) {
    console.error(err.message);

    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("server Error");
  }
});

// @route DELETE api/profile
// @desc  deleeProfile, User & Posts
// @access Private

router.delete("/", auth, async (req, res) => {
  //@todos - remove users posts
  try {
    // remove user posts
    await Post.deleteMany({ user: req.user });

    //remove profile
    await Profile.findOneAndRemove({ user: req.user.id });

    //remove User
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User Deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server Error l");
  }
});

//ballance and Transaction Update rout

router.put("/ballance", [auth], async (req, res) => {
  const { amount, paid_at, status, id, message } = req.body;
  try {
    //get current userProfile and increment the new amount
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $inc: { ballance: amount } }
    );

    const newTransaction = { amount, status, paid_at, message, id };
    profile.transactions.unshift(newTransaction);
    await profile.save();

    //SEND REPONSE
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).send("server error");
  }
});

//Transfers
router.put("/transfer", [auth], async (req, res) => {
  const { amount, t_user } = req.body;
  try {
    //get current userProfile and increment the new amount
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $inc: { ballance: -amount } }
    );
    //get the reciepient Account and increament his ballance
    let toProfile = await Profile.findOneAndUpdate(
      { user: t_user },
      { $inc: { ballance: +amount } }
    );
    const newTransfer = { amount, t_user: req.user.id, type: "Credited" };
    toProfile.transfers.unshift(newTransfer);

    const newDebitTransfer = { amount, t_user, type: "Debited" };
    profile.transfers.unshift(newDebitTransfer);

    await toProfile.save();
    await profile.save();

    //SEND REPONSE
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).send("server error");
  }
});

//@ put api/profile/contact
//@ desc add profile contact
//@ access Private

router.put(
  "/contact",
  [
    auth,
    [
      check("name", "Name is required").not().isEmpty(),
      check("phone", "Phone is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    const { name, phone } = req.body;
    const newContact = { name, phone };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.contacts.unshift(newContact);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server Error");
    }
  }
);

//@ get api/profile/contact
//@ desc add profile contact
//@ access Private

router.get(
  "/contact",
  [
    auth,
    [
      check("name", "Name is required").not().isEmpty(),
      check("phone", "Phone is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    const { name, phone } = req.body;
    const newContact = { name, phone };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.contacts.unshift(newContact);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server Error");
    }
  }
);

module.exports = router;
