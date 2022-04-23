// pop up
alert("Hola Mundo")

// Variable- determina valor
// alumna = "elena"

// const - valor que nunca cambia
// console.log - imprime/ print- 

// EJEMPLOS
// const pi = 3.14

// console.log(pi);

let alumna = "Lucia"
let profesor= "Juan Carlos"
let edad= 20;

// let se usa para definir, avisa que es un new, no se puede redeclarar una variable
// a diferencia de var, let avisa si se creo esa variable anteriormente, evitando romper el sistema. Var ya casi no se usa
alumna= "eugenia"

console.log( "La alumna " + alumna + " tiene " + edad+ " y tiene de profe a : "+ profesor);

// Variables que estan bien

// let Alumno
// let _apellido
// let $edad
// let nombreApellido = "camel Case"
// let nombre_apellido ="snake case"
// let NombreApellido = "Pascal Case"

// Variables que estan mal

// let 1nombre : empezar con numero
// let nombre-_apellido : esta mal porque resta 
// let this, super, beak : son palabras reservadas

////TIPOS DE DATOS - STRINGS

let str1 = "string con comillas dobles "
let str2 = 'string con comillas simples'
let str3 = `string con Backticks`

let str4 = str1 + str2

let str5 = `${str1} y ademas ${str2}`
let str6 = str1 + " y ademas " + str2;
console.log( str4)

// Numeros
let numerito = 2
let numer2 = 3.14

console.log(numerito + "y ademas " + numer2);

// numero1 y numero 2 estan hardcodeanos, es decir los valores ya estan dichos
// yo quiero meter los valores
//  prompt: funcion que muestra mje solicitando completar, pero deuvelve string NO SIRVE PARA SUMA
// el + muestra string texto
// parseInt: solicita convertir string en number

// let numero1 = parseInt (prompt ("mete el numero 1"))
// let numero2 = parseInt (prompt ("mete el numero 2"))
// let resta = numero1 - numero2
// let suma = numero1 + numero2
// let multiplicacion = numero1 * numero2
// let division = numero1 / numero2

// parseFloat decimos que la variable es flotante, toma todo lo que ingresamos decimales, enteros etc
let nombre = prompt ("Como te llamas?")
let numero1 = parseFloat (prompt ("mete el numero 1"))
let numero2 = parseFloat (prompt ("mete el numero 2"))
let resta = numero1 - numero2
let suma = numero1 + numero2
let multiplicacion = numero1 * numero2
let division = numero1 / numero2


console.log("calculadora")
console.log("Hola " + nombre)
console.log("La suma es :" + suma)
console.log("La resta es :" + resta)
console.log("La multiplicación es :" + multiplicacion)
// alert para pop up

//booleanos - cod binario T F
let verdadera = true
let falso = false

let respuesta = 3==4
// == (este es igual a este)
console.log(respuesta)

