const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.URL_MONGOSE, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports=mongoose;