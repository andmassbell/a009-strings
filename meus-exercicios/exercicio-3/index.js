const frase1 = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase1)

const trocaFrase = frase1.replace("verde","rosa").replace("azul","laranja")
console.log(trocaFrase)

console.log("Inclui verde?", trocaFrase.includes("verde"))
console.log("Inclui laranja?", trocaFrase.includes("laranja"))
