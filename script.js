//on the click of the hamburger show the mobile navigation//
function MobileNav() {
    let mobileClick = document.getElementById("mobile_click");
    let showMenu = document.querySelector("mobile_nav");
    
    mobileClick.addEventListener("click", () => {
        showMenu.classList.toggle("active");
    })
}