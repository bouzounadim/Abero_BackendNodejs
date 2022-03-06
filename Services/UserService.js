var User = require('../Models/User');

exports.create = async (req, res) => {
    const user = new User(req.body);
    const userExists = await User.exists({ email: req.body.email });
    if(userExists){
        res.status(500).send('user already exists ');
    } else{
        try {
            await user.save();
            res.status(201).send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    
}


exports.getall = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
    
}
