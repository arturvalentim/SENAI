let filme = {
    titulo: "vingadores ",
    diretor: "joao",
    ano: 2026,
    genero: "ação"
}

for (let chave in filme ){
    console.log(`${chave} : ${filme[chave]}`)
}