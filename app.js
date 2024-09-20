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

function checkMenuState() {
  if (window.innerWidth > 900) {
    menuOpen.style.display = "none";
    menuClose.style.display = "none";
    navLinks.style.display = "flex";
    navLinks.style.right = "0";
  } else if (window.innerWidth <= 900) {
    navLinks.style.display = "none";
    navLinks.style.right = "-100%";
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
  }
}

// Calls checkMenuState on page load
checkMenuState();

window.addEventListener("resize", checkMenuState);

// Event listeners for opening and closing the menu
menuOpen.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);

// Function to toggle the theme
const body = document.body;
const lightIcon = document.getElementById('bulb');

function toggleTheme() {
  body.classList.toggle('dark-theme');
}

lightIcon.addEventListener('click', toggleTheme);