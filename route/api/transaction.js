const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("config");
const auth = require("../../middleweare/auth");
const { check, validationResult } = require("express-validator");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

var paystackSec =  'sk_test_5a769a944da74a086ebbd5282cada3db3ab26166';


//Verification
router.get('/verify/:reference', (req, res) => {
    try {
        const options = {
            uri: `https://api.paystack.co/transaction/verify/${req.params.reference}')}`
        ,
        method: 'Get',
        //header confusion
        headers: {Authorization  :` Bearer ${[paystackSec]}`} 
    }
    request(options, (error, response, body)=>{
            if(error) console.error(error)
    
            //check if the request reponsecode is not 200 Ok
        if(response.statusCode !== 200) {
            res.status(404).json({msg: 'unknown Error'})
        }
            //send the body to the res, Then convert the String to Json
            //res.json(JSON.parse(body));
            console.log(body)
        })
        
    } catch (err) {
        console.error(err.message) 
        res.status(500).send('server Error')   
    }
    })
    

module.exports = router;
