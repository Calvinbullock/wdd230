const dateoptions = {
    datastyle: 'long',
    timestyle: 'full'
};


const myDataString = `${today.getMonth()+1}/${today.getday()+1}/${today.getFullYear()}} hello`;
document.querySelector(".copy-right-date").textContent = myDataString;