// include.js
import { prices } from './prices.js';

window.onload = function() {
    var notFound = []; // Initialize empty array
    var priceTypes = ["bust", "half", "full", "dndhalf", "dndfull", "dndparty"];

    for (var i = 0; i < priceTypes.length; i++) {
        var priceInput = document.querySelector(".price .price_" + (i+1) + "_input");
        if (priceInput) {
            priceInput.innerHTML = prices[priceTypes[i]] ? prices[priceTypes[i]].toFixed(2) : 'xx.xx';
        } else {
            notFound.push('price_' + (i+1) + '_input');
        }
    }

    // Log the notFound array to the console
    if (notFound.length > 0) {
        console.log('Elements with classes "' + notFound.join(', ') + '" not found');
    }
}
