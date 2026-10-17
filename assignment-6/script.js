
const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
];
const output = document.getElementById("output");
let result = "-- All Products (forEach) --\n";
products.forEach(function (product) {
  result += `Item: ${product.name} - Price: $${product.price}\n`;
});

const affordableProducts = products.filter(function (product) {
  return product.price < 50;
});
result += "\n-- Filtered Products (Price < $50) --\n";
result += JSON.stringify(affordableProducts, null, 2) + "\n";

const productTags = products.map(function (product) {
  return `${product.name.toUpperCase()} costs $${product.price}`;
});
result += "\n-- Mapped Product Tags (map) --\n";
result += JSON.stringify(productTags, null, 2);
output.textContent = result;
