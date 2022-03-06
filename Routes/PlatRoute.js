const express = require('express');
const router = express.Router();
const PlatService = require("../Services/PlatsService");

 
router.post('/create', PlatService.create);
router.get('/getall', PlatService.getall);


module.exports=router;
