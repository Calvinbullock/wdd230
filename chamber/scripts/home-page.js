// Show the meet-greet message on Mon/Tue
// Date.getDay() uses a 0 based index to return the day of the week
var messagedate = new Date();
// if (messagedate.getDay()==1 || messagedate.getDay()==2 ){
if (messagedate.getDay()!=1 || messagedate.getDay()!=2 ){ // Testing if REMOVE
document.querySelector("#meet-greet").classList.add('active');
}