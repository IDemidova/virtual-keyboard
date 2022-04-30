'use strict';

import { keyboard } from './keyboardObject.js';

keyboard.init();

function defineButton(event) {
    let buttonSelector;
    if (event.keyCode == '16' || event.keyCode == '17' || event.keyCode == '18') {
        if (event.location == 1) {
            buttonSelector = `button[keyCode='${event.keyCode}'][side='left']`;
        }
        if (event.location == 2) {
            buttonSelector = `button[keyCode='${event.keyCode}'][side='right']`;
        }
    } else {
        buttonSelector = `button[keyCode='${event.keyCode}']`;
    }
    let button = document.querySelector(buttonSelector);
    return button;
}

window.addEventListener('keydown', (event) => {
    if (keyboard.buttonsUsed.includes(event.keyCode)) {
        let button = defineButton(event);
        button.classList.add('pressed');
    }
});

window.addEventListener('keyup', (event) => {
    if (keyboard.buttonsUsed.includes(event.keyCode)) {
        let button = defineButton(event);
        button.classList.remove('pressed');
    }
});