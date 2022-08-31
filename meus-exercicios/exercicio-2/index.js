const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log(minhaString)
console.log("Número de caracteres da frase com espaço", minhaString.length) 
console.log("Número de caracteres da frase sem espaço", minhaString.trim().length) 

const novaString = minhaString.replace("________","sticioso")
console.log("Nova frase:", novaString)
