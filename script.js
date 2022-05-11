//Matrizes ~~~ Dados
//Exemplos sobre os diferentes tipos de dados em JavaScript

//String
var string = 'Isso é uma string'
console.log(string)

//Número
var num = 100
console.log(num)

//Boleano (verdadeiro ou falso)
var bool = true
console.log(bool)

//Indefinido
//Undefined: nenhum valor foi atribuido a uma variável
var object
console.log(object)

//Reatribuindo o mesmo objeto indefinido para nulo
//Nulo
//Null:  nada ou vazio
object = null
console.log(object)

//--------------------------------------------------------------------------------------------------

//Matrizes = Arrays = lista []


var arr = [23, "oi", bool, [34, 87]]
console.log(arr)
console.log(arr.length)

console.log(arr[3][1])

arr.push("olá")
console.log(arr)
console.log(arr.length)

arr.pop()
console.log(arr)
console.log(arr.length)


arr = []
console.log(arr)
console.log(arr.length)