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

export { defineButton, changeCharactersToUppercase, changeCharactersToLowercase };