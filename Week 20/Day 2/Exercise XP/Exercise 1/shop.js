let shopProducts = require('./product.js');
//console.log(shopProducts);

let productSearch = function(productName)
{
   let returnedValue = shopProducts.find(product => product.name == productName)
    return returnedValue;
}

console.log(productSearch('phone'));
console.log(productSearch('laptop'));
console.log(productSearch('Jeans'));
console.log(productSearch('fridge'));




