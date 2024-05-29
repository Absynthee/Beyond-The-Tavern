export var prices = {
    "bust": 42,
    "half": 54,
    "full": 66,
    "dndhalf": 102,
    "dndfull": 120,
    "dndparty": 144
};

// if adding a sale, change the discount value.
// i.e. 0.8 = 20% discount.
  var discount = 1; 
  
  Object.keys(prices).forEach(function(key) {
    prices[key] = prices[key] * discount;
  });
  