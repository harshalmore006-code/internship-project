
const output = document.getElementById("output");
let result = "";

function rectangleArea(length = 5, width = 4) {
  return length * width;
}
const rectangleAreaArrow = (length = 5, width = 4) => length * width;

result += `Standard Function Area (Default 5x4): ${rectangleArea()}\n`;
result += `Arrow Function Area (Custom 10x3): ${rectangleAreaArrow(10, 3)}\n`;

{
  let blockVar = "Only available inside this block";
  result += `Inside block: ${blockVar}\n`;
}
try {
  result += blockVar;
} catch (error) {
  result += `Scope Test Error: ${error.name}: blockVar is not defined (when accessed outside block)`;
}
output.textContent = result;
