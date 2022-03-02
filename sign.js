// saved info
var signUPemail = localStorage.getItem("email");
console.log(signUPemail);
var signUPpass = localStorage.getItem("Pass");
console.log(signUPpass);

function sign(event) {
    // sign in info
    var signINemail = document.getElementById("sign-Email").value;
    console.log(signINemail);
    var signINepass = document.getElementById("sign-Pass").value;
    //validation catch
    var in_eeer = document.getElementById("mail-Err");
    var in_peer = document.getElementById("pass-Err");

    if (signUPemail == signINemail) {in_eeer.style.display = "none";
        if (signUPpass == signINepass) {in_peer.style.display = "none"
            ///////////////////////////Exam Page
            location.href = "/Home.html";
            /////////////////////////////////////////
        } else {
            in_peer.style.display = "block";
        }
    } else {
        in_eeer.style.display = "block";
    }
}