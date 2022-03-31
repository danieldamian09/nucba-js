// Comeinzo en Nucba de la parte de JS
const ingredientes = [
	"harina",
	"queso",
	"tomate",
	"Oregano",
	"Jamon",
	"cuat",
	"rat",
];

const cadaIngrediente = (datos) => {
	const ingredientePar = [];
	const ingredienteImpar = [];
	for (i = 0; i < datos.length; i++) {
		const ingrediente = datos[i].length;

		if (ingrediente % 2 == 0) {
			ingredientePar.push(datos[i]);
		} else {
			ingredienteImpar.push(datos[i]);
		}
	}

  console.log(`Los Ingredientes pares son: ${ingredientePar}`);
  console.log(`Los Ingredientes inpares son: ${ingredienteImpar}`);
};


cadaIngrediente(ingredientes);
