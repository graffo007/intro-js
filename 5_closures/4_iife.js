//immeduately invoked function expression

var someObject ={}

someObject.counter = (function(){
    var counter = 0
    return function(){
        counter++
        console.log("el numero de veces va en  ", counter);
    }

})()

someObject.counter()
someObject.counter()
someObject.counter()