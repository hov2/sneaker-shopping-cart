// declare variables
var numItems = 0;
var total = 0.00;

// initialize cart
document.getElementById("cartText").innerHTML = "<strong>CART</strong>: " + numItems + " items | $" + total;

// store inventory object
var inventory = {
  sacais: 140.00,
  lebrons: 175.00,
  janoski: 110.00,
  jordans: 160,
};

// This "cash register" function is called whenever the user clicks on a sneaker photo
// Adds sneakers to the cart and updates total
// Version 2 would perhaps remove some calculations from addSneaker() and separate into a different function

function addSneaker(name) {
  numItems = numItems + 1;
  var price = inventory[name];
  total = total + price;

  var cart = "item" + numItems;

  document.getElementById("emptymessage").innerHTML = "";

  document.getElementsByClassName("dropdownmenu")[0].innerHTML += "<span id='" + cart + "'>" + name + " $" + price + " <button id='remove' onclick='removeItem(\"" + cart + "\"," + price + ")'>remove</button><br></span>";

  document.getElementById("cartText").innerHTML = "<strong>CART</strong>: " + numItems + " items | $" + total;
}

function removeItem(name,price) {
  numItems = numItems - 1;
  total = total - parseInt(price);

  var elem = document.getElementById(name);
  elem.remove();

  if (numItems < 1) {
    document.getElementById("emptymessage").innerHTML = "<span id='emptymessage'><font color='red'>Your cart is empty!</font> 😢<br><font size='3px'>Add some shoes to get started.</font></span>";
  }

  document.getElementById("cartText").innerHTML = "<strong>CART</strong>: " + numItems + " items | $" + total;
}

// The below code creates a fixed or "sticky" cart on the upper right. I found this code on W3:
// https://www.w3schools.com/howto/howto_js_sticky_header.asp

window.onscroll = function() {myFunction()};
var header = document.getElementById("myCart");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
