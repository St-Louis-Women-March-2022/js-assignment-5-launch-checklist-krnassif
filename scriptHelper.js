// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === Number) {
        return "Is a number";
    } else if (isNaN(testInput) === true) {
        return "Not a number";
    } else if (testInput === "") {
        return "Empty";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let form = document.getElementById("testForm");
   form.addEventListener("submit", function(event) {

    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input [name=fuelLevel]");
    let cargoMass = document.querySelector("inut[name=cargoMass]");

    let faultyItems = document.getElementById('faultyItems');
    let fuelStatus = document.getElementById('fuelStatus');
    let launchStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');

    if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
        alert("All fields are required!");
        event.preventDefualt();
    }

    if (isNaN(pilotName.value) || isNaN(copilotName.value)) {
        pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready`;
        copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready`;
    } else {
        alert("Pilo $ co-pilot need to be names, not integers");
        event.preventDefualt();
    } else {
        if (fuelLevel.value < 10000){ 
            faultyItems.style.visibility = 'visible';
            fuelStatus.innerHTML = `Fuel level is too low for the journey`;
            launchStatus.innerHTML = `Shuttle is not ready for launch`;
            launchStatus.style.color = 'red';
        } else {
            faultyItems.style.visibility = 'visible';
            fuelStatus.innerHTML = `Fuel level is high enough for launch`;
        }
        if(cargoMass.value > 10000){
            faultyItems.style.visibility = 'visible';
            fuelStatus.innerHTML = `Cargo mass is too heavy for the shuttle to take off`;
            launchStatus.innterHTML = `Shuttle is not ready for launch`;
            launchStatus.style.color = 'red';
        } else {
            faultyItems.style.visibility = 'visible';
            cargoStatus.innerHTML = `Cargo mass is low enough for launch`;
        }
        if(fuelLevel.value >= 10000 && cargoMass.vale <= 10000){
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = `Shuttle is ready for launch`;
            launchStatus.style.color = 'green';
            fuelStatus.innerHTML = `Fuel level is high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass is low enough for launch`;
        }

    }

    }

   );
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
