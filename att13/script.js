const pessoa = {
    nome: "Pedro",
    sobrenome: "Cavalcante",
    idade: 20,
    cargo:"Técnico de sistema"
}

//alert(pessoa.nome)

pessoa.nome = "Lucas"

alert(pessoa.nome)

let nomes = ['Pedro', 'Cavalcante', 20]

let {1:sobrenome} = nomes

let {0:primeironome, 2:idade} = nomes

