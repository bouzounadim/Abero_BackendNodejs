const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const ProduitSchema = new mongoose.Schema({
    nom_produit: { type: String, required:true}, 
    marque: { type: String, required:true}, 
    description:  { type: String, required:true},
    prix_kg:   { type: Number, required:true},
    poid_min:{ type: Number, required:true},
    image:   { type: String, required:true},
    qte: { type: Number,}, 
    disponible:   { type: Boolean, default:true},
    categorie:  [{ type: Schema.Types.ObjectId, ref: 'Categorie', required: true }],
    CreatedAt: { type: Date, default:Date.now()},
    UpdateAt: { type: Date, default:Date.now()},
});
const Produit = mongoose.model("Produit", ProduitSchema);
module.exports = Produit;