const element = document.getElementById("historico");
var password = '';
var length = document.getElementById("length");
let includeLowercase = document.getElementById("includeLowercase");
let includeUppercase = document.getElementById("includeUppercase");
let includeNumbers = document.getElementById("includeNumbers");
let includeSymbols = document.getElementById("includeSymbols");
let objCookies = Cookies();
let contadorCookies = 0;

window.onload = function () {
    readingCookies();
}



document.querySelector('.butao').addEventListener('click', function () {
    var passworde = document.getElementById("password");
    password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    passworde.textContent = password;
    passworde.style.padding = "10px 10px 10px 10px";
    const historico = document.getElementById('historico');
    historico.scrollTop = historico.scrollHeight;
});



function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    let data = new Date().toLocaleString();
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

        element.insertAdjacentHTML('beforeend', `<p><br> <b> &nbsp; ${newPassword} </b> <br> <p style="font-weight: 100" > &nbsp; &nbsp; ${data} </p> </p>`);



        objCookies.setCookie('senha', newPassword, 12);
        objCookies.setCookie('data', data, 12);

        objCookies.setCookie('includeLowercase', includeLowercase.checked, 12);
        objCookies.setCookie('includeUppercase', includeUppercase.checked, 12);
        objCookies.setCookie('includeNumbers', includeNumbers.checked, 12);
        objCookies.setCookie('includeSymbols', includeSymbols.checked, 12);


        return newPassword;
    }
}

function readingCookies() {
    element.insertAdjacentHTML('beforeend', `<p><br> <b> &nbsp; ${objCookies.senha} </b> <br> <p style="font-weight: 100" > &nbsp; &nbsp; ${objCookies.data} </p> </p>`);
    console.log(Object.keys(objCookies));

    output.innerHTML = objCookies.valueSlider;
    length.value = objCookies.valueSlider;

}


const output = document.getElementById("slider-value");
output.innerHTML = length.value;

length.oninput = function () {
    output.innerHTML = this.value;

    objCookies.setCookie('valueSlider', this.value, 12);

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