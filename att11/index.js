/*localStorage.setItem("nome", "Pedro")
console.log(localStorage.getItem("nome"))
localStorage.removeItem("nome")
localStorage.setItem("nome", "Mateus")
localStorage.setItem("sobrenome", "Cavalcante")
console.log(localStorage.getItem("nome"))
console.log(localStorage.getItem("sobrenome"))*/

/*localStorage.nome = "Pedro"
localStorage.sobrenome = "Cavalcante"

console.log(localStorage.nome)
console.log(localStorage.sobrenome)*/

var name = ''

if (typeof localStorage.name == 'undefined') {
    localStorage.name = prompt("Digite o seu nome")
}

name = localStorage.name

document.getElementById('name').innerHTML = name