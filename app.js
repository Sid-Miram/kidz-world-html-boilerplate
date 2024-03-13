
var cartValue = document.getElementById("cart-value");
var cartButton = document.querySelector("#cart");

var addButtons = document.querySelectorAll(".button");

var items = [
  {
    name: "This was our pact",
    quantity: 0,
    dollars: 7,
    cents: 49,
  },
  {
    name: "The famous five",
    quantity: 0,
    dollars: 4,
    cents: 59,
  },
  {
    name: "Matilda",
    quantity: 0,
    dollars: 6,
    cents: 80,
  },
  {
    name: "Harry Potter",
    quantity: 0,
    dollars: 10,
    cents: 0,
  },
  {
    name: "For Young Readers",
    quantity: 0,
    dollars: 7,
    cents: 29,
  },
  {
    name: "Wimpy Kid - DIY",
    quantity: 0,
    dollars: 4,
    cents: 99,
  },
  {
    name: "Dart Board",
    quantity: 0,
    dollars: 17,
    cents: 49,
  },
  {
    name: "Connect Four",
    quantity: 0,
    dollars: 19,
    cents: 99,
  },
  {
    name: "Jenga",
    quantity: 0,
    dollars: 20,
    cents: 99,
  },
  {
    name: "Monopoly",
    quantity: 0,
    dollars: 19,
    cents: 49,
  },
  {
    name: "Bookmarks",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Birthday Card",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Stuffed toys",
    quantity: 0,
    dollars: 15,
    cents: 99,
  },
  {
    name: "Dream catcher drawing",
    quantity: 0,
    dollars: 18,
    cents: 49,
  },
];

function cartmodify() {
  let cart = 0;
  for (let i = 0; i < items.length; i++) {
    cart += items[i].quantity;
  }
  cartValue.textContent = cart;
}

for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener("click", () => {
    items[i].quantity++;
    cartmodify();
  });
}

let dollarmodify = 0;
let centsmodify = 0;

function pricemodify() {
  let totalPriceInCents = 0;

  for (let i = 0; i < items.length; i++) {
    totalPriceInCents += items[i].quantity * (items[i].dollars * 100 + items[i].cents);
  }
  dollarmodify = Math.floor(totalPriceInCents / 100);
  centsmodify = totalPriceInCents % 100;
}

cartButton.addEventListener("click", () => {
  pricemodify();

  for (let i = 0; i < items.length; i++) {
    if (items[i].quantity !== 0) {
      console.log(
        "Item name: " + items[i].name + " - Quantity: " + items[i].quantity
      );
    }
  }

  console.log("The total amount is " + dollarmodify + "$ and " + centsmodify + " cents");
});

