// Evaluación de Laboratorio de JavaScript: Calculadora Básica

// Objetivo:
// Diseña y construye una calculadora que pueda sumar, restar, multiplicar y dividir dos números.

// Instrucciones:
// Completa las partes faltantes del código a continuación. Piensa cuidadosamente en el orden de las condiciones.
// Debes manejar correctamente las operaciones +, -, * y / usando lógica condicional.

// Ejemplo de uso:
// node calculator.js 10 5 +
// Salida: 15

// Paso 1: Obtener los valores de entrada desde la línea de comandos
const args = process.argv.slice(2);

// Convertir las dos primeras entradas a números
const num1 = Number(args[0]);
const num2 = Number(args[1]);

// Obtener el operador (ej. "+", "-", "*", "/")
const operator = args[2];

// Variable para almacenar el resultado final
let result;

if(operator === "+"){
    result = num1 + num2;

} else if (operator === "-"){
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/"){
    if (num2 === 0){
        result = "No se puede dividir por cero";
    } else{
        result = num1 / num2;
    }
} else {
    result = "Operador inválido"
}
console.log(result);
