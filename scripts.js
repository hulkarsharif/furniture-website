// const burgerIcon = document.getElementById("mobile-nav-icon");

// const mobileNav = document.querySelector(".mobile-nav");

// burgerIcon.addEventListener("click", () => {
//     mobileNav.computedStyleMap.display = "inline=block";
// });

// const closeIcon = document.querySelector(".close-icon");

// closeIcon.addEventListener("click", () => {
//     mobileNav.computedStyleMap.display = "none";
// });

const burgerIcon = document.getElementById("mobile-nav-icon");

const mobileNav = document.querySelector(".mobile-nav");

burgerIcon.addEventListener("click", () => {
    mobileNav.classList.add("show-menu");
});

const closeIcon = document.querySelector(".close-icon");

closeIcon.addEventListener("click", () => {
    mobileNav.classList.remove("show-menu");
});
const logo = document.createElement("img");
logo.src = "./images/logo.svg.svg";
logo.alt = "White logo";
logo.classList.add("logo");
mobileNav.appendChild(logo);
logo.style.display = "block";
logo.style.marginLeft = "210px";
logo.style.marginTop = "30px";

// Function to create the menu items
function createMenu() {
    const menu = document.createElement("ul");

    menu.innerHTML = `
        <li><a href="">Products</a></li>
        <li><a href="">Rooms</a></li>
        <li><a href="">Inspiration</a></li>
        <li><a href="">Support</a></li>"`;
    mobileNav.appendChild(menu);
}

const menu = createMenu();
