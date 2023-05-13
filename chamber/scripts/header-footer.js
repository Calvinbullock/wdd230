// Curent date and time
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format( new Date() );
document.querySelector(".current-time").textContent = fulldate;

// Hamburger meny
toggleButton = document.querySelector("#menu-toggle");

toggleButton.addEventListener('click', (event) => {
    navbar = document.querySelector("#navbar");
    openSpan = document.querySelector("#menu-open");
    closeSpan = document.querySelector("#menu-close")
    navbar.classList.toggle('open');
    openSpan.classList.toggle('open');
    closeSpan.classList.toggle('open');
});