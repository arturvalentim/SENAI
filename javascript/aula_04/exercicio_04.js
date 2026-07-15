let filmes = [
    {titulo: "pantera negra ", ano:2018, genero:"açao"},
    {titulo:"carros 3 ", ano:2019, genero:"animaçao"},
    {titulo: "toystore5",ano:2026,genero:"animaçao"},
]
filmes.forEach(function(filme) {
    console.log(`${filme.titulo}-${filme.ano}-${filme.genero}`)
}
)