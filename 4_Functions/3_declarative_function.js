var sum = 0

function acumulate(elem){
    if(typeof(elem) == 'number'){
        sum +=elem
    }
}

function megasum(){
    sum = 0
    var argsArray= Array.from(arguments)
    
    argsArray.forEach(acumulate)
    return sum
}

console.log(megasum(1))
console.log(megasum(1,2,3))
console.log(megasum(1,2,3,4))
console.log(megasum(1,"hola",3))