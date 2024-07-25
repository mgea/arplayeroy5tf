/*
  This is your site JavaScript code - you can add interactivity!
*/

/*** mute - unmute */
const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");
const audio1 = document.querySelector("#audio1");
const audio2 = document.querySelector("#audio2");
const audio3 = document.querySelector("#audio3");

const audio4 = document.querySelector("#audio4");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio1.volume = 0.0;
    audio1.play(); 
     audio2.volume = 0.0;
    audio2.play(); 
     audio3.volume = 0.0;
    audio3.play(); 
     audio4.volume = 0.0;
    audio4.play(); 
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');
    
  } else {
    audio1.pause(); 
    audio2.pause(); 
    audio3.pause(); 
    audio4.pause(); 
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');
  }
  button.classList.add("fade");
});




/**** audiofade function ****/

 $(function() {
        var audio1 = new AudioFade('#audio1', 10, 900, 150).init();
        var audio2 = new AudioFade('#audio2', 900, 1300, 100).init();
       var audio3 = new AudioFade('#audio3', 1300, 1500,100).init();
   var audio4 = new AudioFade('#audio4', 1600, 1800, 200).init();
     });


