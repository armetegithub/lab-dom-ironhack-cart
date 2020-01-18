let cartItems = [];
​
class CartItem {
  constructor(price) {
    this.price = price;
  }
}
​
cartItems = [new CartItem(20), new CartItem(20), new CartItem(20), new CartItem(20), new CartItem(20), new CartItem(20), new CartItem(20), new CartItem(20), new CartItem(20), new CartItem(20), new CartItem(20), new CartItem(20), new CartItem(20), new CartItem(20), new CartItem(500), new CartItem(120)];
// end of the data model
​
function paintCart() {
  const cartDOMEl = document.getElementById("cart");
  cartDOMEl.innerHTML = ""
​
  cartItems.forEach(cartItemInArray => {
    let cartItemDOMEl = document.createElement("li");
​
    cartItemDOMEl.innerHTML = `<span>${cartItemInArray.price} eur</span><button>Delete me</button>`;
​
    cartDOMEl.appendChild(cartItemDOMEl);
  });
}