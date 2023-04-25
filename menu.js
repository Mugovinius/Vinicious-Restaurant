//sidebar
const cartBtn = document.querySelector('.mycart');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

cartBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
});

const starters =[
    {
        id:1,
        name: "Tomato Soup",
        img: "./images/6324bdfe0ebb94925875d95f_menu-tomato-toast.webp",
        info: "Just Delicious!!",
        price: "Kshs 150"
    },
    {
        id: 2,
        name: "Noodle Soup",
        img: "./images/6324bdfe3f4c8b7cc88b25f7_menu-noodle-soup.webp",
        info: "Golden taste ever",
        price: "Kshs 200"
    },
    {
        id:3, 
        name: "Pumpkin Soup",
        img: "./images/6324bdfeaccfb04b0713ee16_menu-pumpkin-soup.webp",
        info: "Speak of health!",
        price: "Kshs 100"
    }
]

const breakFast = [
    {
        id:1,
        name: "Delicious Pancakes",
        img: "./images/6324bdfd807e7a0ec31c4cb3_menu-delicious-pancakes.webp",
        info: "How to start your day",
        price: "Kshs 300"
    },
    {
        id:2,
        name: "Sweet Heaven",
        img: "./images/6324bdfeb74070b437ee104c_menu-sweet-heaven.webp",
        info: "The heavenly feeling",
        price: "Kshs 250"
    },
    {
        id:3,
        name: "Oatmeal Spirit",
        img: "./images/6324bdfef9793b2e8b0c0d57_menu-oatmeak-spirit.webp",
        info: "Just Delicious",
        price: "Kshs 200"
    },
    {
        id:4,
        name: "Avocado Smash",
        img: "./images/6324bdfd49201e59aa71d9ed_menu-avocado-smash.webp",
        info: "Health comes first",
        price: "Kshs 350"
    }
]

const lunch = [
    {
        id:1,
        name: "Italian Pizza",
        img: "./images/6324bdfe6028d9e2fcf33a00_menu-italian-pizza.webp",
        info: "Share the love",
        price: "Kshs 500"
    },
    {
        id:2,
        name: "Vegan Burger",
        img: "./images/6324ce1f2d7ac5ff9103be98_menu-vegan-burger.webp",
        info: "Yummy Yummy!!",
        price: "Kshs 350"
    },
    {
        id:3,
        name: "Sea Curry",
        img: "./images/6324bdfe2e736192104b3b38_menu-sea-curry.webp",
        info: "Just Delicious!!",
        price: "Kshs 350"
    },
    {
        id:4,
        name: "Noodle Bowl",
        img: "./images/6324bdfd2e73617d074b3b33_menu-noodle-bowl.webp",
        info: "Health comes first",
        price: "Kshs 400"
    }
]

const drinks = [
    {
        id:1,
        name: "Penthouse Tonic",
        img: "./images/6324bdfde5861b2d12ae2db0_menu-penthouse-tonic.webp",
        info: "Taste of greatness",
        price: "Kshs 200"
    },
    {
        id:2,
        name: "Apple Breeze",
        img: "./images/6324bdfdaba5197f1fb6f7ec_menu-apple-breeze.webp",
        info: "Refreshing!!",
        price: "Kshs 250"
    },
    {
        id:3,
        name: "Frenchman Blitz",
        img: "./images/6324bdfeeaaecd642994bb12_menu-frenchman-blitz.webp",
        info: "Just wow!!",
        price: "Kshs 200"
    }
]

const myItemsContainer = document.querySelector(".starters");
const myBfastContainer = document.querySelector('.bfast');
const myLunchContainer = document.querySelector(".lunch");
const myDrinksContainer = document.querySelector(".drinks");

window.addEventListener("DOMContentLoaded", function(){
    displayMyStarters(starters);
    displayMyBfast(breakFast);
    displayMyLunch(lunch);
    displayMyDrinks(drinks);
});
//starters
function displayMyStarters(menuItems){
    let displayStarter = menuItems.map(function(item){
        return `<div class="my-items">
        <img src=${item.img} class="mypic"/>
        <div>
            <h3>${item.name}</h3>
            <p>${item.info}</p>
            <button class="add-cart">Add to cart</button>
        </div>
        <p>${item.price}</p>
    </div>`;
    });
    displayStarter = displayStarter.join("");
    myItemsContainer.innerHTML = displayStarter;
}
//breakfast
function displayMyBfast(bMenu){
    let displayBreakfast = bMenu.map(function(item){
        return `<div class="my-b-items">
        <img src=${item.img} class="mypic"/>
        <div>
            <h3>${item.name}</h3>
            <p>${item.info}</p>
            <button class="add-cart">Add to cart</button>
        </div>
        <p>${item.price}</p>
    </div>`;
    });
    displayBreakfast = displayBreakfast.join("");
    myBfastContainer.innerHTML = displayBreakfast;
}
//lunch
function displayMyLunch(lmenu){
    let displayLunch = lmenu.map(function(item){
        return `<div class="my-l-items">
        <img src=${item.img} class="mypic"/>
        <div>
            <h3>${item.name}</h3>
            <p>${item.info}</p>
            <button class="add-cart">Add to cart</button>
        </div>
        <p>${item.price}</p>
    </div>`;
    });
    displayLunch = displayLunch.join("");
    myLunchContainer.innerHTML = displayLunch;
}
//drinks
function displayMyDrinks(dmenu){
    let displayDrinks = dmenu.map(function(item){
        return `<div class="my-d-items">
        <img src=${item.img} class="mypic"/>
        <div>
            <h3>${item.name}</h3>
            <p>${item.info}</p>
            <button class="add-cart">Add to cart</button>
        </div>
        <p>${item.price}</p>
    </div>`;
    });
    displayDrinks = displayDrinks.join("");
    myDrinksContainer.innerHTML = displayDrinks;
}
