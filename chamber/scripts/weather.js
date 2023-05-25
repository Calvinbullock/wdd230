function windchill(windspeed, temp) {
    // Get HTML elements to update x3
    const tempElement = document.querySelector("#temp")
    const windSpeedElt = document.querySelector("#wind-speed")
    const windChillElt = document.querySelector("#wind-chill")

    // Calc the wind chill if applicable
    let windchillMsg = "N/A"

    if (windspeed > 3.0 && temp <= 50) {
        let chillfactor = Math.pow(windspeed, 0.16)
        let windchillamt = Math.round(35.74 + 0.6215 * temp - (35.75 * chillfactor) + (0.4275 * temp * chillfactor))
        console.log(windchillamt)
        windchillMsg = `${windchillamt}`
        console.log(windchillMsg)
    }

    // Update the HTML elements with the new values
    tempElement.textContent = temp
    windSpeedElt.textContent = windspeed
    windChillElt.textContent = windchillMsg
}

// call the windchill func with placeholder values
windchill(5, 5)