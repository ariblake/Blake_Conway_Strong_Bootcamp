$(document).foundation();

import Team from "./modules/DataObject.js";
(() => {
    console.log('fired!');

    //Variables
    let vidPlayer = document.querySelector('video'),
        pausePlayBtn = document.querySelector('.pause'),
        rewindBtn = document.querySelector('.rewind'),
        replayBtn = document.querySelector('.replay'),
        muteBtn = document.querySelector('.mute');


    const bioInfo = document.querySelector('.teamSectionBio').children;

    //Functions
    function showTeamData() {
        //change data on page here

        //this is the label on the button (the name)
        let currentTeam = this.textContent;

        bioInfo[0].textContent = Team[currentTeam].name;
        bioInfo[1].textContent = Team[currentTeam].role;
        bioInfo[2].textContent = `Work Motivation: ${Team[currentTeam].motivation}`;
        bioInfo[3].textContent = `Interests: ${Team[currentTeam].interests}`;
        bioInfo[4].textContent = `Favourite Match: ${Team[currentTeam].match}`;
    }

    function pausePlay() {
        //if video is paused button is play button
        if (vidPlayer.paused === true){
            vidPlayer.play();
            document.querySelector('.pause').src = "images/pause.png";
        } else { //otherwise, button is pause button
            vidPlayer.pause();
            document.querySelector('.pause').src = "images/play.png";
        }
    }

    function replayVid() {
        if (vidPlayer.paused === true){
            vidPlayer.currentTime = 0;
            vidPlayer.play();
            document.querySelector('.pause').src = "images/pause.png";
        } else {
            vidPlayer.currentTime = 0;
            vidPlayer.play();
        }
    }

    function rewindVid() {
        vidPlayer.currentTime -= 5;
    }

    function muteVid() {
        if (vidPlayer.muted === true) {
            vidPlayer.muted = false;
            document.querySelector('.mute').src = "images/mute.png";
        } else {
            vidPlayer.muted = true;
            document.querySelector('.mute').src = "images/unmute.png";
        }
    }

    //making temporary variable 
    for (let person in Team) {
        console.log(person);

        //create a button for every prof (every entry) in our object
        //let teamButton = document.querySelector(".team");
        let teamButton = document.createElement('button');
        //console.log(teamButton);

        //set the button's label (text) to the prof name (the current entry in the object)
        teamButton.textContent = person;
        teamButton.className = "teamButtonStyle";

        //add some event handling so that when we click one of our new buttons, we can show the right data
        teamButton.addEventListener('click', showTeamData);

        //add the button to the top section on our web page
        document.querySelector("#teamMeet").appendChild(teamButton);

    }

    //debugger;

    //Event Handling
    pausePlayBtn.addEventListener('click', pausePlay); //pauses/plays the video when the button is clicked
    rewindBtn.addEventListener('click', rewindVid); //rewinds video to the start when button is clicked		
    muteBtn.addEventListener('click', muteVid); //mute and unmute video when button is clicked
    replayBtn.addEventListener('click', replayVid); //rewinds video to the start when button is clicked

})();