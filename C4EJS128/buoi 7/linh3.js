let result = '';
const cot = 9;
const hang = 9;
for (let i = 1; i<= hang; i++) {
    for (let j = 1; j<= cot; j++) {
        if((i<= hang + 1 -j && j <= hang) ) {
            result += '*';
        } else {
            result += ' ';
        }
    }
    result += '\n';
}
console.log(result);