

// -- Grid / List toggle active/not active buttons -- \\

let gridSelector = document.querySelector('#dir-grid');
let listSelector = document.querySelector('#dir-list');
let directoryData = document.querySelector('#dir-data');

// sets List css to active
gridSelector.addEventListener('click', () => {
    if (!gridSelector.classList.contains('active')) {
        gridSelector.classList.add('active');
        listSelector.classList.remove('active');
        directoryData.classList.add('dir-cards')
        directoryData.classList.remove('dir-list')
    }
});

// sets Grid css to active
listSelector.addEventListener('click', () => {
    if (!listSelector.classList.contains('active')) {
        listSelector.classList.add('active');
        gridSelector.classList.remove('active');
        directoryData.classList.add('dir-list')
        directoryData.classList.remove('dir-cards')
    }
});


// -- Data pasrseing -- \\

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
    const cards = document.querySelector('.dir-cards');

    members.forEach((members) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');

        // Parse all the data from the json to html
        card.innerHTML = `<h2>${members.name}</h2>
        <img class="dir-img" src="${members.imageURL}" alt="member image">
        <p>${members.street} ${members.city}, ${members.state}, ${members.zip}</p>
        <p><a href="${members.websiteURL}">website</a></p>
        <p>${members.Phone}</p>`;
        
        // Gold Highlight
        if (members.membershipLevel == 'Gold') {
            card.classList.add("gold-member")
        }
        
        cards.appendChild(card);

    }) // end of forEach loop
} // end of function expression

getMembersData();