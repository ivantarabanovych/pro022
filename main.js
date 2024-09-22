const audioElement = document.getElementById('audio');
const volumeControl = document.getElementById('volume');

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const source = audioContext.createMediaElementSource(audioElement);
const gainNode = audioContext.createGain();

source.connect(gainNode);
gainNode.connect(audioContext.destination);

volumeControl.addEventListener('input', (event) => {
    const volume = event.target.value;
    gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
});

audioElement.addEventListener('play', () => {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
});
