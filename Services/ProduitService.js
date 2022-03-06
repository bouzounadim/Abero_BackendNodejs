var Produit = require('../Models/Produit');

exports.create = async (req, res) => {
    const produit = new Produit(req.body);
    const prExist = await Produit.exists({ nom_produit: req.body.nom_produit });
    if(prExist){
        res.status(500).send('Produit already exists ');
    } else{
        try {
            await produit.save();
            res.status(201).send(produit);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    
}

exports.getall = async (req, res) => {
    try {
        const produit = await Produit.find({});
        res.status(200).send(produit);
    } catch (error) {
        res.status(500).send(error);
    }
    
}

exports.delete = async (req, res) => {
    try {
        const res = await Produit.findByIdAndRemove(req.params.id);
        res.status(200).send(res);
    } catch (error) {
        res.status(500).send(error);
    }
    
}


exports.getbyid = async (req, res) => {
    try {
        const produit = await Produit.findById({ _id:req.params.id});
        res.status(200).send(produit);
    } catch (error) {
        res.status(500).send(error);
    }
    
}

exports.update = async (req, res) => {
    try {
        const update = req.body
        const produit = await Produit.findOneAndUpdate({ _id:req.params.id},update);
        res.status(200).send(produit);
    } catch (error) {
        res.status(500).send(error);
    }
    
}