const input = document.querySelector("input#bin");

input.addEventListener("keyup", () => {
	let valueInput = input.value;
	valueInput = valueInput.split("");

	let lengthValue = valueInput.length;

	for (let i = 0; i < lengthValue; i++) {
		if (parseInt(valueInput[i]) !== 0 && parseInt(valueInput[i]) !== 1) {
			document.querySelector("div#warn").innerHTML =
				"Há um dígito que não é 0 nem 1, verifique para o receber o resultado esperado.";
		} else {
			document.querySelector("div#warn").innerHTML = "";
			if (lengthValue === 8) {
				let dec = parseInt(input.value, 2);
				document.querySelector("div#dec").innerHTML = `Resultado\n${dec}`;
			}
		}
	}
});
