const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? {
      'Content-Type': 'application/json'
    } : {}
  }).then(response => {
    if (response.status == 44400) {
      return response.json().then(errResData => {
        const error = new Error('Something went wrong!');
        error.data = errResData;
        throw error;
      });
    }
    return response.json();
  });
};
const getData = () => {
  sendHttpRequest('GET', "https://6005eb7d3698a80017de1195.mockapi.io/doctors").then(responseData => {
    console.log(responseData);
    for (let i = 0; i < responseData.length; i++) {
      console.log(responseData[i].email)
      const tbody = document.querySelector('tbody');
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      const td3 = document.createElement('td');
      const td4 = document.createElement('td');
      const td5 = document.createElement('td');
      const td6 = document.createElement('td');
      const td7 = document.createElement('td');
      const btn1 = document.createElement('button');
      const btn2 = document.createElement('button');
      btn1.className = "btn btn-success"
      btn2.className = "btn btn-danger"
      var att = document.createAttribute("data-target")
      att.value = "#updateModal";
      var att2 = document.createAttribute("data-toggle")
      att2.value = "modal";
      btn1.setAttributeNode(att2);
      btn1.setAttributeNode(att);
      btn2.onclick = "deletee()"
      btn1.onclick = "updatee()"
      const i1 = document.createElement('i');
      const i2 = document.createElement('i');
      i1.className = "fa fa-edit"
      i2.className = "fa fa-trash"
      i2.ariaHidden = true
      tbody.appendChild(tr)
      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      tr.appendChild(td7)
      tr.appendChild(td4)
      tr.appendChild(td5)
      tr.appendChild(td6)
      td6.appendChild(btn1)
      td6.appendChild(btn2)
      btn1.appendChild(i1)
      btn2.appendChild(i2)
      const name = document.createTextNode(responseData[i].fullname)
      const email = document.createTextNode(responseData[i].email)
      const phone = document.createTextNode(responseData[i].phone)
      const password = document.createTextNode(responseData[i].Password)
      const cin = document.createTextNode(responseData[i].cin)
      const id = document.createTextNode(responseData[i].id)
      td1.appendChild(id);
      td2.appendChild(name);
      td3.appendChild(email);
      td4.appendChild(phone);
      td5.appendChild(password);
      td7.appendChild(cin);
      btn1.id = responseData[i].id
      btn2.id = responseData[i].id
      btn2.addEventListener("click", function () {
        deletee(this.id)
      })
      btn1.addEventListener("click", function () {
        updatee(this.id)
      })
    }
  });
};
const deletee = (id) => {
  sendHttpRequest('DELETE', 'https://6005eb7d3698a80017de1195.mockapi.io/doctors/' + id).then(responseData => {
    console.log(responseData);
    location.reload();
  });
};
const updatee = (id) => {
  sendHttpRequest('GET', 'https://6005eb7d3698a80017de1195.mockapi.io/doctors/' + id).then(responseData => {
    console.log(responseData);
    document.getElementById('nameup').value = responseData.fullname
    document.getElementById('emailup').value = responseData.email
    document.getElementById('cinup').value = responseData.cin
    document.getElementById('phoneup').value = responseData.phone
    document.getElementById('passwordup').value = responseData.Password
    document.getElementById('idup').value = responseData.id
  });
};
function logupdate() {
  var name = document.getElementById('nameup').value
  var email = document.getElementById('emailup').value
  var cin = document.getElementById('cinup').value
  var phone = document.getElementById('phoneup').value
  var password = document.getElementById('passwordup').value
  var id = document.getElementById('idup').value
  console.log(name);
  sendHttpRequest('PUT', 'https://6005eb7d3698a80017de1195.mockapi.io/doctors/' + id, {
      fullname: name,
      email: email,
      cin: cin,
      phone: phone,
      Password: password
    })
    .then(responseData => {
      console.log(responseData);
      location.reload();
    })
}
function logSubmit() {

  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var cin = document.getElementById('cin').value
  var phone = document.getElementById('phone').value
  var password = document.getElementById('password').value
  console.log(name);
  sendHttpRequest('POST', 'https://6005eb7d3698a80017de1195.mockapi.io/doctors/', {
      fullname: name,
      email: email,
      cin: cin,
      phone: phone,
      Password: password
    })
    .then(responseData => {
      console.log(responseData);
      location.reload();
    })
}
const LogIn = () => { 
   let email = document.getElementById('Email').value
   let password = document.getElementById('Password').value
   if (email == "admin@admin.com" && password == "admin") {
    console.log("here we are")
    window.location.replace("../adminPage/adminPage.html");
} else 
  sendHttpRequest('GET', "https://6005eb7d3698a80017de1195.mockapi.io/doctors").then(responseData => {
    for (let i = 0; i < responseData.length; i++) {
      console.log(responseData[i].email)
      console.log(responseData[i].Password)
       if (email == responseData[i].email && password == responseData[i].Password){
       window.location.replace("abederahim URL");
         break;
        }  else {
        document.getElementById("error").innerHTML = "Email ou mot de passe incorrect!";
        document.getElementById("error").style = "color:#FF0D00; background-color : #F0B8B0;border-style: solid; border-width:1px; border-radius: 4%; border-color: red;margin-top: 10px;padding-left: 10px"
        }
      }
});
}
