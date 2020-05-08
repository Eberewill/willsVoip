const express = require("express");
const router = express.Router();
const request = require("request");
//const config = require("config");
const auth = require("../../middleweare/auth");
const { check, validationResult } = require("express-validator");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const axios = require("axios");

var paystackSec = "sk_test_5a769a944da74a086ebbd5282cada3db3ab26166";

//verification with Axios

router.get("/verify/:ref", async (req, res) => { 
 
const uri  = (`https://api.paystack.co/transaction/verify/${req.params.ref}')}`)
      
const config = {
            headers : { Authorization: ` Bearer ${[paystackSec]}` }
        }
    axios.get(uri, config)
    .then((response) => {
        res.json(JSON.parse(response));
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
        res.status(500).send("server Error");
    });  
});











//Verification
/** 
router.get("/verify/:reference", async (req, res) => {
  try {
    const options = {
      uri: `https://api.paystack.co/transaction/verify/${req.params.reference}')}`,
      method: "Get",
      //header confusion
      headers: { Authorization: ` Bearer ${[paystackSec]}` },
    };
    await request(options, (error, response, body) => {
      if (error) console.error(error);

      //check if the request reponsecode is not 200 Ok

      //send the body to the res, Then convert the String to Json
      //res.json(JSON.parse(body));
      console.log(body);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server Error");
  }
});*/

module.exports = router;
