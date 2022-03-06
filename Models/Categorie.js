const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const CategorieSchema = new mongoose.Schema({
    nom_categorie:{ type: String, required:true},
    image:{ type: String},
    CreatedAt: { type: Date, default:Date.now()},
    UpdateAt: { type: Date, default:Date.now()},
});
const Categorie = mongoose.model("Categorie", CategorieSchema);
module.exports = Categorie;