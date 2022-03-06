const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const CommandeSchema = new mongoose.Schema({
    prix_commande:{ type: Number, required:true},
    produits:  [{produit:{ type: Schema.Types.ObjectId, ref: 'Produit' },qte:{ type: Number}}],
    plats:  [{id:{ type: Schema.Types.ObjectId, ref: 'Plat' },qte:{ type: Number}}],
    user:  { type: Schema.Types.ObjectId, ref: 'User', required: true },
    Adresse_1 : { type: String, required:true} ,
    Adresse_2 : { type: String} ,
    CreatedAt: { type: Date, default:Date.now()},
    UpdateAt: { type: Date, default:Date.now()},
});
const Commande = mongoose.model("Commande", CommandeSchema);
module.exports = Commande;