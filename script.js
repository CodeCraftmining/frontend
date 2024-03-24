function countVowels(str) {
    let count = 0;
    for (const char of str) {
        console.log(char);
     if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        count++;
     }
    }
return count;
}

const countVow = (str) => {
    
        let count = 0;
        for (const char of str) {
            console.log(char);
         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
         }
        }
        console.log(count);
    };
