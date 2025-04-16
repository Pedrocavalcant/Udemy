function cadastrar(usuarios, ...novosusuarios) {
    let totalusuarios = [
        ...usuarios,
        ...novosusuarios
    ]

    return console.log(totalusuarios)
    
}
let usuarios = ["Pedro", "Ana"]

let novosusuarios = cadastrar(usuarios, "Lucas", "Brauna")