'use strict';

import { keyboard } from './keyboardObject.js';
import {
    defineButton,
    changeCharactersToUppercase,
    changeCharactersToLowercase,
    changeLayoutToAlternative,
    changeLayoutToDefault,
    defineChangeLanguageNeed,
    changeLanguage,
    focusOnTextarea
}
    from './eventHandlers.js';

keyboard.init();

let pressedButtons = [];

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
            changeLayoutToAlternative();
        }
        button.classList.add('pressed');

        if (!pressedButtons.includes(button)) {
            pressedButtons.push(button);
        }

        focusOnTextarea();
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
                changeLayoutToDefault();
            }
            button.classList.remove('pressed');
        }

        if (button.getAttribute('keycode') == '18') {
            event.preventDefault();
        }

        if (defineChangeLanguageNeed(pressedButtons)) {
            changeLanguage();
        }
        pressedButtons = [];
    }
});