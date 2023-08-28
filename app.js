const express = require('express');
const app= express();
//const eleve= require('./models/eleve');
//const item= eleve();

app.get('/',(req,res)=>{
    res.send("Hello world")
});

app.listen(3000, ()=>console.log(" l'application passe par le port 3000."));


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nodeProject', {
  
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion :'));
db.once('open', () => {
  console.log('Connecté à la base de données');
});
//route pour la récupération des eleves
app.get('/eleve',async(req,res)=>{
  /*try {
    const eleves = await Eleve.find();
    res.json(eleves);
  } catch (err) {
    res.status(500).json({ error: 'Une erreur est survenue' });
  }*/
    var debs= [{nom:'AYI',prenom:'banouvi',},{nom:'AKAZE',prenom:'george'}];
    res.status(200).json(debs);

});
//route pour la création des eleves
app.post('/eleve', async (req, res) => {
  try {
    const { nom, prenom, date_de_naissance, classe } = req.body;
    const eleve = new eleve({ nom, prenom, date_de_naissance, classe });
    await eleve.save();
    res.status(201).json(eleve);
  } catch (err) {
    res.status(400).json({ error: 'Données invalides' });
  }
});

app.delete('/eleve', async (req, res) => {
  try {
    const eleveId = req.params.id;

    const eleve = await eleve.findByIdAndDelete(eleveId);
    if (!eleve) {
      return res.status(404).json({ error: 'Élève non trouvé' });
    }

    res.json({ message: 'Élève supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ error: 'Une erreur est survenue' });
  }
});