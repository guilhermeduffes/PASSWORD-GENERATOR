document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let length = document.getElementById("length").value;
    let incluiMinuscula = document.getElementById("incluiMinuscula").checked;
    let incluiMaiuscula = document.getElementById("incluiMaiuscula").checked;
    let incluiNumeros = document.getElementById("incluiNumeros").checked;
    let incluiSimbolos = document.getElementById("incluiSimbolos").checked;

    let password = generatePassword(length, incluiMinuscula, incluiMaiuscula, incluiNumeros, incluiSimbolos);
    document.getElementById("password").textContent = password;

    let passwordHistory = document.getElementById("historico");
    let newPassword = document.createElement("p");
    newPassword.textContent = password;
    historico.appendChild(newPassword);
});

function generatePassword(length, incluiMinuscula, incluiMaiuscula, incluiNumeros, incluiSimbolos) {
    let charSet = "";
    if (incluiMinuscula) {
        charSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (incluiMaiuscula) {
        charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (incluiNumeros) {
        charSet += "0123456789";
    }
    if (incluiSimbolos) {
        charSet += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    const element = document.getElementById("historico");
    element.insertAdjacentHTML('beforeend', `<p><br>Senha gerada em${new Date().toLocaleString()}</p>`);

    var element2 = document.getElementById("password");
    element2.style.padding = "10px 45px 10px 10px"


    return password;
}



const slider = document.getElementById("slider");
const output = document.getElementById("slider-value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


