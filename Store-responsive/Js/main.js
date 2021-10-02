const addCartBtn = document.getElementsByClassName("add-cart-btn");
const counter = document.getElementById("counter");
const burger_muneBtn = document.querySelector(".menu-container");
const burgerMenu = document.querySelector(".humburger-container");
const burger_margin = document.getElementsByClassName("humburger");
const darkMood = document.querySelector(".input-1");
const body = document.getElementById("body");
let iscolored = true;
let menuOpen = false;
let count = 1;
var media = window.matchMedia("(max-width: 850px)");

[].forEach.call(addCartBtn, function(addCartBtn) {
    addCartBtn.addEventListener("click", function() {
        counter.innerHTML = count;
        count++;
        addCartBtn.innerHTML = "In cart " + '<i class="far fa-credit-card"></i>';
    });
});


if (addCartBtn.innerHTML = "In cart " + '<i class="far fa-credit-card"></i>') {
    [].forEach.call(addCartBtn, function(addCartBtn) {
        addCartBtn.addEventListener("mousedown", function() {
            addCartBtn.innerHTML = "Add to cart " + '<i class="fas fa-shopping-cart"></i>';
        });
    });
}

function myfunction(media) {
    if (media.matches) {
        if (!menuOpen) {
            burger_muneBtn.classList.add("open");
            burger_muneBtn.style.zIndex = "2";
            burgerMenu.style.height = "100%";
            burgerMenu.style.width = "100%";
            burgerMenu.classList.add("show-menu");
            menuOpen = true;
        } else {
            burger_muneBtn.classList.remove("open");
            burgerMenu.classList.remove("show-menu");
            burgerMenu.style.height = "0%";
            menuOpen = false;
        }
    } else {
        if (!menuOpen) {
            burger_muneBtn.classList.add("open");
            burger_muneBtn.style.zIndex = "2";
            burgerMenu.style.width = "18%";
            burgerMenu.classList.add("show-menu");
            menuOpen = true;
        } else {
            burger_muneBtn.classList.remove("open");
            burgerMenu.classList.remove("show-menu");
            burgerMenu.style.width = "0%";
            menuOpen = false;
        }
    }
}

burger_muneBtn.addEventListener("click", () => {
    myfunction(media);
})

darkMood.addEventListener("click", () => {
    if (iscolored) {
        body.style.background = "#242424";
        iscolored = false;
    } else {
        body.style.background = "#f3f3f3";
        iscolored = true;
    }
})
