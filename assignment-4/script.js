
const output = document.getElementById("output");
let result = "-- Multiplication Table of 5 --\n";
for (let i = 1; i <= 5; i++) result += `5 x ${i} = ${5 * i}\n`;

result += "\n-- First number > 10 divisible by 6 --\n";
let number = 11;
while (true) {
  if (number > 10 && number % 6 === 0) {
    result += `Found: ${number}\n`;
    break;
  }
  number++;
}

result += "\n-- do...while with continue --\n";
let count = 0;
do {
  count++;
  if (count === 2 || count === 4) continue;
  result += `Number: ${count}\n`;
} while (count < 5);
output.textContent = result;
