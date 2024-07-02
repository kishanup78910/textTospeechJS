function speak() {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance("welcome to the videostori team check for development team speech ");

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[1]; // Choose a specific voice

  // Speak the text
  speechSynthesis.speak(utterance);
}
