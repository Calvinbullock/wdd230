const path = './data/directory.json';

async function getMembersData() {
    const response = await fetch(path);
    if (response.ok) {
        const data = await response.json();
        displaymembers(data.members);
    } else {
        console.error("There was an error loading the data.");
        const cards = document.querySelector("div.cards");
        cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
    }
}

const displaymembers = (members) => {
    // select the output container element
    const cards = document.querySelector('.cards'); 

    members.forEach((Members) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');

        // Parse all the data from the json to html
        card.innerHTML = `<h2>${members.name}</h2>
        <img src="${members.imageURL}" alt="">
        <p>${members.city}</p>
        <p>${members.state}</p>
        <p><a href="${members.website}"></a>website</p>`
        cards.appendChild(card);

    }) // end of forEach loop
} // end of function expression

getMembersData();