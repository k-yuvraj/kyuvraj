document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader-wrapper');
    const logDisplay = document.getElementById('log-display');

    const bootLogs = [
        "> CONNECTING TO SATELLITE...",
        "> DECRYPTING SECURE FILES...",
        "> ACCESSING 'YUVRAJ' DATABASE...",     
        "> ESTABLISHING SECURE CONNECTION...",
        "> SYSTEM READY."
    ];

    let delay = 0;
    
    bootLogs.forEach((log, index) => {
        setTimeout(() => {
            logDisplay.innerText = log;
        }, delay);
        
        // Very fast text scrolling (1 second per line)
        delay += 1000; 
    });

    // Slide up after 4.5 seconds
    setTimeout(() => {
        loader.classList.add('slide-up');
        
        // NEW: Reveal Hero Content 0.5s after slide-up starts
        setTimeout(() => {
            const contentBox = document.querySelector('.content-box');
            contentBox.classList.add('hero-reveal');
        }, 500);

    }, 4500);
});

// ... existing loader code ...

    /* === AUDIO CONTROLLER LOGIC === */
    const audioBtn = document.getElementById('audio-btn');
    const audioFile = document.getElementById('bg-music');
    const audioText = audioBtn.querySelector('.audio-text');
    const muteIcon = audioBtn.querySelector('.mute-svg');
    const soundIcon = audioBtn.querySelector('.sound-svg');

    // Set low volume for background ambiance
    audioFile.volume = 0.2; 

    audioBtn.addEventListener('click', () => {
        if (audioFile.paused) {
            // PLAY MODE
            audioFile.play();
            audioBtn.classList.add('audio-active');
            audioText.innerText = "AUDIO: ONLINE";
            
            // Swap Icons
            muteIcon.style.display = 'none';
            soundIcon.style.display = 'block';
        } else {
            // PAUSE MODE
            audioFile.pause();
            audioBtn.classList.remove('audio-active');
            audioText.innerText = "AUDIO: OFFLINE";
            
            // Swap Icons
            muteIcon.style.display = 'block';
            soundIcon.style.display = 'none';
        }
    });

    const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
}));