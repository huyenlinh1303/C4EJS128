let result = '';
const cot = 20;
const hang = 20;
for (let i = 1; i<= hang; i++) {
    for (let j = 1; j <= cot; j++) {
        if (j<= i) {
            result += '*';

        } else {
            result += ' ';
        }
    }
    result += '\n';
}
console.log(result);