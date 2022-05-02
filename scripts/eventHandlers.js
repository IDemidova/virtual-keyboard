'use strict';

import { keyboard } from './keyboardObject.js';

function definePhysicalButton(event) {
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

function defineVirtualButton(event) {
    if (event.target.hasAttribute('keycode')) {
        let button = event.target;
        return button;
    } else if (event.target.parentNode.hasAttribute('keycode')) {
        let button = event.target.parentNode;
        return button;
    }
}

function changeCharactersToUppercase() {
    let characterButtons = document.querySelectorAll('.character');
    if (keyboard.currentLang == 'RUS') {
        characterButtons.forEach(characterButton => {
            let keyCode = characterButton.getAttribute('keycode');
            characterButton.textContent = keyboard.buttonsList[keyCode].defRusUp;
        });
    }
    if (keyboard.currentLang == 'ENG') {
        characterButtons.forEach(characterButton => {
            let keyCode = characterButton.getAttribute('keycode');
            characterButton.textContent = keyboard.buttonsList[keyCode].defEngUp;
        });
    }
}

function changeCharactersToLowercase() {
    let characterButtons = document.querySelectorAll('.character');
    if (keyboard.currentLang == 'RUS') {
        characterButtons.forEach(characterButton => {
            let keyCode = characterButton.getAttribute('keycode');
            characterButton.textContent = keyboard.buttonsList[keyCode].defRus;
        });
    }
    if (keyboard.currentLang == 'ENG') {
        characterButtons.forEach(characterButton => {
            let keyCode = characterButton.getAttribute('keycode');
            characterButton.textContent = keyboard.buttonsList[keyCode].defEng;
        });
    }
}

function changeLayoutToAlternative() {
    let characterButtons = document.querySelectorAll('.character');
    if (keyboard.currentLang == 'RUS') {
        characterButtons.forEach(characterButton => {
            let keyCode = characterButton.getAttribute('keycode');
            characterButton.textContent = keyboard.buttonsList[keyCode].altRus;
        });
    } else if (keyboard.currentLang == 'ENG') {
        characterButtons.forEach(characterButton => {
            let keyCode = characterButton.getAttribute('keycode');
            characterButton.textContent = keyboard.buttonsList[keyCode].altEng;
        });
    }
}

function changeLayoutToDefault() {
    let characterButtons = document.querySelectorAll('.character');
    let capsLock = document.querySelector('.capslock');
    if (keyboard.currentLang == 'RUS') {
        if (!capsLock.hasAttribute('active')) {
            characterButtons.forEach(characterButton => {
                let keyCode = characterButton.getAttribute('keycode');
                characterButton.textContent = keyboard.buttonsList[keyCode].defRus;
            });
        } else if (capsLock.hasAttribute('active')) {
            characterButtons.forEach(characterButton => {
                let keyCode = characterButton.getAttribute('keycode');
                characterButton.textContent = keyboard.buttonsList[keyCode].defRusUp;
            });
        }
    } else if (keyboard.currentLang == 'ENG') {
        if (!capsLock.hasAttribute('active')) {
            characterButtons.forEach(characterButton => {
                let keyCode = characterButton.getAttribute('keycode');
                characterButton.textContent = keyboard.buttonsList[keyCode].defEng;
            });
        } else if (capsLock.hasAttribute('active')) {
            characterButtons.forEach(characterButton => {
                let keyCode = characterButton.getAttribute('keycode');
                characterButton.textContent = keyboard.buttonsList[keyCode].defEngUp;
            });
        }
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
    if (keyboard.currentLang == 'RUS') {
        keyboard.currentLang = 'ENG';
        if (!capsLock.hasAttribute('active')) {
            characterButtons.forEach(characterButton => {
                let keyCode = characterButton.getAttribute('keycode');
                characterButton.textContent = keyboard.buttonsList[keyCode].defEng;
            });
        } else if (capsLock.hasAttribute('active')) {
            characterButtons.forEach(characterButton => {
                let keyCode = characterButton.getAttribute('keycode');
                characterButton.textContent = keyboard.buttonsList[keyCode].defEngUp;
            });
        }
    } else if (keyboard.currentLang == 'ENG') {
        keyboard.currentLang = 'RUS';
        if (!capsLock.hasAttribute('active')) {
            characterButtons.forEach(characterButton => {
                let keyCode = characterButton.getAttribute('keycode');
                characterButton.textContent = keyboard.buttonsList[keyCode].defRus;
            });
        } else if (capsLock.hasAttribute('active')) {
            characterButtons.forEach(characterButton => {
                let keyCode = characterButton.getAttribute('keycode');
                characterButton.textContent = keyboard.buttonsList[keyCode].defRusUp;
            });
        }
    }
    keyboard.localStorage.setItem('lang', keyboard.currentLang);
}

function focusOnTextarea() {
    document.querySelector('textarea').focus();
}

function printCharacter(event) {
    let character = event.target.classList.contains('character');
    let control = event.target.classList.contains('control');
    let printable = event.target.classList.contains('printable');
    let textarea = document.querySelector('textarea');

    if (character) {
        textarea.setRangeText(event.target.textContent, textarea.selectionStart, textarea.selectionEnd, 'end');
    }

    if (control && printable) {
        let desc = event.target.getAttribute('desc');
        textarea.setRangeText(keyboard.buttonsList[desc].value, textarea.selectionStart, textarea.selectionEnd, 'end');
    }
}

export {
    definePhysicalButton,
    defineVirtualButton,
    changeCharactersToUppercase,
    changeCharactersToLowercase,
    changeLayoutToAlternative,
    changeLayoutToDefault,
    defineChangeLanguageNeed,
    changeLanguage,
    focusOnTextarea,
    printCharacter
};