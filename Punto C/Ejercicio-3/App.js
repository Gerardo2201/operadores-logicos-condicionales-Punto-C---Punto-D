// 3. Condicional simple
//Crea un programa que pregunte la temperatura de una ciudad y muestre:
//• “Hace calor” si la temperatura es mayor o igual a 30.
//• “Clima agradable” en caso contrario.

// Se importa la bliblioteca "prompt-sync" que permite la captura de datos por teclado
import condicional from "prompt-sync";

//Instancia llamada condicion que va a permitir la captura de datos
const condicion = condicional();

//Entrada de datos para temperatura
const temperatura = condicion("Ingrese el nivel de la temperatura: ")

//Condicional que responde segun el nivel de la temperatura
if (temperatura >= 30)
        console.log("Hace calor")
else 
    console.log("Clima agradable")