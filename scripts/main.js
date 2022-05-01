'use strict';

import { keyboard } from './keyboardObject.js';

keyboard.init();

function defineButton(event) {
    let buttonSelector;
    let keyCode = String(event.keyCode);
    if (keyCode == '16' || keyCode == '17' || keyCode == '18') {
        if (event.location == 1) {
            buttonSelector = `button[keyCode='${keyCode}'][side='left']`;
        }
        if (event.location == 2) {
            buttonSelector = `button[keyCode='${keyCode}'][side='right']`;
        }
    } else {
        buttonSelector = `button[keyCode='${keyCode}']`;
    }
    let button = document.querySelector(buttonSelector);
    return button;
}

window.addEventListener('keydown', (event) => {
    let keyCode = String(event.keyCode);
    if (keyboard.buttonsUsed.includes(keyCode)) {
        let button = defineButton(event);
        if (button.getAttribute('keycode') == '20') {
            if (!button.hasAttribute('active')) {
                button.setAttribute('active', '');
            } else {
                button.removeAttribute('active', '');
            }
            let characterButtons = document.querySelectorAll('.character');
            if (keyboard.currentLang == 'RU') {
                characterButtons.forEach(characterButton => {
                    let keyCode = characterButton.getAttribute('keycode');
                    characterButton.textContent = keyboard.buttonsList[keyCode].defValueUp;
                });
            }
            if (keyboard.currentLang == 'EN') {
                characterButtons.forEach(characterButton => {
                    let keyCode = characterButton.getAttribute('keycode');
                    characterButton.textContent = keyboard.buttonsList[keyCode].altValueUp;
                });
            }
        }
        if (button.getAttribute('keycode') == '16') {
            let characterButtons = document.querySelectorAll('.character');
            if (keyboard.currentLang == 'RU') {
                characterButtons.forEach(characterButton => {
                    let keyCode = characterButton.getAttribute('keycode');
                    characterButton.textContent = keyboard.buttonsList[keyCode].defValueUp;
                });
            }
            if (keyboard.currentLang == 'EN') {
                characterButtons.forEach(characterButton => {
                    let keyCode = characterButton.getAttribute('keycode');
                    characterButton.textContent = keyboard.buttonsList[keyCode].altValueUp;
                });
            }
        }
        button.classList.add('pressed');
    }
});

window.addEventListener('keyup', (event) => {
    let keyCode = String(event.keyCode);
    if (keyboard.buttonsUsed.includes(keyCode)) {
        let button = defineButton(event);
        if (button.getAttribute('keycode') == '20') {
            if (!button.hasAttribute('active')) {
                let characterButtons = document.querySelectorAll('.character');
                if (keyboard.currentLang == 'RU') {
                    characterButtons.forEach(characterButton => {
                        let keyCode = characterButton.getAttribute('keycode');
                        characterButton.textContent = keyboard.buttonsList[keyCode].defValue;
                    });
                }
                if (keyboard.currentLang == 'EN') {
                    characterButtons.forEach(characterButton => {
                        let keyCode = characterButton.getAttribute('keycode');
                        characterButton.textContent = keyboard.buttonsList[keyCode].altValue;
                    });
                }
                button.classList.remove('pressed');
            }
        } else {
            if (button.getAttribute('keycode') == '16') {
                let characterButtons = document.querySelectorAll('.character');
                if (keyboard.currentLang == 'RU') {
                    characterButtons.forEach(characterButton => {
                        let keyCode = characterButton.getAttribute('keycode');
                        characterButton.textContent = keyboard.buttonsList[keyCode].defValue;
                    });
                }
                if (keyboard.currentLang == 'EN') {
                    characterButtons.forEach(characterButton => {
                        let keyCode = characterButton.getAttribute('keycode');
                        characterButton.textContent = keyboard.buttonsList[keyCode].altValue;
                    });
                }
            }
            button.classList.remove('pressed');
        }
    }
});