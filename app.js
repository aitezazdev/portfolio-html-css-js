var menuOpenIcon = document.getElementById("menu-open");
var menuCloseIcon = document.getElementById("menu-close");
var navLinks = document.getElementsByTagName("ul")[0];
var navItems = navLinks.getElementsByClassName("links");

function toggleMenu() {
  if (getComputedStyle(navLinks).right === "0px") {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  menuOpenIcon.style.display = "none";
  menuCloseIcon.style.display = "block";
  navLinks.style.display = "flex";
  navLinks.style.right = "0";
}

function closeMenu() {
  menuOpenIcon.style.display = "block";
  menuCloseIcon.style.display = "none";
  navLinks.style.right = "-100%";
}

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function() {
    if (window.innerWidth <= 900) {
      closeMenu();
    }
  });
}

function checkMenuState() {
  if (window.innerWidth > 900) {
    menuOpenIcon.style.display = "none";
    menuCloseIcon.style.display = "none";
    navLinks.style.display = "flex";
    navLinks.style.right = "0";
  } else if (window.innerWidth <= 900) {
    navLinks.style.display = "none";
    navLinks.style.right = "-100%";
    menuOpenIcon.style.display = "block";
    menuCloseIcon.style.display = "none";
  }
}

// Calls checkMenuState on page load
checkMenuState();

window.addEventListener("resize", checkMenuState);

// Event listeners for opening and closing the menu
menuOpenIcon.addEventListener("click", toggleMenu);
menuCloseIcon.addEventListener("click", toggleMenu);

// Function to toggle the theme
const body = document.body;
const bulbIcon = document.getElementById('bulb');

function toggleTheme() {
  body.classList.toggle('dark-theme');
}

bulbIcon.addEventListener('click', toggleTheme);