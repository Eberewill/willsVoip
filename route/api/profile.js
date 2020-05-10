const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("config");
const auth = require("../../middleweare/auth");
const { check, validationResult } = require("express-validator");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
//const Post = require('../../models/Post')

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
      check("phonenumber", "Skill is required").not().isEmpty(),
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

router.put("/ballance", [auth], async (req, res) => {
  const { amount, paid_at, status, email } = req.body;
  try {
    //get current userProfile and increment the new amount
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $inc: { ballance: amount } }
    );

    const newTransaction = { amount, status, message, paid_at };
    profile.transaction.unshift(newTransaction);
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
      const profile = await Profile.findOne({ user: req.user.id}) 

      profile.contacts.unshift(newContact)

      await profile.save()

      res.json(profile)
    } catch (err) {
      console.error(err.message)
        res.status(500).send('server Error')
      
    }
  }
);


//@ get api/profile/contact
//@ desc add profile contact
//@ access Private

router.get(
  "/contact/:id",
  [auth],
  async (req, res) => {
    
    try {
      const profile = await Profile.findOne({ user: req.user.id}) 

      

      res.json(profile.contacts)
    } catch (err) {
      console.error(err.message)
        res.status(500).send('server Error')
      
    }
  }
);

// @route Put api/profile/experience
// @desc  add profile experience
// @access Private
/**
router.put('/experience',[ auth, [
    check('title', "Title is required").not().isEmpty(),
    check('company', "Company is required").not().isEmpty(),
    check('from', "from date is required").not().isEmpty(),   
]], 
async (req, res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).send({errors: errors.array()})
    }
    //destructure and pull the request body
    const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    } = req.body;

    const newExp = {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    }

    //add data to the database

    try {
        //get current userProfile
        const profile = await Profile.findOne({ user: req.user.id}) 

        //add the gotten experience to this profile
        
        profile.experience.unshift(newExp)

        //save to ongoDB

        await profile.save();

        //SEND REPONSE

        res.json( profile)

        
    } catch (error) {
        console.error(error.message)
        res.status(500).send('server error');
    }
})


// @route DELETE api/profile/experience/:exp_id
// @desc  delete experience from profile 
// @access Private

router.delete('/experience/:exp_id', auth , async (req, res)=>{

    try {
      const profile =   await Profile.findOne({ user: req.user.id})

      //get remove index from the
const removeIndex = profile.experience.map(item =>
    item.id).indexOf(req.params.exp_id)

       profile.experience.splice(removeIndex, 1)

     await  profile.save();
        res.json(profile)
    } catch (error) {
        console.error(error.message)
    }

})

// @route Put api/profile/education
// @desc  add education for profile
// @access Private



// @route DELETE api/profile/eduction/:edu_id
// @desc  delete education from profile 
// @access Private

router.delete('/education/:edu_id', auth , async (req, res)=>{

    try {
      const profile =   await Profile.findOne({ user: req.user.id})

      //get remove index from the profile education array
const removeIndex = profile.education.map(item =>
    item.id).indexOf(req.params.edu_id)

       profile.education.splice(removeIndex, 1)

     await  profile.save();
        res.json(profile)
    } catch (error) {
        console.error(error.message)
    }

})

// @route GET api/profile/github/:username
// @desc  GetUer repo fro Github 
// @access Public

router.get('/github/:username', (req, res) => {
try {
    const options = {
        uri: `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc&client_id=${config.get('githubClientId')}&client_secret=${config.get('githubSecret')}`
    ,
    method: 'Get',
    headers:{'user-agent': 'node.js'}
}
request(options, (error, response, body)=>{
        if(error) console.error(error)

        //check if the request reponsecode is not 200 Ok
    if(response.statusCode !== 200) {
        res.status(404).json({msg: 'No Github Profile Found with user'})
    }
        //send the body to the res, Then convert the String to Json
        res.json(JSON.parse(body));
    })
    
} catch (err) {
    console.error(err.message) 
    res.status(500).send('server Error')   
}
}) **/

module.exports = router;
