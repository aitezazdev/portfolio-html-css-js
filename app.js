var menuOpen = document.getElementById("menu-open");
var menuClose = document.getElementById("menu-close");
var navLinks = document.getElementsByTagName("ul")[0];

function toggleMenu() {
    if (getComputedStyle(navLinks).right === "0px") {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
    navLinks.style.display = "flex";
    navLinks.style.right = "0";
}

function closeMenu() {
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
    navLinks.style.right = "-100%";
}

// Ensure the menu state changes correctly on window resize
window.addEventListener("resize", function() {
    if (window.innerWidth > 650) {
        menuOpen.style.display = "none";  
        menuClose.style.display = "none"; 
        navLinks.style.display = "flex";
        navLinks.style.right = "0";     
    } else {
        navLinks.style.display = "none";
        navLinks.style.right = "-100%";  
        menuOpen.style.display = "block";
    }
});

// Event listeners for opening and closing the menu
menuOpen.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);
