
const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

console.log("--- Initializing Inventory System ---");
const nameInput = prompt("Enter a new product name:", "Monitor");
const priceInput = prompt("Enter the product price:", "150");

if (nameInput === null || priceInput === null || nameInput.trim() === "" ||
    priceInput.trim() === "" || !Number.isFinite(Number(priceInput)) ||
    Number(priceInput) <= 0) {
  console.log("Invalid or missing product details. No product was added.");
} else {
  const productName = nameInput.trim();
  const productPrice = Number(priceInput);
  let exists = false;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === productName.toLowerCase()) {
      exists = true;
      break;
    }
  }
  if (exists) {
    console.log("A product with that name already exists. No product was added.");
  } else {
    inventory.push({ name: productName, price: productPrice });
    console.log(`[Prompt executed: User adds "${productName}" at "$${productPrice}"]`);
  }
}

function getCategory(price) {
  if (price < 50) return "Budget";
  else if (price < 200) return "Standard";
  else return "Premium";
}
function categoryLabel(price) {
  switch (getCategory(price)) {
    case "Budget": return "Budget";
    case "Standard": return "Standard";
    case "Premium": return "Premium";
    default: return "Unclassified";
  }
}
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].price <= 0) continue;
    total += items[i].price;
  }
  return total;
}
const calculateAfterTaxAndDiscount = (amount, taxRate = 0.05, discountRate = 0.10) =>
  amount + amount * taxRate - amount * discountRate;

console.log("\n--- Processing Inventory Roster (forEach) ---");
inventory.forEach(function (product) {
  console.log(`* Item: ${product.name} ($${product.price}) -> Category: ${categoryLabel(product.price)}`);
});

const totalValue = calculateTotal(inventory);
const affordableItems = inventory.filter(product => product.price < 200);
const formattedReport = inventory.map(product => `${product.name.toUpperCase()}: $${product.price}`);

console.log("\n--- Financial Analytics ---");
console.log(`Total Inventory Value: $${totalValue}`);
console.log(`Filtered Affordable Items (Under $200): ${JSON.stringify(affordableItems.map(item => item.name))}`);
console.log(`Formatted Report List: ${JSON.stringify(formattedReport)}`);
console.log(`Estimated Total After 5% Tax and 10% Discount: $${calculateAfterTaxAndDiscount(totalValue).toFixed(2)}`);
