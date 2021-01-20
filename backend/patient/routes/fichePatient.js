const router = require("express").Router();
let FichePatient = require("../models/fichePatient.model");

router.route("/").get((req, res) => {
  FichePatient.find()
    .then((fichePatient) => res.json(fichePatient))
    .catch((err) => res.status(400).json("Error :" + err));
});


router.route("/update/:id").put((req, res) => {
  const idPatient = req.body.idPatient;
  const dateTest = req.body.dateTest;
  const rsTest = req.body.rsTest;
  

  const fichePatientUpdate = new FichePatient({
    _id: req.params.id,
    idPatient,
    dateTest,
    rsTest
  });
  FichePatient.updateOne({_id: req.params.id}, fichePatientUpdate)
  .then(() => res.status(201).json("fiche Patient successfully update"))
  .catch((err) => res.status(400).json("Error :" + err));
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
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/:id").get((req, res) => {
  FichePatient.findById(req.params.id)
    .then((fichePatient) => res.json(fichePatient))
    .catch((err) => res.status(400).json("Error :" + err));
});



module.exports = router;
