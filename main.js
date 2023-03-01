var password = '';
var length = document.getElementById("length").value;
let includeLowercase = document.getElementById("includeLowercase");
let includeUppercase = document.getElementById("includeUppercase");
let includeNumbers = document.getElementById("includeNumbers");
let includeSymbols = document.getElementById("includeSymbols");

document.querySelector('.butao').addEventListener('click', function () {
    var passworde = document.getElementById("password");
    password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    passworde.textContent = password;
    passworde.style.padding = "10px 10px 10px 10px";
    const historico = document.getElementById('historico');
    historico.scrollTop = historico.scrollHeight;
});

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    let charSet = "";
    length = document.getElementById("length").value;

    if (includeLowercase.checked) {
        charSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeUppercase.checked) {
        charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers.checked) {
        charSet += "0123456789";
    }
    if (includeSymbols.checked) {
        charSet += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
    }

    if (charSet === "") {
        return "Error";
    } else {


        console.log(includeLowercase.checked, includeUppercase.checked, includeNumbers.checked, includeSymbols.checked);

        let newPassword = "";
        for (let i = 0; i < length; i++) {
            newPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }

        const element = document.getElementById("historico");
        element.insertAdjacentHTML('beforeend', `<p><br> <b> &nbsp; ${newPassword} </b> <br> <p style="font-weight: 100" > &nbsp; &nbsp; ${new Date().toLocaleString()} </p> </p>`);



        return newPassword;
    }
}

const lengthSlider = document.getElementById("length");
const output = document.getElementById("slider-value");
output.innerHTML = lengthSlider.value;

lengthSlider.oninput = function () {
    output.innerHTML = this.value;
}

function limparHistorico() {
    document.getElementById("historico").innerHTML = "";
    document.getElementById("password").innerHTML = "";
    document.getElementById("password").style.padding = "0";
}

document.querySelector('.butao').addEventListener('mousedown', function () {
    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 300);
});


``