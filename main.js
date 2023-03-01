var password = '';
var length = document.getElementById("length").value;
let includeLowercase = document.getElementById("includeLowercase").checked;
let includeUppercase = document.getElementById("includeUppercase").checked;
let includeNumbers = document.getElementById("includeNumbers").checked;
let includeSymbols = document.getElementById("includeSymbols").checked;


document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    length = document.getElementById("length").value;
    includeLowercase = document.getElementById("includeLowercase").checked;
    includeUppercase = document.getElementById("includeUppercase").checked;
    includeNumbers = document.getElementById("includeNumbers").checked;
    includeSymbols = document.getElementById("includeSymbols").checked;

    password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById("password").textContent = password;
});

document.querySelector('.butao').addEventListener('click', function() {
    let password = generatePassword(includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById("password").textContent = password;
});

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    let charSet = "";
    length = document.getElementById("length").value;

    if (includeLowercase) {
        charSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeUppercase) {
        charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
        charSet += "0123456789";
    }
    if (includeSymbols) {
        charSet += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
    }
    

    let newPassword = "";
    for (let i = 0; i < length; i++) {
        newPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    const element = document.getElementById("historico");
    element.insertAdjacentHTML('beforeend', `<p><br> <b> &nbsp; ${newPassword} </b> <br> <p style="font-weight: 100" > &nbsp; &nbsp; ${new Date().toLocaleString()} </p> </p>`);

    var element2 = document.getElementById("password");
    element2.style.padding = "10px 45px 10px 10px"

    return newPassword;
}

const lengthSlider = document.getElementById("length");
const output = document.getElementById("slider-value");
output.innerHTML = lengthSlider.value;

lengthSlider.oninput = function() {
    output.innerHTML = this.value;
}

function limparHistorico() {
    document.getElementById("historico").innerHTML = "";
    document.getElementById("password").innerHTML = "";
    document.getElementById("password").style.padding = "0";
}

document.querySelector('.butao').addEventListener('mousedown', function() {
    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 300);
});
``
