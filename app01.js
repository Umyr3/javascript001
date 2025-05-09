// Boas práticas
// Case sensitive
// Sintaxe básica e comentário
// Declaração de variáveis(var, let, const)

let nome = "Luka"
let idade = 24
// Console e Debug //debug = verificar falhas

console.log(nome)
console.log(idade) // log=histórico de algo, para segurança

nome = "Nico"
idade = "22"
console.log(nome, idade)

//Tipos de dados
//text == string
let cidade = "Americana"

// númerico 
let salario = 1500.35 

// boleana == boolean
let fumante = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)

// Operadores
//     Operador Atribuição (=)
//     Operadores aritméticos (+, -, /, *, %)
console.log(10 + 10)
let n1 = 10
let n2 = 5
console.log(n1 + n2) //soma
console.log(n1 - n2) //subtração
console.log(n1 / n2) //divisão
console.log(n1 * n2) // multiplicação
//     Operadores relacionais
//     Operadores lógicos

// Estrutura
//     Estrutura de controle/decisão
//     Laços de repetição

let controle = 0
while(controle <= 10) {
    console.log("Senac Americana")
    controle = controle + 1
}

controle = 1 // definição de variavel de controle
while(controle <= 100){ //condição
    console.log(controle)
    controle = controle + 2 //incremento - é decremento
}

// mostrar 10 vezes "Senac Americana"

for (let i=1; i<=10; i=i+1){
    console.log("Senac Americana")
}

for(let i=1; i<=50; i=i+1){
    console.log(i)
}

// Arrays 

// Funções básicas
// Escopo


// Alterar conteúdo e atributos *
// incluir js em página html *
// Eventos *
// DOM *
// Objeto
// parâmetros e retorno*

// Programação assíncrona***
// API Fetch ***

// JSON ****
// funções modernas (arrow functions) ****


// Spread e REST  *************
