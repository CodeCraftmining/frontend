let str = "JavaScript";

let size = 0;
for (let i of str) { //iterator characters 
   console.log("i=", i);
   size++;
}

console.log("string size = ", size);