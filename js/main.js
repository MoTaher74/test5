let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let total = document.getElementById("total");
let result = quantity * price;
total.innerHTML = result;

quantity.addEventListener("change", () => {
    total.innerHTML = quantity.value * price.value;
});