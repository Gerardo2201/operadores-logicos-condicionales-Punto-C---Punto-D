// sistema debe permitir el acceso a un usuario si cumple estas condiciones:
//• El nombre de usuario es "admin".
//• La contraseña es "1234".
//Si no cumple las dos condiciones, debe mostrar "Acceso denegado".


//Pregunta de análisis: ¿Qué operador lógico usarías para verificar que se cumplan
//ambas condiciones?

// Para este caso, yo utilice el operador logico AND (&&) ya que ambas condiciones deben cumplirse para permitir el acceso al usuario.


// Se importa la bliblioteca "prompt-sync" que permite la captura de datos por teclado
import condicional from "prompt-sync";

//Instancia llamada condicion que va a permitir la captura de datos
const condicion = condicional();

// Entrada de datos que solicita al usuario ingresar el nombre de usuario y la contraseña
let usuario = condicion("Ingrese el nombre de usuario: ");
let password = condicion("Ingrese la contraseña: ");

// Condicionales para verificar las credenciales
if (usuario === "admin" && password === "1234") {
    console.log("Acceso permitido");
} else {
    console.log("Acceso denegado");
}
