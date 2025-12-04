//Sistema de calificaciones con condiciones lógicas
//Un estudiante aprueba una materia si:
//• Su nota final es mayor o igual a 60 y
//• Su asistencia es mayor o igual al 80%.
//Si no cumple ambas condiciones, debe mostrar "Reprobado".

// Se importa la bliblioteca "prompt-sync" que permite la captura de datos por teclado
import condicional from "prompt-sync";

//Instancia llamada condicion que va a permitir la captura de datos
const condicion = condicional();

// Entradas de datos que solicitan al usuario ingresar la nota final y el porcentaje de asistencia
let nota = condicion("Ingrese la nota final: ");
let asistencia = condicion("Ingrese el porcentaje de asistencia: ");

// Conversión de tipos de datos a número
nota = Number(nota);
asistencia = Number(asistencia);

// Condición de aprobación
if (nota >= 60 && asistencia >= 80)
    console.log("Aprobado");
else
    console.log("Reprobado");


//Pregunta de análisis: ¿Qué operador lógico garantiza que ambas condiciones se evalúen al mismo tiempo?

//El operador logico "&&" (AND) garantiza que ambas condiciones se evalúen al mismo tiempo.
