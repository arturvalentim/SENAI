let animais = ['gato', 'cachorro']

animais.push('pássaro')
animais.push('peixe')
console.log('Após push', animais)


let removidoPop = animais.pop()
console.log('Elemento removido com pop', removidoPop)
console.log('Array após pop', animais)


animais.unshift('leão')
console.log('Após unshift', animais)

let removidoShift = animais.shift()
console.log('Elemento removido com shif', removidoShift)
console.log('Array após shift', animais)