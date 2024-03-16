let item = [250, 645, 300, 900, 50]

for (let i = 0; i < item.length; i++)  {
    let offer = item[i] / 10;
    items[i] -= offer;
}

console.log(items);