let compras = []


compras.push('arroz')
compras.push('feijão')
compras.push('leite')
compras.push('pão')
compras.push('açúcar')

console.log('Lista de compras inicial')


compras.forEach((item, indice) => {
  console.log(`${indice + 1}. ${item}`)
})


console.log('\nArroz está na lista?', compras.includes('arroz'))

let itemRemovido = compras.pop()

console.log('Item removido', itemRemovido)


console.log('Lista de compras atualizada')

compras.forEach((item, indice) => {
  console.log(`${indice + 1}. ${item}`)
})

console.log('Total de itens:', compras.length)