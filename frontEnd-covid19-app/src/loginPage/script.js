function loginAdmin() {
    let email = document.getElementById('Email').value
    let password = document.getElementById('Password').value
    if (email == "admin@admin.com" && password == "admin") {
        console.log("here we are")
        window.open("../adminPage/adminPage.html")
        
    }
}