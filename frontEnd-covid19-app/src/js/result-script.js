var urlString = window.location.search;
var urlParam = new URLSearchParams(urlString);
const id = urlParam.get('idDossier');
console.log(id)



axios.get(`http://localhost:8080/dossier/${id}`)
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
        child += "<td><a href='result.html?idDossier="+element._id+"'>Resultat du test </a></td>";
        child += "</tr>";
    });
    tbody.innerHTML = child;
})
.catch(function (err) {
    console.log(err);
});