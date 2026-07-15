let livro = {
    titulo: "pequena sereia ",
    autor : "abrao shimit",
    ano : 1994,
    pagina : 2,
}
console.log(`o livro${"livrotitulo"}do autor ${"livroautor"}lançado em ${"livroano"} de ${"livropaginas"}paginas`)
livro.editora = "idistribuçao"
livro.ano = 2022
delete livro.pagina

console.log(livro)