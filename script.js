let item = [250, 645, 300, 900, 50]

let i = 0;
for (let val of item)
    {
console.log('value at index ${i} = ${val}');
let offer = val / 10;
item[i] = item[i] - offer;
console.log('value after offer = ${val}');
i++

    }


