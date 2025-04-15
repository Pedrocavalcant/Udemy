function entrar() {

    var area = document.getElementById('area')
    var texto = prompt('Digite o seu nome')

    if(texto == '' || texto == null) {
        alert('Seu nome não foi digitado')
         area.innerHTML = 'Bem vindo...'
    } else{
        area.innerHTML = 'Bem vindo ' + texto

    }

}

function entrar2(nome, idade) {

    var area=document.getElementById('area2')
    var texto = prompt('Digite o seu sobrenome')
    area.innerHTML = 'Bem vindo ' + nome + " " + texto + " sua idade é: " + idade + " anos" 

}