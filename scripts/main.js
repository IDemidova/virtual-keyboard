'use strict';

import { keyboard } from './keyboardObject.js';
import { defineButton, changeCharactersToUppercase, changeCharactersToLowercase } from './eventHandlers.js';

keyboard.init();

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
            changeCharactersToUppercase();
        }
        if (button.getAttribute('keycode') == '16') {
            changeCharactersToUppercase();
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
                changeCharactersToLowercase();
                button.classList.remove('pressed');
            }
        } else {
            if (button.getAttribute('keycode') == '16') {
                changeCharactersToLowercase();
            }
            button.classList.remove('pressed');
        }
    }
});