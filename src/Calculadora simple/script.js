const txtOp1 = document.getElementById("operador1")
const txtOperacion = document.getElementById("operacion")
const txtOp2 = document.getElementById("operador2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)

function calcular(){
    const operacion = txtOperacion.value
    const operador1 = parseFloat(txtOp1.value)
    const operador2 = parseFloat(txtOp2.value)

    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(operador1) && !isNaN(operador2)){
        let resultado;
        switch (operacion){
            case "+":
                resultado = operador1 + operador2
                break;
            case "-":
                resultado = operador1 - operador2
                break;
            case "*":
                resultado = operador1 * operador2
                break;
            case "/":
                resultado = operador1 / operador2
                break
        }
        pResultado.style = "color:black;font-weight:bold"
        pResultado.innerText = "= " + resultado
    }else{
        pResultado.style = "color:red;font-weight:bold"
        pResultado.innerText = "Calculo invalido"
    }
}
