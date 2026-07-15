let carro = {
  marca: "golf",
  modelo: "Volkswagen Golf GTI",
  ano: 2026,
  cor: "Preto",
  placa: "gta-57711"
}
console.log(carro)
delete carro.placa
console.log(carro)
console.log("placa" in carro)