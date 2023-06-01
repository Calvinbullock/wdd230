// const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
let today = new Date();
let lastVisitStr = localStorage.getItem("lastVisit");
let lastVisitSpan = document.querySelector("last-vist");

if (lastVisitStr==null){        
    lastVisitSpan.textContent = '0'
}
else{
    lastVisitDate=new Date(lastVisitStr);
    daysSinceLastVisit = Math.floor((today.getTime() - lastVisitDate.getTime()) / MILLIS_PER_DAY);
    lastVisitSpan.textContent = daysSinceLastVisit;
}
localStorage.setItem("lastVisit", today.toLocaleDateString());