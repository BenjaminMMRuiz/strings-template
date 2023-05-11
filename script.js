//let pessoa = prompt("digite seu nome? ")
//let cor = prompt("digite sua cor preferida? ")
//let citacao = prompt ("qual sua citacao favorita:")
//let fraseConcstenacao = " A cor favorita de " + pessoa + " é " + cor + ". \"" + citacao + "\""

//let fraseTempleteString = `A cor favorita de ${pessoa} é ${cor}. "${citacao}"`

//console.log("Concatenação: ", fraseConcstenacao)
//console.log("Templete string:", fraseTempleteString)

//let fraseQuebraLinha = "Nome: " + pessoa + "\nCor favorita: " +cor
//let fraseQuebralinhaTempleteString  = `Nome: ${pessoa}
//Cor favorita: ${cor}`

//console.log(fraseQuebralinhaTempleteString)

//console.log("Benjamin" .toUpperCase())
//console.log("Benjamin" .toLowerCase())


//console.log("Benjamin" .length)

//console.log("Benjamin" .includes("n"))
//----------------------------------------------------------------


let usuario = prompt("digite seu nome: ")
let email = prompt("digite seu e-mail: ")
//const novaFrase = novaFrase.replaceAll("R", "X")
let quantidade = usuario.length
let verificacao = email.includes("@")



console.log (`O e-mail ${email} foi cadastrado com sucesso.\nBoas vindas ${usuario}!! seu nome tem ${quantidade} de letras ${verificacao}`.replaceAll("r", "x")) 