const mongoose = require("mongoose");

const EleveSchema = new mongoose.Schema({
    nom: {
    type: String,
    required: true
    },
    prenom: {
        type: String,
        required: true
    },
    date_de_naissance: {
        type: Date,
        required: true
    },
    classe: {
        type: String,
        required: true
    }},
    
    { 
        timestamps : true
    }

    );

const Eleves = mongoose.model('Eleves', EleveSchema);

module.exports = Eleves;
