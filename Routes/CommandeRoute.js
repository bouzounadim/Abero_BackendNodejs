const express = require('express');
const router = express.Router();
const Comservice = require("../Services/CommandeService");

 
router.post('/create', Comservice.create);
router.get('/getall', Comservice.getall);


module.exports=router;
