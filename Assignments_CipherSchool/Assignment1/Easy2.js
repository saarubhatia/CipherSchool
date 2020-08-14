//normal js function
function addUp(num) {
    if (num > 1)
        return num + addUp(num - 1);
    else
        return 1;
}
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));