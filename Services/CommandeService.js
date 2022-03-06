var Commande = require('../Models/Commande');

exports.create = async (req, res) => {
    const commande = new Commande(req.body);
        try {
            await commande.save();
            res.status(201).send(commande);
        } catch (error) {
            res.status(500).send(error);
        }
    
}
 

exports.getall = async (req, res) => {
    try {
        const commandes = await Commande.find({}).
        populate('produit.id');
    res.send(commandes)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
    
}
