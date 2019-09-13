$(document).foundation();
(() => {
    //Variables
    console.log("hello");
    let buttons = document.querySelectorAll('.charBut'); //buttons for character section
        //imageBanner = document.querySelector('#castImages'), //banner of character images

    //character information arrays
    var actorName = [`Hillary Strong`, `Sarah Conway`, `Ariana Blake`],
        charName = [`Graphic Designer`, `Motion Designer`, `Front-End Developer`],
        charInfo = [`Bio Placeholder`,
                    `Bio Placeholder`,
                    `Bio Placeholder`];

    //Functions
    //function to scroll the cast photos and information on the Film page
    function scrollCast() {
      offset = this.dataset.offset;

      //replace the default cast information with that specific to the character button clicked
      document.querySelector('.actorName').textContent = `${actorName[offset]}`;
      document.querySelector('.charName').textContent = `${charName[offset]}`;
      document.querySelector('.charInfo').textContent = `${charInfo[offset]}`;
    }

    //Event Handling
    if (buttons) {
        buttons.forEach(button => button.addEventListener('click', scrollCast)); //cast image and information changes when the buttons are clicked
    }

})();