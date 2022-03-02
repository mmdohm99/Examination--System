var feer = document.getElementById("err1")
var leer = document.getElementById("err2")
var peer = document.getElementById("err3")
var eeer = document.getElementById("err4")

function validate(event) {
    var firstName = document.getElementById("F_Name").value
    var lastName = document.getElementById("L_Name").value
    var Email = document.getElementById("mail").value
    var password = document.getElementById("Original").value
    var re_password = document.getElementById("Re").value
    if (password == re_password || !isFinite(firstName) || !isFinite(lastName)) {
        var S_Name = firstName + " " + lastName
    }
    
    if (isNaN(firstName)) {feer.style.display = "none"
        if (isNaN(lastName)) {leer.style.display = "none"
            if (password === re_password&&password.length>8) { peer.style.display = "none"
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {eeer.style.display = "none"
                    localStorage.setItem("email", Email)
                    localStorage.setItem("FullName", S_Name)
                    localStorage.setItem("Pass", password, "Pass")
                    location.href = '/signin.html'
                } else {
                    eeer.style.display = "block"
                }
            } else {
                peer.style.display = "block"
            }
        } else {
        leer.style.display = "block"
        }
    } else {
        feer.style.display = "block"

    }

}