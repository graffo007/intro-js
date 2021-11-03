// The mix of high order functions, plus dictaonaries with functions (objects), plus IIFE
// allow us to create encapsulated module (mudule pattern)

var counter =(function(firstValue){

    var currentValue = firstValue

    var logger = function(){
        console.log("el valor actual es:  ", currentValue);
    }

    var increment = function(step){
        currentValue += step
        logger()
    }
    var decrement = function(step){
        currentValue -= step
        logger()
    }
 
    return {inc: increment,
            dec: decrement}
})(0)

counter.inc(2)
counter.dec(3)