//Condicional múltiple
//Un programa debe clasificar la velocidad de un vehículo:
//• Si la velocidad es menor a 30 → “Muy lento”
//• Entre 30 y 60 → “Velocidad moderada”
//• Entre 61 y 100 → “Rápido”
//• Mayor a 100 → “Muy rápido”

// Se importa la bliblioteca "prompt-sync" que permite la captura de datos por teclado
import condicional from "prompt-sync";

//Instancia llamada condicion que va a permitir la captura de datos
const condicion = condicional();

//Datos de entrada para velocidad del vehiculo
let velocidad_veh = condicion("Ingrese la velocidad del vehiculo: ")

//Condicionales segun la velocidad del vehiculo e impresión del resultado
if (velocidad_veh < 30 ) 
    console.log(`La velocidad del vehiculo es ${velocidad_veh}, muy lento!`)
if (velocidad_veh > 30 && velocidad_veh <= 60)
    console.log(`La velocidad del vehiculo es ${velocidad_veh}, Su velocidad es moderada `)
if (velocidad_veh > 61 && velocidad_veh <= 100)
    console.log(`La velocidad del vehiculo es ${velocidad_veh}, Su velocidad es rápida`)
if (velocidad_veh > 100)
    console.log(`La velocidad del vehiculo es ${velocidad_veh}, Su velocidad es muy rápida`)