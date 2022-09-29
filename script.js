const frutas = ["laranja", "limão", "uva", "maracujá"];

// Exercicio 1 (assim fazendo 1 por 1)

// const fruta1 = document.getElementById("fruta-1")
// fruta1.innerHTML = frutas [0]

// Fazendo com laços (código mais enxuto)

for (let i = 0; i < frutas.length; i++){
    let fruta = document.getElementById(`fruta-${[i + 1]}`)
    fruta.innerHTML = frutas[i]
}

//Exercício 2

function insereItem(event){
    event.preventDefault()

    const input = document.getElementById("meu-input")
    const lista = document.getElementById("lista-de-frutas")

    const itemLista = document.createElement("li")
    const itemTexto = document.createTextNode(input.value)
    itemLista.appendChild(itemTexto)
    
    lista.insertAdjacentElement('beforeend', itemLista)
}

// Exercício 3

const input = document.getElementById("fruta")
const fruta1 = document.getElementById("fruta-1")

function insereItem(event){
    event.preventDefault()

    const input = document.getElementById("meu-input")
    const lista = document.getElementById("lista-de-frutas")

    const itemLista = document.createElement("li")
    const itemTexto = document.createTextNode(input.value)
    itemLista.appendChild(itemTexto)
    
    lista.insertAdjacentElement('beforeend', itemLista)
}








