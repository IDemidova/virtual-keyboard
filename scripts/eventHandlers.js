'use strict';

import { keyboard } from './keyboardObject.js';

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

function changeCharactersToUppercase() {
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

function changeCharactersToLowercase() {
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

function defineChangeLanguageNeed(pressedButtons) {
    if (pressedButtons.length == 2) {
        if (pressedButtons.some(pressedButton => pressedButton.classList.contains('shiftleft')) && pressedButtons.some(pressedButton => pressedButton.classList.contains('altleft'))) {
            return true;
        }
    }
    return false;
}

function changeLanguage() {
    let characterButtons = document.querySelectorAll('.character');
    let capsLock = document.querySelector('.capslock');
    if (keyboard.currentLang == 'RU') {
        keyboard.currentLang = 'EN';
        if (!capsLock.hasAttribute('active')) {
            characterButtons.forEach(characterButton => {
                let keyCode = characterButton.getAttribute('keycode');
                characterButton.textContent = keyboard.buttonsList[keyCode].altValue;
            });
        } else if (capsLock.hasAttribute('active')) {
            characterButtons.forEach(characterButton => {
                let keyCode = characterButton.getAttribute('keycode');
                characterButton.textContent = keyboard.buttonsList[keyCode].altValueUp;
            });
        }
    } else if (keyboard.currentLang == 'EN') {
        keyboard.currentLang = 'RU';
        if (!capsLock.hasAttribute('active')) {
            characterButtons.forEach(characterButton => {
                let keyCode = characterButton.getAttribute('keycode');
                characterButton.textContent = keyboard.buttonsList[keyCode].defValue;
            });
        } else if (capsLock.hasAttribute('active')) {
            characterButtons.forEach(characterButton => {
                let keyCode = characterButton.getAttribute('keycode');
                characterButton.textContent = keyboard.buttonsList[keyCode].defValueUp;
            });
        }
    }
}

export {
    defineButton,
    changeCharactersToUppercase,
    changeCharactersToLowercase,
    defineChangeLanguageNeed,
    changeLanguage
};