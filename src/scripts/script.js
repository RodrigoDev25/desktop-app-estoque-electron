let submitVar = document.getElementById("buttonSubmit")

submitVar.addEventListener("click", function(){
    let emailVar = document.getElementById("inputEmail").value
    let passwordVar = document.getElementById("inputPassword").value

    if (emailVar == "rodrigo@email.com" && passwordVar == "123") {
      window.location.href=("dashboard.html")
      }

      else {
        alert("Senha Errada!")
      }

    }

)