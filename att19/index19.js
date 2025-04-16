//some - verifica se existe determinada informacao na variavel

let nomes = ['Pedro', 'Lucas', 'Mateus']

console.log(nomes.some(nome => nome === 'Pedro'))

//every - verifica  todos

let name = [
    {nome: 'Pedro', idade: 20},
    {nome: 'Mateus', idade: 17},
    {nome: 'Ana', idade: 22}
]

console.log(name.every(nome => nome.idade >= 16))

if(name.every(nome => nome.idade >= 16)) {
    console.log('Todos sao maiores de 16')
} else{
    console.log('Ops, alguem e de menor')
}

