$(document).foundation();

import Team from "./modules/DataObject.js";
(() => {
    console.log('fired!');

    const bioInfo = document.querySelector('.teamSectionBio').children;

    function showTeamData() {
        //change data on page here

        //this is the label on the button (the name)
        let currentTeam = this.textContent;

        bioInfo[0].textContent = Team[currentTeam].name;
        bioInfo[1].textContent = Team[currentTeam].role;
        bioInfo[2].textContent = Team[currentTeam].motivation;
        bioInfo[3].textContent = Team[currentTeam].interests;
        bioInfo[4].textContent = Team[currentTeam].match;
    }

    //making temporary variable 
    for (let person in Team) {
        console.log(person);

        //create a button for every prof (every entry) in our object
        //let teamButton = document.querySelector('team');
        let teamButton = document.createElement('button');

        //set the button's label (text) to the prof name (the current entry in the object)
        teamButton.textContent = person;

        //add some event handling so that when we click one of our new buttons, we can show the right data
        teamButton.addEventListener('click', showTeamData);

        //add the button to the top section on our web page
        document.querySelector(".teamSectionBio").appendChild(teamButton);

    }

    debugger;

})();