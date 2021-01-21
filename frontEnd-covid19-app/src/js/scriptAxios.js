axios.get('http://localhost:8080/dossier/')
.then(function (response) {
    var tbody = document.getElementById("tbody");
    var child = '';
    response.data.forEach(element => {
        child += '<tr>';
        child += '<td>';
        child += "<div class='d-flex align-items-center'>";
        child += "<div>";
        child += "<h4 class='m-b-0 font-16'>" + element._id + "</h4>";
        child += "</div>";
        child += "</div>";
        child += "</td>";
        child += "<td>"+element.prenom +"</td>";
        child += "<td>"+element.nom +"</td>";
        child += "<td><label class='label label-danger'>"+element.cin+"</label></td>";
        child += "<td>"+element.email +"</td>";
        child += "<td>"+element.telephone +"</td>";
        child += "<td><a href='question.html?idDossier="+element._id+"'>Aller Au questionnaire</a></td>";
        child += "</tr>";
    });
    tbody.innerHTML = child;
})
.catch(function (err) {
    console.log(err);
});

var addDossier = document.getElementById("addDossier");
addDossier.addEventListener('click', () => {
    console.log("clicked");
    var prenom = document.getElementById('prenom').value;
    var nom = document.getElementById('nom').value;
    var cin = document.getElementById('cin').value;
    var email = document.getElementById('email').value;
    var telephone = document.getElementById('telephone').value;
  
    var obj =     {
        prenom : prenom,
        nom : nom,
        cin : cin,
        email : email,
        telephone : telephone
    }
    
    axios.post('http://localhost:8080/dossier/add', obj)
    .then(function (response){
        document.getElementById("closeDossier").click();
    })
    .catch(function (err) {
        console.log(err);
    });
    location.reload();
})