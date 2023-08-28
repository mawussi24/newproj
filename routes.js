const express = require("express");
const router = express.Router();
const Eleves = require('./models/eleve');

router.post('/addEleve', function(req, res) {

        const eleve = req.body;

        console.log(eleve);
    
        let newEleve = new Eleves({
            nom: eleve.nom,
            prenom: eleve.prenom, 
            date_de_naissance: eleve.date_de_naissance,
            classe: eleve.classe
        });
    
        newEleve.save()
            .then(result => {
                res.status(201).json({
                    success: true,
                    message: 'Eleve inscrit!',
                    data: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    success: false,
                    message: 'Une erreur s\'est produite!',
                    error: err
                });
            });
});

router.


module.exports = router;