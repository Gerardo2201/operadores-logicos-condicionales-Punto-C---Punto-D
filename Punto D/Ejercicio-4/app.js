//Un cajero automático presenta el siguiente menú:
//1. Consultar saldo
//2. Retirar dinero
//3. Depositar dinero
//4. Salir
//Crea un programa con switch que muestre la acción correspondiente según el número
//ingresado.

// Se importa la bliblioteca "prompt-sync" que permite la captura de datos por teclado
import condicional from "prompt-sync";

//Instancia llamada condicion que va a permitir la captura de datos
const condicion = condicional();

// Entrada de datos que solicita al usuario ingresar una opción del menú
let opcion = condicion("Ingrese una opción (1-4): ");
opcion = Number(opcion);

switch (opcion) {
    case 1:
        console.log("Consultar saldo");
        break;

    case 2:
        console.log("Retirar dinero");
        break;

    case 3:
        console.log("Depositar dinero");
        break;

    case 4:
        console.log("Salir");
        break;

    default:
        console.log("Opción inválida. Debe ingresar un número entre 1 y 4.");
}

// Pregunta de análisis: ¿Qué pasaría si el usuario ingresa un número que no está entre 1 y 4?

// En este caso el programa entraria en el default del switch y mostraría el mensaje "Opción inválida. Debe ingresar un número entre 1 y 4."