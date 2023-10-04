var formulario = document.getElementById("calculadoraForm");
var resultadoDiv = document.getElementById("resultado");


formulario.addEventListener("submit",function(event){
    event.preventDefault();

    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var operacao = document.getElementById("operacao").value;

    var resultado;

    if (operacao === "soma") {
        resultado = numero1 + numero2;
    }
    else if (operacao === "subtracao") {
        resultado = numero1 - numero2;
    }
    else if (operacao === "multiplicacao") {
        resultado = numero1 * numero2;
    }
    else if (operacao === "divisao") {
        if (numero2 === 0) {
            resultado = "Impossível divisão por zero"
        }
        else {
            resultado = numero1 / numero2;
        }
    }

    resultadoDiv.innerText = "Resultado: " + resultado

})