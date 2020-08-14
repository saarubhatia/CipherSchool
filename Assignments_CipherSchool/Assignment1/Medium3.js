function removeDups(arr) {
    let uniqueChars = arr.filter((char, index) => {
        return arr.indexOf(char) === index;
    });
    console.log(uniqueChars);
}
removeDups([1, 0, 1, 0]);
removeDups (["The", "big", "cat"]);
removeDups (["John", "Taylor", "John"]);