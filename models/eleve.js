const mongoose = require("mongoose");

const eleveShema = new mongoose.Schema({
    nom:{type:String, require: true},
    prenom:{type:String, require: true},
    date_de_naissance:{type:Date, require: true},
    classe:{type:String, require: true},
})

const eleve = mongoose.model('Eleve', eleveSchema);
module.exports=Eleve;
