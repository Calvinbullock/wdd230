const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
let todaysVisit = new Date();
let lastVisitStr = localStorage.getItem("lastVisit");
let lastVisitSpan = document.querySelector("last-vist");
console.log("1")

if (lastVisitStr == null) {
    // breaks here
    console.log("2")
    lastVisitSpan.textContent = '0'
    
} else {
    lastVisitDate = new Date(lastVisitStr);
    daysSinceLastVisit = Math.floor((todaysVisit.getTime() - lastVisitDate.getTime()) / MILLISECONDS_PER_DAY);
    lastVisitSpan.textContent = daysSinceLastVisit;
}

localStorage.setItem("lastVisit", todaysVisit.toLocaleDateString());