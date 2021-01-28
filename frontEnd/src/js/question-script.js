   var urlString = window.location.search;
   var urlParam = new URLSearchParams(urlString);
   const id = urlParam.get('idDossier');
   console.log(id)


var addQuestionDossier = document.getElementById("q-submit");


//validation 
window.onload = function(){
  addQuestionDossier.disabled = true;
}
var checkBox = document.querySelectorAll('input[type="radio"]');
checkBox.forEach(item => {
  item.addEventListener('click', () => {
    var q1True = document.getElementById("q1True");
    var q1False =  document.getElementById("q1False");
    var q2True = document.getElementById("q2True");
    var q2False =  document.getElementById("q2False");
    var q3True = document.getElementById("q3True");
    var q3False =  document.getElementById("q3False");
    var q4True = document.getElementById("q4True");
    var q4False =  document.getElementById("q4False");
    var q5True = document.getElementById("q5True");
    var q5False =  document.getElementById("q5False");
    var q6True = document.getElementById("q6True");
    var q6False =  document.getElementById("q6False");
    var q7True = document.getElementById("q7True");
    var q7False =  document.getElementById("q7False");
    var q8True = document.getElementById("q8True");
    var q8False =  document.getElementById("q8False");
    var q9True = document.getElementById("q9True");
    var q9False =  document.getElementById("q9False");
    var q10True = document.getElementById("q10True");
    var q10False =  document.getElementById("q10False");
    var q11True = document.getElementById("q11True");
    var q11False =  document.getElementById("q11False");
    var q12True = document.getElementById("q12True");
    var q12False =  document.getElementById("q12False");
    
    if (q1True.checked == false && q1False.checked == false || q2True.checked == false && q2False.checked == false || q3True.checked == false && q3False.checked == false || q4True.checked == false && q4False.checked == false || q5True.checked == false && q5False.checked == false || q6True.checked == false && q6False.checked == false || q7True.checked == false && q7False.checked == false || q8True.checked == false && q8False.checked == false || q9True.checked == false && q9False.checked == false || q10True.checked == false && q10False.checked == false || q11True.checked == false && q11False.checked == false || q12True.checked == false && q12False.checked == false) {
      addQuestionDossier.disabled = true;
    }

    else{
      addQuestionDossier.disabled = false;
    }
  })
})


//validation End 



addQuestionDossier.addEventListener('click', () => {
    console.log("clicked");
    
   
    var q1 = document.querySelector('input[name="q1"]:checked').value;
    var q2 = document.querySelector('input[name="q2"]:checked').value;
    var q3 = document.querySelector('input[name="q3"]:checked').value;
    var q4 = document.querySelector('input[name="q4"]:checked').value;
    var q5 = document.querySelector('input[name="q5"]:checked').value;
    var q6 = document.querySelector('input[name="q6"]:checked').value;
    var q7 = document.querySelector('input[name="q7"]:checked').value;
    var q8 = document.querySelector('input[name="q8"]:checked').value;
    var q9 = document.querySelector('input[name="q9"]:checked').value;
    var q10 = document.querySelector('input[name="q10"]:checked').value;
    var q11 = document.querySelector('input[name="q11"]:checked').value;
    var q12 = document.querySelector('input[name="q12"]:checked').value;
    
     



  var dateNow = new Date();
  axios({
    method: 'post',
    url: 'http://localhost:8080/question/add',
    data: {
        dossierId : id,
        q1 : q1,
        q2 : q2,
        q3 : q3,
        q4 : q4,
        q5 : q5,
        q6 : q6,
        q7 : q7,
        q8 : q8,
        q9 : q9,
        q10 : q10,
        q11 : q11,
        q12 : q12

    }
   
  });

  axios({
    method: 'post',
    url: 'http://localhost:8080/fiche/add',
    data: {
        idPatient : id,
        dateTest : dateNow,
        
    }
  });
 
  const myNotification = new Notification('Notification', {
    body: 'Question bien Passer'
  })
  
window.location.replace("dossierPatient.html");
});

