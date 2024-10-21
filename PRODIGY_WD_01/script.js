// script.js
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    // Change navbar style when scrolling
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Toggle menu for mobile view
    const navToggle = document.createElement("div");
    navToggle.classList.add("nav-toggle");
    navToggle.innerHTML = "&#9776;";
    document.querySelector(".navbar").appendChild(navToggle);

    navToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
});
