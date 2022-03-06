var  express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
var mongoose=require('./db/Connect');
const PORT= process.env.PORT;
var UserRoute=require('./Routes/UserRoute');
var produitRoute =require('./Routes/ProduiRoute')
var PlatRoute=require('./Routes/PlatRoute');
var commandeRoute =require('./Routes/CommandeRoute')
//Using midllwares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'))
//Connexion Mongodb
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("Connected successfully");
});

//Routes: 
app.use('/api/user',UserRoute);
app.use('/api/produit',produitRoute);
app.use('/api/commande',commandeRoute);
app.use('/api/plat',PlatRoute);

//Lancement de serveur
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))