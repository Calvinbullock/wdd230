// Curent date and time
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format( new Date() );
document.querySelector(".current-time").textContent = fulldate;

// This sets the last modified date on the home page
document.querySelector(".lastupdated").textContent = document.lastModified;

// Hamburger menu
toggleButton = document.querySelector("#menu-toggle");

toggleButton.addEventListener('click', (event) => {
    navbar = document.querySelector("#navbar");
    openSpan = document.querySelector("#menu-open");
    closeSpan = document.querySelector("#menu-close")
    navbar.classList.toggle('open');
    openSpan.classList.toggle('open');
    closeSpan.classList.toggle('open');
});