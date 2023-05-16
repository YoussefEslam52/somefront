let cart = [];

function addToCart(itemName, itemPrice, quantityInputId) {
	let quantityInput = document.getElementById(quantityInputId);
	let quantity = parseInt(quantityInput.value);
	if (quantity > 0) {
		let itemTotalPrice = itemPrice * quantity;
		let item = {name: itemName, price: itemPrice, quantity: quantity, total: itemTotalPrice};
		cart.push(item);
		updateCart();
		quantityInput.value = 0;
	}
}

function updateCart() {
	let cartTotal = 0;
	let cartItems = document.getElementById("cart-items");
	cartItems.innerHTML = "";
	for (let i = 0; i < cart.length; i++) {
		let item = cart[i];
		cartTotal += item.total;
		let li = document.createElement("li");
		let span1 = document.createElement("span");
		span1.appendChild(document.createTextNode(item.name + " x " + item.quantity));
		let span2 = document.createElement("span");
		span2.appendChild(document.createTextNode(item.total + " EGP"));
		li.appendChild(span1);
		li.appendChild(span2);
		cartItems.appendChild(li);
	}
	let cartTotalElement = document.getElementById("cart-total");
	cartTotalElement.innerHTML = "Total: " + cartTotal + " EGP";
}

function clearCart() {
	cart = [];
	updateCart();
}