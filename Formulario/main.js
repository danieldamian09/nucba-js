const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = Object.fromEntries(new FormData(e.target));

	console.log(data);
});
