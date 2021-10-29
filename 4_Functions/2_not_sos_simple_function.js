function megasum(){
    var argsArray =  Array.from(arguments)
    console.log(argsArray)
    var sum = 0
   
    for(var i = 0; i < arguments.length; i++){
        if(typeof(arguments[i]) == 'number')
        sum += arguments[i]
    }
    return sum
}

console.log(megasum(1))
console.log(megasum(1,2,3))
console.log(megasum(1,2,3,4))
console.log(megasum(1,"hola",3))