// Get business data for spotlights

const businessDataUrl = "./data/directory.json";


function displaySpotlights(businessList) {
    // filter data in list based on membership level
    businessList = businessList.filter(x => x.membershipLevel == 'Gold' || x.membershipLevel == 'Silver');
    
    spotlights = []
    // grab only spotlights 3 display 
    for (let i = 0; i < 3; i++) {
        var elt = Math.floor(Math.random() * businessList.length)
        spotlights.push(businessList.splice(elt, 1)[0]);
    }

    // Now display stuff  
    var mainspotlight = document.querySelector('.spotlight-block');
    spotlightcount = 1;
    results = spotlights.map((spotlight) => {
        var newdiv = document.createElement('div');
        newdiv.classList.add('spotlight-' + spotlightcount);
        newdiv.classList.add('div-card');
        newdiv.classList.add('spotlight-block');
        newdiv.classList.add('spotlight-inline');

        spotlightcount++;
        newdiv.innerHTML = `<h3>${spotlight.name}</h3>
                        <p class="spotlight-p"><a href="${spotlight.websiteURL}"><img class="spotlight-img" src="${spotlight.imageURL}"></a></p>
                        <p class="spotlight-p">${spotlight.adCopy}</p>
                        <hr class="spotlight-hr">
                        <p class="spotlight-p">${spotlight.street} ${spotlight.state}, ${spotlight.zip}</p>
                        <p class="spotlight-p">${spotlight.Phone}</p>`
        mainspotlight.append(newdiv);
        return `${spotlight.name}`;
    })

    let maxitem = results.reduce((max, item) => { return item > max ? item : max }, results[0]) 

    console.log(results)
    console.log(maxitem)
}

async function getBusinessData() {
    const response = await fetch(businessDataUrl);
    if (response.ok) {
        const data = await response.json();
        displaySpotlights(data.members);
    } else {
        console.error("There was an error loading the data.");
    }
}

getBusinessData();