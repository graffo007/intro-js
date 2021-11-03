function counter(firstValue){
    var currentValue = firstValue

    var increment = function(step){
        currentValue += step
        console.log("el valor actual es:  ", currentValue);
    }

    var decrement = function(step){
        currentValue -= step
        console.log("el valor actual es:  ", currentValue);
    } 
    return {inc: increment,
            dec: decrement}

}

var exampleCounter = counter(10)
exampleCounter.inc(1)
exampleCounter.inc(2)
exampleCounter.inc(5)
console.log("///////////////////////////////////////")
exampleCounter.dec(5)
exampleCounter.dec(2)
exampleCounter.dec(1)