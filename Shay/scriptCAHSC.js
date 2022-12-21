<<<<<<< HEAD
var cart = [];

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  var cartList = document.getElementById('cart');
  cartList.innerHTML = '';
  for (var i = 0; i < cart.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = cart[i];
    cartList.appendChild(li);
  }
}

setInterval(function() {
  var textElement = document.getElementById("animated-text");
  var currentColor = textElement.style.color;
  var newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  textElement.style.color = newColor;
}, 200); 

=======
var cart = [];

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  var cartList = document.getElementById('cart');
  cartList.innerHTML = '';
  for (var i = 0; i < cart.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = cart[i];
    cartList.appendChild(li);
  }
}

setInterval(function() {
  var textElement = document.getElementById("animated-text");
  var currentColor = textElement.style.color;
  var newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  textElement.style.color = newColor;
}, 200); 

>>>>>>> 775234b58baa6c1f46a63d1e421cb74797980a15
