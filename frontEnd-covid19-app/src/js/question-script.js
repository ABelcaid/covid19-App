
   var urlString = window.location.search;
   var urlParam = new URLSearchParams(urlString);
   const id = urlParam.get('idDossier');
   console.log(id)


var addQuestionDossier = document.getElementById("q-submit");
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


    var obj =     {
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
    
    axios.post('http://localhost:8080/question/add', obj)
    .then(function (response){
       console.log("Q added");;
    })
    .catch(function (err) {
        console.log(err);
    });
    
    
})