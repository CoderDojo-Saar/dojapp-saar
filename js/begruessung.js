"use strict";

if ('speechSynthesis' in window) {
    var synth = window.speechSynthesis;
    var speakThis = new SpeechSynthesisUtterance('Willkommen beim CoderDojo Saar');
    
    // Zufällige Stimme :)
    //speakThis.voice = synth.getVoices()[Math.floor(Math.random(1) * (synth.getVoices().length - 1))];
    
    synth.speak(speakThis);
}