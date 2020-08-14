//callback function used
function testJackpot(arr) {
    return arr.every(function(info){
        return info === arr[0];
    })
};
console.log(testJackpot(['@', '@', '@', '@']));
console.log(testJackpot(["abc", "abc", "abc", "abc"]));
console.log(testJackpot (["&&", "&", "&&&", "&&&&"]));
console.log(testJackpot (["SS", "SS", "SS", "sS"]));