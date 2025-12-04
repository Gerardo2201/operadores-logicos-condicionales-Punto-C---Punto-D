//Crea un programa que pida un número entero y muestre:
//• "Número positivo" si el número es mayor que 0.
//• "Número negativo" si es menor que 0.
//• "Cero" si es igual a 0.

// Se importa la bliblioteca "prompt-sync" que permite la captura de datos por teclado
import condicional from "prompt-sync";

//Instancia llamada condicion que va a permitir la captura de datos
const condicion = condicional();

// Entrada de datis que solicita al usuario ingresar un número entero
let numero = condicion("Ingrese un número entero: ");
numero = Number(numero);

// Condicionales para determinar si el número es positivo, negativo o cero
if (numero > 0)
    console.log("Número positivo");
else if (numero < 0)
    console.log("Número negativo");
else
    console.log("Cero");


// Extensión: ¿Cómo cambiaría la solución si quieres que, además, se verifique si el número es par o impar?

// Se mantendria la estructura if - else if - else para saber si es positivo, negativo o cero, luego agregaría otra conclusión para verificar si el número es par o impar utilizando el operador módulo (%).