let arr = [5, 6, 2, 101, 3];
const output = arr.reduce((prev, curr)  => {
    return prev > curr ? prev : curr;

});
console.log(ouput);