const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    username: { type: String, required:true}, 
    email:  { type: String, required:true},
    password:   { type: String, required:true},
    CreatedAt: { type: Date, default:Date.now()},
    UpdateAt: { type: Date, default:Date.now()},

});
const User = mongoose.model("User", UserSchema);
module.exports = User;