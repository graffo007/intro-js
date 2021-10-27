var someVar = '1'. result = null

switch (someVar){
    case 1:
        result = "number 1"
        break;
    case '1':
        result = 'sting 1'
        break
    default:
        result = "don't know"
        break;
}
console.log(result)