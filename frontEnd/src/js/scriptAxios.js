
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
        child += "<td><a href='question.html?idDossier="+element._id+"'><i class='fas fa-question'></i></a></td>";
        child += "<td><a href='result.html?idDossier="+element._id+"'><i class='fas fa-poll-h'></i></a></td>";
        child += "</tr>";
    });
    tbody.innerHTML = child;
}).catch(function (err) {
    console.log(err);
});


$(document).ready(function() {
  
    
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
            child += "<td><a href='question.html?idDossier="+element._id+"'><i class='fas fa-question'></i></a></td>";
            child += "<td><a href='result.html?idDossier="+element._id+"'><i class='fas fa-poll-h'></i></a></td>";
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
       if(valdiate()==true){
         
    
        var obj =     {
            prenom : prenom,
            nom : nom,
            cin : cin,
            email : email,
            telephone : telephone
        }
        
        axios.post('http://localhost:8080/dossier/add', obj)
        .then(function (response){

            const myNotification = new Notification('Notification', {
                body: 'Dossier bien ajouter'
              })
              
            document.getElementById("closeDossier").click();
            window.location.replace("dossierPatient.html");
        })
        .catch(function (err) {
            console.log(err);
        });
         
      
       }
    })
    
    
    //validate form 
    
    function valdiate(){
      var prenom = document.getElementById('prenom').value;
      var nom = document.getElementById('nom').value;
      var cin = document.getElementById('cin').value;
      var email = document.getElementById('email').value;
      var telephone = document.getElementById('telephone').value;
      var regexEmail = /^\S+@\S+\.\S+$/;
      var regexTel = /^[1-9]\d{9}$/;
    
      if (prenom == "" && nom == ""&& cin == ""&& email == ""&& telephone == "") {
        document.getElementById("prenomErr").innerHTML= "Entrer ton prenom"; 
        document.getElementById("nomErr").innerHTML= "Entrer ton nom"; 
        document.getElementById("cinErr").innerHTML= "Entrer ton numero de cin"; 
        document.getElementById("emailErr").innerHTML= "Entrer ton email"; 
        document.getElementById("telephoneErr").innerHTML= "Entrer ton numero de telephone"; 
        return false; 
      }
      if(regexEmail.test(email) === false && regexTel.test(telephone) === false){
          
        document.getElementById("emailErr").innerHTML= "Entrer un email valide"; 
        document.getElementById("telephoneErr").innerHTML= "Entrer un numÃ©ro de telephone valide"; 
        return false;
      }
       else{
        return true;
      }
    }
    
    
  });