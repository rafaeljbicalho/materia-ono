document.querySelector('#botao').addEventListener('click', function() {
    var peso = document.querySelector('#peso').value;
    var altura = document.querySelector('#altura').value;
    var imc = peso / (altura * altura);
    var hr = document.createElement('hr');
    var spanIMC = document.createElement('span');
    if (imc < 18.5) {

        var classificacao = "Baixo peso";

    } else if (imc > 18.5 && imc < 24.9) {

        var classificacao = "Peso normal";

    } else if (imc > 25 && imc < 29.9) {

        var classificacao = "Excesso de peso";

    } else if (imc > 30 && imc < 34.9) {

        var classificacao = "Obesidade de classe 1";

    } else if (imc > 35 && imc < 39.9) {

        var classificacao = "Obesidade de classe 2";

    } else {

        var classificacao = "Obesidade de classe 3";

    }

    spanIMC.textContent = 'Seu IMC é: ' + imc.toFixed(2) + " (" + classificacao + ")";
    var divResultado = document.querySelector('#resultado');
    divResultado.appendChild(hr);
    divResultado.appendChild(spanIMC);
});