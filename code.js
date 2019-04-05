// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}
function sayHello(input){
    if (typeof input !== "string" || input==="" || !isNaN(parseFloat(input))){
        return "Hello, World!";
    }else {
        return "Hello, " + input + "!";
    }
}
function isFive(input){
    if(input == 5) {
        return true;
    }
    return false;
}
function isEven(input){
    if(parseFloat(input) % 2 === 0) {
        return true;
    }
    return false;
}