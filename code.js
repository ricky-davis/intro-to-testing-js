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
        return Boolean(input);
    }
    return false;
}