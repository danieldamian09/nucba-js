// Ejercicio 0
// const nombre = prompt("Por favor ingrese su nombre");
// alert("Hola " + nombre);

// const apellido = prompt("Por favor ingrese su apellido");
// alert("Hola " + nombre + " " +apellido);

// Ejercicio 1
// const numeroUno = prompt("ingrese un numero");
// const numeroDos = prompt("ingrese otro numero");

// const suma = parseInt(numeroUno) + parseInt(numeroDos);
// alert(suma);

// Ejercicio 2
// const yearActual = prompt("ingrese el año actual en formato xxxx");
// const edadActual = prompt("por favor ingrese su edad");

// const edadResultado = parseInt(yearActual) - parseInt(edadActual);

// alert(edadResultado);

// Ejercicio 3
// const numeroCuenta = "0345-6789-9838";
// const saldoInicial = 1500;

// const retiroMonto = prompt("por favor ingrese el monto a retirar");

// const balence = saldoInicial - parseInt(retiroMonto);

// alert("El saldo de la cuenta numero: " + numeroCuenta + " " + "es de " + balence)

// alert(`el saldo de la cuenta numero:  ${numeroCuenta} es de ${balence}`);


// Ejercicio 4
// const notaUno = prompt("por favor ingrese la primera nota");
// const notaDos = prompt("por favor ingrese la segunda nota");
// const notaTres = prompt("por favor ingrese la tercera nota");

// const notasSuma = parseInt(notaUno) + parseInt(notaDos) + parseInt(notaTres);

// const notasPromedio = notasSuma / 3;

// alert("el promedio de las 3 notas es de: " + notasPromedio);

// Ejercicio 5
// const medidaInicialMetros = parseFloat(prompt("Por favor ingrese una medida en metros"));

// const medidaPies = medidaInicialMetros * 3.28;

// const medidaCentimetros = medidaInicialMetros * 100;

// const medidaPulgadas = medidaInicialMetros * 39.3701;

// alert("La medida en pies es:  " + medidaPies);
// alert("La medida en centimetros es:  " + medidaCentimetros);
// alert("La medida en Pulgadas es:  " + medidaPulgadas);

// Ejercicio 6 
// const numero_uno = parseInt(prompt("por favor ingrese un numero"));
// const numero_dos = parseInt(prompt("por favor ingrese otro numero"));

// const sumaNumeros = numero_uno + numero_dos;

// alert("el resultado de la suma es: " + sumaNumeros);

// const numero_tres = parseInt(prompt("por favor ingrese un tercer numero"));

// const multipliNumeros = sumaNumeros * numero_tres;

// alert("el resultado final es de: " + multipliNumeros);

// Ejercicio 7
// const minutos = parseInt(prompt("por favor ingrese los minutos que desea convertir"));

// const segundos = minutos * 60;

// alert(minutos + " minutos es igual a " + segundos);


// Ejercicio 8
// const baseRectangulo = parseInt(prompt("por favor ingrese la medida de la base"));
// const alturaRectangulo = parseInt(prompt("por favor ingrese la medida de la altura"));

// const area = baseRectangulo * alturaRectangulo;

// alert("area total es: " + area);


// Ejercicio 9
// const base = parseInt(prompt("por favor ingresar la medida de la base"));
// const altura = parseInt(prompt("por favor ingresar la altura"));

// const area = base * altura / 2;

// alert("area total es: " + area);

// Ejercicio 10
const monto = parseFloat(prompt("ingrese el monto"));
const descuento = parseFloat(prompt("ingrese el porcentaje de descuento"));

const porcentajeDes = (100 - descuento) / 100;

const totalPagar = monto * porcentajeDes;
alert("total a pagar " + totalPagar);

