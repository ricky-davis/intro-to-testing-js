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