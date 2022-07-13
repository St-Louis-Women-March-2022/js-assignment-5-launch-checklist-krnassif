// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
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
  // let form = document.getElementById("testForm");
   //form.addEventListener("submit", function(event) {

    // let pilot = document.querySelector("input[name=pilot]");
    // let copilot = document.querySelector("input[name=copilot]");
    // let fuelLevel = document.querySelector("input [name=fuelLevel]");
    // let cargoMass = document.querySelector("input[name=cargoMass]");

    //let faultyItems = document.getElementById('faultyItems');
   // let launchStatus = document.getElementById('launchStatus');
    let pilot = document.getElementById('pilotStatus');
    let copilot = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus')
    let cargoStatus = document.getElementById('cargoStatus')

    // if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
    //     alert("All fields are required!");
    //     event.preventDefualt();
    // } else if (isNaN(pilot.value) || isNaN(copilot.value)) {
    //     pilot.innerHTML = `Pilot ${pilot.value} is ready`;
    //     copilot.innerHTML = `Co-pilot ${copilot.value} is ready`;
    // } else {
    //     alert("Pilot and co-pilot must be names. Do not include numbers or characters.");
    //     event.preventDefualt();
    //     } 
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
    // let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    // let data = await planetsReturned.json()
    // console.log(data)
    // return data;
}
    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;


function pickPlanet(planets) {
    // let randomIndex = Math.floor(Math.random() * planets.length)
    // let currentPlanet = planets[randomIndex];
    // return currentPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
