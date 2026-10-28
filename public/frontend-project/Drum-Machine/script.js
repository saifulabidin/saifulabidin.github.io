document.addEventListener('DOMContentLoaded', () => {
    // State variables
    let power = true;
    let currentBank = 'heaterKit';
    let volume = 0.5; // 50% volume by default
    
    // Elements
    const powerSwitch = document.getElementById('power-switch');
    const bankSwitch = document.getElementById('bank-switch');
    const volumeControl = document.getElementById('volume-control');
    const display = document.getElementById('display');
    const drumPads = document.querySelectorAll('.drum-pad');
    
    // Audio banks
    const banks = {
        heaterKit: {
            'heater-1': {
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
                description: 'Heater 1'
            },
            'heater-2': {
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
                description: 'Heater 2'
            },
            'heater-3': {
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
                description: 'Heater 3'
            },
            'heater-4': {
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
                description: 'Heater 4'
            },
            'clap': {
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
                description: 'Clap'
            },
            'open-hh': {
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
                description: 'Open Hi-Hat'
            },
            'kick-n-hat': {
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
                description: 'Kick n\' Hat'
            },
            'kick': {
                src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
                description: 'Kick'
            },
            'closed-hh': {
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
                description: 'Closed Hi-Hat'
            }
        },
        pianoKit: {
            'heater-1': {
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
                description: 'Chord 1'
            },
            'heater-2': {
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
                description: 'Chord 2'
            },
            'heater-3': {
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
                description: 'Chord 3'
            },
            'heater-4': {
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
                description: 'Shaker'
            },
            'clap': {
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
                description: 'Open Hi-Hat'
            },
            'open-hh': {
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
                description: 'Closed Hi-Hat'
            },
            'kick-n-hat': {
                src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
                description: 'Punchy Kick'
            },
            'kick': {
                src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
                description: 'Side Stick'
            },
            'closed-hh': {
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
                description: 'Snare'
            }
        }
    };

    // Map of keys to drum pad elements
    const keyMap = {
        'Q': document.getElementById('heater-1'),
        'W': document.getElementById('heater-2'),
        'E': document.getElementById('heater-3'),
        'A': document.getElementById('heater-4'),
        'S': document.getElementById('clap'),
        'D': document.getElementById('open-hh'),
        'Z': document.getElementById('kick-n-hat'),
        'X': document.getElementById('kick'),
        'C': document.getElementById('closed-hh')
    };

    // Initialize power switch (it starts as on)
    powerSwitch.classList.add('toggle-active');

    // Power switch functionality
    powerSwitch.addEventListener('click', () => {
        power = !power;
        if (power) {
            powerSwitch.classList.add('toggle-active');
            display.textContent = 'Power ON';
            drumPads.forEach(pad => pad.classList.remove('disabled'));
        } else {
            powerSwitch.classList.remove('toggle-active');
            display.textContent = 'Power OFF';
            drumPads.forEach(pad => pad.classList.add('disabled'));
        }
        setTimeout(() => {
            if (power) {
                display.textContent = 'Ready';
            }
        }, 1000);
    });

    // Bank switch functionality
    bankSwitch.addEventListener('click', () => {
        if (!power) return;
        
        currentBank = currentBank === 'heaterKit' ? 'pianoKit' : 'heaterKit';
        if (currentBank === 'heaterKit') {
            bankSwitch.classList.remove('toggle-active');
            display.textContent = 'Heater Kit';
        } else {
            bankSwitch.classList.add('toggle-active');
            display.textContent = 'Piano Kit';
        }
        
        // Update audio sources for all pads
        updateAudioSources();
    });

    // Volume control functionality
    volumeControl.addEventListener('input', () => {
        if (!power) return;
        
        volume = volumeControl.value / 100;
        display.textContent = `Volume: ${volumeControl.value}`;
        
        // Set volume for all audio elements
        document.querySelectorAll('.clip').forEach(audio => {
            audio.volume = volume;
        });
        
        // Reset display after a brief delay
        setTimeout(() => {
            if (power) {
                display.textContent = 'Ready';
            }
        }, 1000);
    });

    // Function to update audio sources based on current bank
    function updateAudioSources() {
        drumPads.forEach(pad => {
            const audio = pad.querySelector('audio');
            const padId = pad.id;
            audio.src = banks[currentBank][padId].src;
        });
    }

    // Function to play sound and update display
    function playSound(padElement) {
        if (!power || !padElement) return;
        
        const audio = padElement.querySelector('audio');
        const soundId = padElement.id;
        
        // Reset audio and play
        audio.currentTime = 0;
        audio.volume = volume;
        audio.play();
        
        // Update display
        display.textContent = banks[currentBank][soundId].description;
        
        // Add active class to pad
        padElement.classList.add('active');
        
        // Remove active class after animation
        setTimeout(() => {
            padElement.classList.remove('active');
        }, 100);
    }

    // Add click event listeners to all drum pads
    drumPads.forEach(pad => {
        pad.addEventListener('click', () => {
            playSound(pad);
        });
    });

    // Add keyboard event listener
    document.addEventListener('keydown', (e) => {
        const key = e.key.toUpperCase();
        if (keyMap[key]) {
            playSound(keyMap[key]);
        }
    });

    // Initialize audio volume
    document.querySelectorAll('.clip').forEach(audio => {
        audio.volume = volume;
    });
});