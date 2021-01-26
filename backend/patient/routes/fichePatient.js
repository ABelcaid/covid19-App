const router = require("express").Router();
let FichePatient = require("../models/fichePatient.model");
const logger = require('../config/logger')


router.route("/").get((req, res) => {
  FichePatient.find()
    .then((fichePatient) => res.json(fichePatient))
    .catch((err) => res.status(400).json("Error :" + err));
});


router.route("/update/:id").put((req, res) => {
  // const idPatient = req.body.idPatient;
  // const dateTest = req.body.dateTest;
  const rsTest = req.body.rsTest;
  

  // const fichePatientUpdate = new FichePatient({
  //   idPatient: req.params.id,
  //   rsTest
  // });
  FichePatient.updateOne({idPatient: req.params.id}, {rsTest : rsTest})
  .then(() => res.status(201).json("fiche Patient successfully update"))
  .catch((err) =>  res.status(400).json("Error :" + err));
})


router.route("/add").post((req, res) => {
  const idPatient = req.body.idPatient;
  const dateTest = req.body.dateTest;



  const fichePatientPush = new FichePatient({
    idPatient,
    dateTest
  });

  fichePatientPush
    .save()
    .then(() => res.json("fiche Patient successfully added"))
    .catch((err) =>  res.status(400).json("Error :" + err));
});

// router.route("/:id").get((req, res) => {
//   FichePatient.findById(req.params.id)
//     .then((fichePatient) => res.json(fichePatient))
//     .catch((err) => res.status(400).json("Error :" + err));
// });

router.route("/:dossierId").get((req, res) => {
  FichePatient.findOne({idPatient: `${req.params.dossierId}`})
    .then((fichePatient) => res.json(fichePatient))
    .catch((err) => res.status(400).json("Error :" + err));
});



module.exports = router;
