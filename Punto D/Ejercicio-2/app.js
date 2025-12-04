//Un cine aplica las siguientes reglas:
//• Si el cliente tiene menos de 12 años, el valor de la entrada es 5000.
//• Si tiene entre 12 y 18 años, el valor es 8000.
//• Si es mayor de 18, el valor es 10000.

//• Si el cliente es estudiante (condición adicional), se le aplica un descuento del 20%
//al valor de la entrada.

//Pregunta de análisis: ¿Qué estructura condicional usarías para resolver este caso: if-
//else if-else o switch? ¿Por qué?

// Para este caso, yo utilizaría la estructura condicional if-else, ya que permite evaluar múltiples condiciones de manera secuencial y aplicar descuentos adicionales de forma clara y sencilla.    

// Se importa la bliblioteca "prompt-sync" que permite la captura de datos por teclado
import condicional from "prompt-sync";

//Instancia llamada condicion que va a permitir la captura de datos
const condicion = condicional();


// Entrada de edad
let edad = condicion("Ingrese su edad: ");
edad = Number(edad);

// Entrada de estudiante
let estudiante = condicion("¿Es estudiante? (si / no): ");

// Precio base según la edad
let precio = 0;

if (edad < 12)
    precio = 5000;
else if (edad >= 12 && edad <= 18)
    precio = 8000;
else
    precio = 10000;

// Descuento del 20% si es estudiante
if (estudiante === "si") {
    precio = precio - (precio * 0.20);
}

console.log(`El precio final de la entrada es: ${precio}`);