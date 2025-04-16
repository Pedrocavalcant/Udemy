/*let primeiros = [1, 2, 3]
let numeros = [...primeiros, 4, 5, 6]

let pessoa = {
    nome: "Pedro",
    idade: 20,
    cargo: "Desenvolvedor"
}

let novaPessoa = {
    ...pessoa,
    anoAtual:2050,
    cidade: "Campo grande"
}

console.log(novaPessoa)*/

function cadastroPessoa(info) {
    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '20251604'
    }

    return novosDados

}

cadastroPessoa({nome: 'Pedro', sobrenome: 'Cavalcante', anoInicio: 2004})


console.log(cadastroPessoa())