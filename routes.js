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

router.get('/getEleves', function(req, res) { 
    Eleves.find() 
        .then(result => {
            res.status(200).json({
                success: true,
                message: 'Eleves récupérés', 
                data: result
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: 'Il y a eu une erreur',
                error: err
            });
        });
});

router.patch('/updEleve/:id', function(req, res){ 
    const eleve_id = req.params.id;
    const updatedData = req.body;

    Eleves.findByIdAndUpdate(eleve_id, updatedData, { new: true })
        .then(updatedEleve =>{
            if (!updatedEleve){
                return res.status(404).json({
                    success: false,
                    message: 'Eleve introuvable'
                });
            }
            res.status(200).json({
                success: true,
                message: 'Eleve mis à jour avec succes ',
                data: updatedEleve
            });
        })
        .catch(err =>{
            res.status(500).json({
                success: false,
                message: 'Il y a eu une erreur',
                error: err
            });
        });
});

router.delete('/delEleve/:id', function(req, res){ 
    const eleve_id = req.params.id;

    Eleves.findByIdAndDelete(eleve_id) 
        .then(deletedData =>{
            if (!deletedData){
                return res.status(404).json({
                    success: false,
                    message: 'Eleve introuvable'
                });
            }
            res.status(200).json({
                success: true,
                message: 'Eleve supprimé ',
                data: deletedData
            });
        })
        .catch(err =>{
            res.status(500).json({
                success: false,
                message: 'Il y a eu une erreur',
                error: err
            });
        });
});

module.exports = router;
