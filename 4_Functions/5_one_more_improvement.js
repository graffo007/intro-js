function onlyNumbers(elem){
    return typeof(elem) == 'number' && !isNaN(elem)
}

function add(acc, next){
    return acc + next
}

function megasum(){
    var argsArray= Array.from(arguments)    
    return argsArray.filter(onlyNumbers).reduce(add)
}

console.log(megasum(1))
console.log(megasum(1,2,3))
console.log(megasum(1,2,3,4))
console.log(megasum(1,"hola",3))
console.log(megasum(1,"hola",2,NaN))