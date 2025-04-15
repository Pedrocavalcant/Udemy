let lista = ["Pedro", "Mateus", "Sandro", "Maria", 15]

//console.log(lista)

console.log(lista.join("/ "))
console.log(lista.pop())
console.log(lista.join("/ "))
console.log(lista.shift())
console.log(lista.join("/ "))
lista[0] = "Lucas"
console.log(lista.join("/ "))
if(lista.indexOf("Lucas") > -1) {
   console.log("Esse item está na lista") 
} else{
    console.log("Não encontrado")
}
