let animais = ['gato','cachorro']

console.log('Array inicial', animais)

// Adicionando "pássaro"
animais.push('pássaro');
console.log('Após push("pássaro")', animais)

// Adicionando "peixe"
animais.push('peixe')
console.log('Após push("peixe")', animais)
let removido = animais.pop()
console.log('Elemento removido', removido)
console.log('Array após pop()', animais)