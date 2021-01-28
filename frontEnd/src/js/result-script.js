var urlString = window.location.search;
var urlParam = new URLSearchParams(urlString);
const id = urlParam.get('idDossier');
console.log(id)



    axios.get(`http://localhost:8080/dossier/${id}`)
    .then(function (response) {

        var tbody = document.getElementById("card1");
        var tbody2 = document.getElementById("cart2");
        var card = `
        <h4>${response.data.prenom}</h4>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
        data-whatever="@mdo">Edit Reslut </button>
        `;
        tbody.innerHTML = card;
        var card2 = `
        <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0">Full Name</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        ${response.data.prenom} ${response.data.nom}
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0">Email</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        ${response.data.email}
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0">Phone</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        ${response.data.telephone}
        </div>
      </div>
      <hr>

      <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0">CIN</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        ${response.data.cin}
        </div>
      </div>
        `;
        tbody2.innerHTML = card2;
    })
    .catch(function (err) {
        console.log(err);
    });


    //get question 

    axios.get(`http://localhost:8080/fiche/${id}`)
    .then(function (response) {

        console.log(response.data);
        var cardQ = document.getElementById("cardR");
        var child = `
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Date</h6>
          </div>
          <div class="col-sm-9 text-secondary">
          ${response.data.dateTest}
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Result</h6>
          </div>
          <div class="col-sm-9 text-secondary">
          ${response.data.rsTest}
          </div>
        </div>`;

        cardQ.innerHTML = child;
    })
    .catch(function (err) {
        console.log(err);
    });

    axios.get(`http://localhost:8080/question/${id}`)
    .then(function (response) {

        console.log(response.data);
        var cardQ = document.getElementById("cardQ");
        var child = `<div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0">Fiévre:</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        ${response.data.fievre}
        </div>
      </div>
      <hr>
      
      
      <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0">Toux seche:</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        ${response.data.toux_seche}
        </div>
      </div>
      <hr>
      
      
      <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0">Difficultes a respirer:</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        ${response.data.difficultes_a_respirer}
        </div>
      </div>
      <hr>
      
      
      <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0">Maux de gorge:</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        ${response.data.maux_de_gorge}
        </div>
      </div>
      <hr>
      
      
      <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0">Rhinite:</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        ${response.data.rhinite}
        </div>
      </div>
      <hr>
      
      
      <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0">Douleur dans les muscles:</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        ${response.data.douleur_dans_les_muscles}
        </div>
      </div>
      <hr>
      
      <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0">Fatigue:</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        ${response.data.fatigue}
        </div>
      </div>
      <hr>
      
      <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0">Maux de tete:</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        ${response.data.maux_de_tete}
        </div>
      </div>
      <hr>
      
      
      <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0">Diarrhees:</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        ${response.data.diarrhees}
        </div>
      </div>
      <hr>
      
      <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0">Nausees vomissement:</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        ${response.data.nausees_vomissement}
        </div>
      </div>
      <hr>
      
      
      <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0">Anosmie:</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        ${response.data.anosmie}
        </div>
      </div>
      <hr>
      
      <div class="row">
        <div class="col-sm-3">
          <h6 class="mb-0">Agueusie:</h6>
        </div>
        <div class="col-sm-9 text-secondary">
        ${response.data.agueusie}
        </div>
      </div>
      <hr>
      `;

        cardQ.innerHTML = child;
    })
    .catch(function (err) {
        console.log(err);
    });
    

    // -------------------------update result ----------------------------

    var editResult = document.getElementById("submit-test-result");
    editResult.addEventListener('click', () => {
    
    var finalResult = document.getElementById('final-test-result').value

    // console.log(finalResult);

    axios.put(`http://localhost:8080/fiche/update/${id}`, {rsTest :finalResult })
    .then(function (response){
        document.getElementById("closeModal").click();
    })
    .catch(function (err) {
        console.log(err);
    });
    location.reload();
})



// ------------------------------------Send mail ---------------------------------------
var sendMail = document.getElementById("sendMail");
sendMail.addEventListener('click', () => {



axios.get(`http://localhost:8080/dossier/${id}`)
    .then(function (response) {

        console.log(response.data);

        var templateParams  = {
            form_name:"abdo",
            to_name : "belcaid",
            message : `Hi abdo , new case detected : NOM:  ${response.data.nom}, PRENOM :${response.data.prenom}, CIN : ${response.data.cin} , EMAIL : ${response.data.email}, TELEPHONE : ${response.data.telephone}`
        };
    
        emailjs.send('service_onlpqn9', 'template_huh6a8s', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });


    })
    .catch(function (err) {
        console.log(err);
    });

})

var pdfBtn = document.getElementById("pdfPrint");

pdfBtn.addEventListener('click', () => {
    window.open(`http://localhost:8080/pdf/${id}`, '_blank');
})