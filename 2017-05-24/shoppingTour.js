var input = [
  "OH OH OH BC SK",
  "OH BC BC SK SK",
  "BC BC BC BC BC BC OH OH",
  "SK SK BC"
];

var tours = {
  OH: {
    name: "Opera House Tour",
    price: 300
  },
  BC: {
    name: "Sydney Bridge Climb",
    price: 110
  },
  SK: {
    name: "Sydney Sky Tower",
    price: 30
  },
  getItem: function(key) {
    return this[key];
  },
  getPrice: function(key) {
    return this.getItem(key).price;
  }
};

var promotions = {
  operaPromotion: function(quantityList) {
    numberOfFreeTickets = Math.floor(quantityList.OH / 3);
    return numberOfFreeTickets * tours.getPrice("OH");
  },
  bridgePromotion: function(quantityList) {
    discountPrice = 0;
    if (quantityList.BC > 4) {
      discountPrice = quantityList.BC * 20;
    }

    return discountPrice;
  },
  skyPromotion: function(quantityList) {
    return Math.min(quantityList.OH, quantityList.SK) * tours.getPrice('SK');
  }
};

var shoppingCarts = [];

console.log('Items         total');
for (var i in input) {
  tourList = input[i].split(' ');
  shoppingCarts[i] = new ShoppingCart(promotions);
  for (var tour of tourList) {
    shoppingCarts[i].add(tour);
  }
  console.log(input[i] + ' = $' + shoppingCarts[i].calculateTotal().toFixed(2));
}

function ShoppingCart(promotions) {
  this.subtotal = 0;
  this.discount = 0;
  this.promotions = promotions;
  this.itemsCount = {
    OH: 0,
    BC: 0,
    SK: 0
  };

  this.calculateSubtotal = function() {
    subtotal = 0;
    for (var itemCount in this.itemsCount) {
      subtotal += this.itemsCount[itemCount] * tours[itemCount].price;
    }
    return subtotal;
  };

  this.calculateTotal = function() {
    this.discount = this.calculateDiscount();
    this.subtotal = this.calculateSubtotal();
    return this.subtotal-this.discount;
  };

  this.calculateDiscount = function() {
    discount = 0;
    for (var promotion in this.promotions) {
      // console.log(this.promotions[promotion](this.itemsCount));
      discount += this.promotions[promotion](this.itemsCount);
    }
    return discount;
  };

  this.add = function(nameOfTour) {
    listOfTours = Object.keys(tours);
    if (listOfTours.includes(nameOfTour)) {
      this.itemsCount[nameOfTour]++;
    } else {
      console.log("The tour code: " + nameOfTour + " is not valid");
    }
  };
}
