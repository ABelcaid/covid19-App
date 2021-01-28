var pdf = require('html-pdf');
var fs = require('fs');
let Dossier = require("../models/dossier.model");
let FichePatient = require("../models/fichePatient.model");


var options = { format: 'A3' };
const router = require("express").Router();
var objDossier ={};
var objFiche = {};
 router.route("/:id").get(async (req, res) => {
    
  await  Dossier.findById(req.params.id).then(function(dossier){
    objDossier = { dossier}
    })
  await  FichePatient.findOne({idPatient: `${req.params.id}`}).then(function(fiche){
    objFiche = { fiche }
  })


  console.log(objDossier)
  console.log(objFiche)

if(objFiche.fiche.rsTest == null){
  objFiche.fiche.rsTest = "En cours de test";
}
var html = 
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="Description" content="Enter your description here"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
<style>

body {
  padding: 100px 0;
}

h2 {
  font-size: 22px;
  font-weight: 600;
}
img{width: 200px;}
h3 {
  font-size: 18px;
  font-weight: 600;
}

/* Lists */
.words__list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.words__item:first-child {
  padding: 0 0 20px;
}

/* Grid */
.grid__item {
  font-weight: 600;
}

.grid__item-green {
  color: #00a55c;
}
.grid__item-blue {
  color: #0066b2;
}
.grid__item-default {
  font-weight: 400;
}

/* Sections */
section {
  padding: 25px 0;
}

.page__dialogue .row {
  padding: 10px 0;
}

.page__content h3 {
  padding: 10px 0;
}
.page__content p {
  padding: 10px 0;
}
</style>
<title>pdf</title>
</head>
<body>

  <!-- Page Title -->
<section class="page__title">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="text-center">
          <h2>Fiche Patient</h2>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Illustration -->
<section class="page__illustration">
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="text-center">
          <img src="https://res.cloudinary.com/dzjzhwh7o/image/upload/v1611618692/Online_Doctor-bro_1_es7rso.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Dialogue  -->
<section class="page__dialogue">
  <div class="container" style="
  margin-left: 38%">

    <!-- Dialogue Item -->
    <div class="row">
      <div class="offset-sm-3 col-sm-3">
        Nom : 
      </div>
      <div class="col-sm-3">
      ${objDossier.dossier.nom}
      </div>
    </div>

    <!-- Dialogue Item -->
    <div class="row">
      <div class="offset-sm-3 col-sm-3" style="color:red">
      Prenom : 
      </div>
      <div class="col-sm-3">
        ${objDossier.dossier.prenom}
      </div>

    </div>
    <!-- Dialogue Item -->
    <div class="row">
      <div class="offset-sm-3 col-sm-3" style="color:red">
      cin : 
      </div>
      <div class="col-sm-3">
        ${objDossier.dossier.cin}
      </div>

    </div>
    <!-- Dialogue Item -->
    <div class="row">
      <div class="offset-sm-3 col-sm-3" style="color:red">
      email : 
      </div>
      <div class="col-sm-3">
        ${objDossier.dossier.email}
      </div>

    </div>
    <!-- Dialogue Item -->
    <div class="row">
      <div class="offset-sm-3 col-sm-3">
        Telephone :
      </div>
      <div class="col-sm-3">
      ${objDossier.dossier.telephone}
      </div>
    </div>

    <!-- Dialogue Item -->
    <div class="row">
      <div class="offset-sm-3 col-sm-3">
        Date Test :
      </div>
      <div class="col-sm-3">
      ${objFiche.fiche.dateTest}
      </div>
    </div>
  </div>
</section>

<!-- Content  -->
<section class="page__content">
  <div class="container" style="margin-left: 38%;">
    <!-- Grid -->
  
    <div class="row">

      <!-- Grid Item -->
      <div class="col-sm-3">
        <div class="grid__item-blue">
          <h3 class="grid__title">Resultat de test covid :</h3>
        </div>
      </div>

      <!-- Grid Item -->
      <div class="col-sm-3">
        <div class="grid__item grid__item-green">
          <h3 class="grid__title"> ${objFiche.fiche.rsTest}</h3>
        </div>
      </div>

    </div>

  </div>
</section>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>`;

// @ts-ignore
    pdf.create(html, options).toFile('./businesscard.pdf', function(err, st) {
      res.sendFile(st.filename);
  })
});

module.exports = router;
