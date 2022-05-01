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
    if (keyboard.currentLang == 'RU') {
        keyboard.currentLang = 'EN';
        let characterButtons = document.querySelectorAll('.character');
        characterButtons.forEach(characterButton => {
            let keyCode = characterButton.getAttribute('keycode');
            characterButton.textContent = keyboard.buttonsList[keyCode].altValue;
        });
    } else if (keyboard.currentLang == 'EN') {
        keyboard.currentLang = 'RU';
        let characterButtons = document.querySelectorAll('.character');
        characterButtons.forEach(characterButton => {
            let keyCode = characterButton.getAttribute('keycode');
            characterButton.textContent = keyboard.buttonsList[keyCode].defValue;
        });
    }
}

export {
    defineButton,
    changeCharactersToUppercase,
    changeCharactersToLowercase,
    defineChangeLanguageNeed,
    changeLanguage
};