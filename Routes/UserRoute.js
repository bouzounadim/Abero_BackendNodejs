const express = require('express');
const router = express.Router();
const Userservice = require("../Services/UserService");

 
router.post('/create', Userservice.create);
router.get('/getall', Userservice.getall);


module.exports=router;
