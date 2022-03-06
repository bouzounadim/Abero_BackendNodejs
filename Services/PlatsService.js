var Plats = require('../Models/Plat');
var Produit = require('../Models/Produit');
exports.create = async (req, res) => {
    const plato = new Plats(req.body);
    console.log(plato);
        try {
            await plato.save();
            res.status(201).send(plato);
        } catch (error) {
            res.status(500).send(error);
        }
    
}

exports.getall = async (req, res) => {
    try {
        const plato = await Plats.find({}).
        populate('produits');
        res.status(200).send(plato);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
    
}
