function login() {
    const username = document.getElementById("studentID").value;
    const password = document.getElementById("passStudent").value;

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://restapi.tu.ac.th/api/v1/auth/Ad/verify"); 
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader ("Application-Key", "TU0489b72c925ce111d4dec85273ba7e4629d711fa3ad28b3fa68957b3f43ffdcf8b15333d373a293395047a0f1ea449f5");
    xhttp.send(JSON.stringify({ "UserName": username, "PassWord": password }));
    xhttp.onreadystatechange = function () { 
        if (this.readyState == 4 && this.status == 200) { 
                const object = JSON.parse (xhttp.responseText); 
                console.log(object); 
                window.location = "U2_Student.html"; // Redirecting to other page.
         }
         if(this.readyState != 4 && this.status != 200){
          document.getElementById("invalidStudent").innerHTML ="*Student ID or password might be wrong."
         
         }       
  }
};

function loginProfessor() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("passProfessor").value;
  if(user == "staff@dome.tu.ac.th" && pass == "staff1234") {
      window.location = "U2_Professor.html";
      return false;
  } else {
    document.getElementById("invalidProfessor").innerHTML = "*Username or password might be wrong."
      return false;
      }
  }

console.log("login")

