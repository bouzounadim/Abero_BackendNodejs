const express = require('express');
const router = express.Router();
const ProduitsService = require("../Services/ProduitService");

 
router.post('/create', ProduitsService.create);
router.get('/getall', ProduitsService.getall);
router.get('/getbyid/:id', ProduitsService.getbyid);
router.delete('/delete/:id', ProduitsService.delete);
router.put('/update/:id', ProduitsService.update);
module.exports=router;
