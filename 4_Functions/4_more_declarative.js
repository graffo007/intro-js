function megasum(){
    var sum = 0
    var argsArray= Array.from(arguments)
    
    function onlyNumbers(elem){
        return typeof(elem) == 'number' && !isNaN(elem)
    }

    function add(elem){
        sum +=elem
    }

    argsArray.filter(onlyNumbers).forEach(add)

    return sum
}

console.log(megasum(1))
console.log(megasum(1,2,3))
console.log(megasum(1,2,3,4))
console.log(megasum(1,"hola",3))
console.log(megasum(1,"hola",2,NaN))