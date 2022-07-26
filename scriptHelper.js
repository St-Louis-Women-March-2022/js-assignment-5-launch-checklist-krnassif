// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    missiontarget = document.getElementById("missionTarget");
      missiontarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src=${imageUrl}>
                `   
};

function validateInput(testInput) {
    if (testInput === Number) {
        return "Is a number";
    } else if (isNaN(testInput) === true) {
        return "Not a number";
    } else if (testInput === "") {
        return "Empty";
    }
};
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoMass === "") {
        alert("All fields are required!")
    } else if (isNaN(fuelLevel) || isNaN(cargoMass) || isNaN(pilot) === false || isNaN(copilot) === false) {
        alert("Enter valid information for each field!")
    } else {
        pilot.innerHTML = `Pilot ${pilot} is ready`;
        copilot.innerHTML = `Co-pilot ${copilot} is ready`;
    if (fuelLevel >= 10000 && cargoMass > 10000) {
        list.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass is too high for launch";
        launchStatus.innerHTML = "Shuttle is not ready for launch";
        launchStatus.style.color = 'red';  
    } else if (fuelLevel < 10000 && cargoMass <= 10000) { 
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level is too low for launch";
        launchStatus.innerHTML = "Shuttle is not ready for launch";
        launchStatus.style.color = 'red';
    } else if (fuelLevel < 10000 && cargoMass > 10000) {
        list.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass is too high for launch";
        fuelStatus.innerHTML = "Fuel level is too low for launch"
        launchStatus.innterHTML = "Shuttle is not ready for launch";
        launchStatus.style.color = 'red'; 
    } else {
        //(fuelLevel >= 10000 && cargoMass <= 10000)
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = 'green';
    } 
  }
};

async function myFetch() {
    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    const data = await planetsReturned.json();
    return data;
};

function pickPlanet(planets) {
    let randomIndex = Math.floor((Math.random() * planets.length));
    let currentPlanet = planets[randomIndex];
    return currentPlanet;
};

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
