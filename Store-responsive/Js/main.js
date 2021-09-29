const addCartBtn = document.getElementsByClassName("add-cart-btn");
const counter = document.getElementById("counter");
let count = 1;

[].forEach.call(addCartBtn, function(addCartBtn) {
    addCartBtn.addEventListener("click", function() {
        counter.innerHTML = count;
        count++;
        addCartBtn.innerHTML = "In cart " + '<i class="far fa-credit-card"></i>';
    });
});

if (counter.innerHTML > 0) {
    counter.classList.add("alert-count");
}

if (addCartBtn.innerHTML = "In cart " + '<i class="far fa-credit-card"></i>') {
    [].forEach.call(addCartBtn, function(addCartBtn) {
        addCartBtn.addEventListener("mousedown", function() {
            addCartBtn.innerHTML = "Add to cart " + '<i class="fas fa-shopping-cart"></i>';
        });
    });
}