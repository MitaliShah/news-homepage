const mobileMenuTrigger = document.querySelector(".header-nav-control");
const mobileMenu = document.querySelector(".nav-links-container")

mobileMenuTrigger.addEventListener("click", () => { 
    mobileMenu.classList.toggle('active');
})