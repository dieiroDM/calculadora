
var num1 = parseInt(prompt('1º Número: '));
var num2 = parseInt(prompt('2º Número: '));
var op = prompt('Qual Operação pretende fazer? ( +, -, /, *): ');

if (op != "+" && op != "-" && op != "/" && op != "*") {

} else {
    var resultado = 0;
    switch (op) {
        case "+":
            resultado = num1 + num2;
            alert("Resultado: " + resultado)
            break;
        case "-":
            resultado = num1 - num2;
            alert("Resultado: " + resultado)
            break;
        case "/":
            resultado = num1 / num2;
            alert("Resultado: " + resultado)
            break;
        case "*":
            resultado = num1 * num2;
            alert("Resultado: " + resultado)
            break;

    }
}

