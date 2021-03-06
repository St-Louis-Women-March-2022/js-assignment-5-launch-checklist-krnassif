// Write your JavaScript code here!

   
window.addEventListener("load", function() {
        
    

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault()
        
        let list = document.getElementById("faultyItems");
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");

        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoMass.value);
        
    }
);

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result; //set listedplanets equal to something
       //console.log(listedPlanets);
   }).then(function () {
       //console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let chosenPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(window.document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.start, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image);
    });
});