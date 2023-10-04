var calc = document.getElementById("calculadora");
var result = document.getElementById("resultado");

function calcular() {
      var num1 = parseInt(document.getElementById("numero1").value);
      var num2 = parseInt(document.getElementById("numero2").value);
      var resultado;
      
      if (num1 % 2 === 0 && num2 % 2 === 0) {
        var resultado = num1 + num2;
        document.getElementById('resultado').innerText = "A soma é: " + resultado;
        document.getElementById('resultado').classList.remove("error");
      } else {
        document.getElementById('resultado').innerText = "Ambos os números devem ser pares.";
        document.getElementById('resultado').classList.add("error");
      }
    };
