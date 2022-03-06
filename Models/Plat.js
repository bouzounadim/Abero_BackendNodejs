const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const Plat_aberoSchema = new mongoose.Schema({
    nom: { type: String, required:true}, 
    description:  { type: String, required:true},
    prix:{ type: Number, required:true},
    poids:{ type: Number, required:true},
    produits:  [{ type: Schema.Types.ObjectId, ref: 'Produit', required: true }],
    nb_per:   { type: Number, default:4},
    qte_plats:   { type: Number},
    images: [{ type: String, required:false}],
    CreatedAt: { type: Date, default:Date.now()},
    UpdateAt: { type: Date, default:Date.now()},
});
module.exports =mongoose.models.Plat || mongoose.model('Plat', Plat_aberoSchema);