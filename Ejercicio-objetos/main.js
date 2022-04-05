// -Crear la clase constructora "Zapatillas". Debe aceptar como parámetros Marca, color y talle.
// -Crear, como mínimo, 5 objetos con esta clase.
// -Crear una función que acepte como parámetro un objeto. Esa función debe imprimir en consola la marca, el color y el talle del objeto que le pasamos.
// -La impresión en consola debe ser friendly para el usuario, no solo los datos sueltos.

class Zapatillas {
	constructor(marca, color, talle) {
		this.marca = marca;
		this.color = color;
		this.talle = talle;
	}
}

const zapatillasNike = new Zapatillas("Nike", "blanco", "42");
const zapatillasAdidas = new Zapatillas("Adidas", "azul", "37");
const zapatillasFallen = new Zapatillas("Fallen", "negro", "41");
const zapatillasVans = new Zapatillas("Vans", "negro", "38");
const zapatillasReebok = new Zapatillas("Reebok", "gris", "40");

const imprimirZapatilla = (zapatilla) => {
  console.log(`Marca: ${zapatilla.marca}`);
  console.log(`Color: ${zapatilla.color}`);
  console.log(`Talle: ${zapatilla.talle}`);
};

imprimirZapatilla(zapatillasNike);
imprimirZapatilla(zapatillasAdidas);
imprimirZapatilla(zapatillasFallen);
imprimirZapatilla(zapatillasVans);
imprimirZapatilla(zapatillasReebok);


const capturarDataFormularios = e => {
	console.log(e);
	e.preventDefault();
}

capturarDataFormularios()