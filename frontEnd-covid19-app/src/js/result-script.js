var urlString = window.location.search;
var urlParam = new URLSearchParams(urlString);
const id = urlParam.get('idDossier');
console.log(id)



axios.get(`http://localhost:8080/dossier/${id}`)
    .then(function (response) {

        console.log(response.data);
        var tbody = document.getElementById("personal-info");
        var child = `<tr>
        <td>Prenom : </td>
        <td>${response.data.prenom}</td>
        </tr>
        <tr>
        <td>Nom : </td>
        <td>${response.data.nom}</td>
        </tr>
        <tr>
        <td>CIN : </td>
        <td>${response.data.cin}</td>
        </tr>
        <tr>
        <td>Email : </td>
        <td>${response.data.email}</td>
        </tr>
        <tr>
        <td>Telephone : </td>
        <td>${response.data.telephone}</td>
        </tr>`;

        tbody.innerHTML = child;
    })
    .catch(function (err) {
        console.log(err);
    });



    axios.get(`http://localhost:8080/question/${id}`)
    .then(function (response) {

        console.log(response.data);
        var tbody = document.getElementById("question-result");
        var child = `<tr>
        <td>Fiévre (Température mesurée >38°) : </td>
        <td>${response.data.fievre}</td>
        </tr>
        <tr>
        <td>Toux séche : </td>
        <td>${response.data.toux_seche}</td>
        </tr>
        <tr>
        <td>Difficultés a respirer : </td>
        <td>${response.data.difficultes_a_respirer}</td>
        </tr>
        <tr>
        <td>Maux de gorge : </td>
        <td>${response.data.maux_de_gorge}</td>
        </tr>
        <tr>
        <td>Rhinite : </td>
        <td>${response.data.rhinite}</td>
        </tr>
        <tr>
        <td>Douleur dans les muscles (courbatures) : </td>
        <td>${response.data.douleur_dans_les_muscles}</td>
        </tr>
        <tr>
        <td>Fatigue importante  : </td>
        <td>${response.data.fatigue}</td>
        </tr>
        <tr>
        <td>Maux de téte : </td>
        <td>${response.data.maux_de_tete}</td>
        </tr>
        <tr>
        <td>Diarrhéee : </td>
        <td>${response.data.diarrhees}</td>
        </tr>
        <tr>
        <td>Nuasées et/ou Vomissements : </td>
        <td>${response.data.nausees_vomissement}</td>
        </tr>
        <tr>
        <td>Anosmie (perte de l'odorat) : </td>
        <td>${response.data.anosmie}</td>
        </tr>
        <tr>
        <td>Agueusie (perte du gout) : </td>
        <td>${response.data.agueusie}</td>
        </tr>`;

        tbody.innerHTML = child;
    })
    .catch(function (err) {
        console.log(err);
    });

    

    axios.get(`http://localhost:8080/fiche/${id}`)
    .then(function (response) {

        console.log(response);
        var tbody = document.getElementById("final-result");
        var child = `<tr>
        <td>Date du test  : </td>
        <td>${response.data.dateTest}</td>
        </tr>
        <tr>
        <td>Resultat test : </td>
        <td>${response.data.rsTest}</td>
        </tr>`;

        tbody.innerHTML = child;
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