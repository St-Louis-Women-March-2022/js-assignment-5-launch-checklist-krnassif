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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
        alert("All fields are required!");
        preventDefualt();
    } else if (isNaN(pilot.value) || isNaN(copilot.value)) {
        pilot.innerHTML = `Pilot ${pilot.value} is ready`;
        copilot.innerHTML = `Co-pilot ${copilot.value} is ready`;
    } else {
        alert("Pilot and co-pilot must be names. Do not include numbers or characters.");
        preventDefualt();
    } 

    if (fuelLevel.value < 10000){ 
        list.style.visibility = 'visible';
        fuelStatus.innerHTML = `Fuel level is too low for the journey`;
        launchStatus.innerHTML = `Shuttle is not ready for launch`;
        launchStatus.style.color = 'red';
    } else {
        list.style.visibility = 'visible';
        fuelStatus.innerHTML = `Fuel level is high enough for launch`;
    }
    
    if(cargoLevel.value > 10000){
        list.style.visibility = 'visible';
        fuelStatus.innerHTML = `Cargo mass is too heavy for the shuttle to take off`;
        launchStatus.innterHTML = `Shuttle is not ready for launch`;
        launchStatus.style.color = 'red';
    } else {
        list.style.visibility = 'visible';
        cargoStatus.innerHTML = `Cargo mass is low enough for launch`;
    }

    if(fuelLevel.value >= 10000 && cargoMass.vale <= 10000){
        list.style.visibility = 'visible';
        launchStatus.innerHTML = `Shuttle is ready for launch`;
        launchStatus.style.color = 'green';
        fuelStatus.innerHTML = `Fuel level is high enough for launch`;
        cargoStatus.innerHTML = `Cargo mass is low enough for launch`;
    }
};

async function myFetch() {
    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    const data = await planetsReturned.json();
    //console.log(data);
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
