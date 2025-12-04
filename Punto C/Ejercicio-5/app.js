// Un programa debe mostrar el mes del año según el número ingresado (1 al 12).
//Ejemplo: 1 → Enero, 2 → Febrero, ..., 12 → Diciembre.


// Se importa la bliblioteca "prompt-sync" que permite la captura de datos por teclado
import condicional from "prompt-sync";

//Instancia llamada condicion que va a permitir la captura de datos
const condicion = condicional();
// Entrada

// Entrada  de datos que solicita al usuario ingresar un número del 1 al 12
let numero_mes = condicion("Ingrese un número del 1 al 12: ");


// conversión de string a número
numero_mes = Number(numero_mes);

// condicionales para determinar el mes correspondiente al número ingresado
if (numero_mes === 1)
    console.log("Enero");
else if (numero_mes === 2)
    console.log("Febrero");
else if (numero_mes === 3)
    console.log("Marzo");
else if (numero_mes === 4)
    console.log("Abril");
else if (numero_mes === 5)
    console.log("Mayo");
else if (numero_mes === 6)
    console.log("Junio");
else if (numero_mes === 7)
    console.log("Julio");
else if (numero_mes === 8)
    console.log("Agosto");
else if (numero_mes === 9)
    console.log("Septiembre");
else if (numero_mes === 10)
    console.log("Octubre");
else if (numero_mes === 11)
    console.log("Noviembre");
else if (numero_mes === 12)
    console.log("Diciembre");
else
    console.log("Número inválido, debe ser entre 1 y 12.");
