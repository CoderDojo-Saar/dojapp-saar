"use strict";

// Wird nur ausgeführt, wenn der Browser Stimm-Synthese unterstützt.
if ('speechSynthesis' in window) {
    var synth = window.speechSynthesis;

    // Setzt den Text
    var speakThis = new SpeechSynthesisUtterance('Willkommen beim CoderDojo Saar');

    // Zufällige Stimme :)
    // speakThis.voice = synth.getVoices()[Math.floor(Math.random(1) * (synth.getVoices().length - 1))];

    // Gibt den Text aus
    synth.speak(speakThis);
}