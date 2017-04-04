function buy(event) {
    var prod = event.target.parentElement;
    var cartId = "cart_" + prod.id;
    var sum = 0;

    if(cart[cartId]) {
        var inCart = document.getElementById(cartId);

        cart[cartId].qty++;
        cart[cartId].price = document.getElementById(prod.id + "_price").innerText * cart[cartId].qty;
        inCart.innerHTML = cart[cartId].name + " x" + cart[cartId].qty + " $" + cart[cartId].price.toFixed(2);
    } else {
        var newObj = {};
        var newElement = document.createElement("p");

        newObj.name = document.getElementById(prod.id + "_name").innerText;
        newObj.price = document.getElementById(prod.id + "_price").innerText * 1;
        newObj.qty = 1;

        newElement.id = "cart_" + prod.id;
        newElement.innerHTML = newObj.name + " x1 $" + newObj.price;

        document.getElementById("cart").appendChild(newElement);
        cart[newElement.id]=newObj;
    }

    for (var item in cart) {
        sum += cart[item].price;
    }
    document.getElementById("total").innerHTML = "$" + sum.toFixed(2);
}

var cart = {};

var buttons = document.querySelectorAll(".products button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buy);
}