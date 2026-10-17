
const billInput = prompt("Enter the bill amount:", "100");
const tipInput = prompt("Enter the tip percentage:", "15");
const bill = Number(billInput);
const tipPercentage = Number(tipInput);

if (billInput === null || tipInput === null || billInput.trim() === "" ||
    tipInput.trim() === "" || !Number.isFinite(bill) ||
    !Number.isFinite(tipPercentage) || bill < 0 || tipPercentage < 0) {
  console.log("Please enter valid, non-negative numbers.");
} else {
  const tipAmount = bill * tipPercentage / 100;
  let total = bill;
  total += tipAmount;
  console.log(`Subtotal: $${bill}`);
  console.log(`Tip Percentage: ${tipPercentage}%`);
  console.log(`Calculated Tip: $${Number(tipAmount.toFixed(2))}`);
  console.log(`Total Amount to Pay: $${Number(total.toFixed(2))}`);
}
