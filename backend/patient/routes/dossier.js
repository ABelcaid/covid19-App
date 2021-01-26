const router = require("express").Router();
let Dossier = require("../models/dossier.model");
const logger = require('../config/logger')


router.route("/").get((req, res) => {
  Dossier.find()
    .then((dossier) => res.json(dossier))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/add").post((req, res) => {
  const prenom = req.body.prenom;
  const nom = req.body.nom;
  const cin = req.body.cin;
  const email = req.body.email;
  const telephone = req.body.telephone;
 

  const dossierPush = new Dossier({
    prenom,
    nom,
    cin,
    email,
    telephone
  });

  dossierPush
    .save()
    .then(() => res.json("Dossier successfully added"))
    .catch((err) =>  res.status(400).json("Error :" + err));
});

router.route("/:id").get((req, res) => {
  Dossier.findById(req.params.id)
    .then((dossier) => res.json(dossier))
    .catch((err) =>  res.status(400).json("Error :" + err));
});



module.exports = router;
