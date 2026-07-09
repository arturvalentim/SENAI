let nome = "jarizinhodasensi"
let idade = 20
let altura = 1.75
let peso = 70

let imc = peso / (altura * altura)
let maiorDeIdade = idade >= 18
let imcAbaixoDe25 = imc < 25
let nomeMaiorQue3Letras = nome.length > 3


console.log(`A pessoa ${nome} é maior de idade? ${maiorDeIdade}`)
console.log(`O IMC de ${nome} está abaixo de 25? ${imcAbaixoDe25}`)
console.log(`O nome ${nome} tem mais de 3 letras? ${nomeMaiorQue3Letras}`)
console.log(`O IMC calculado é ${imc.toFixed(2)}`)