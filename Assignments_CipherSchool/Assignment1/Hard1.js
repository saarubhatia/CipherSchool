// I HAVE TRIED IT USING TWO WAYS
// 1.)REGEX

function realType(obj){
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
console.log(realType (1));
console.log(realType ("a"));
console.log(realType (true));
console.log(realType ([]));
console.log(realType (null));

//2)constructor.name

// function realType(obj){
//     var value = obj.constructor.name 
//     return value;
// }
// console.log(realType (1));
// console.log(realType ("a"));
// console.log(realType (true));
// console.log(realType ([]));

