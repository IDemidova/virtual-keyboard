'use strict';

import { keyboard } from './keyboardObject.js';
import {
    definePhysicalButton,
    changeCharactersToUppercase,
    changeCharactersToLowercase,
    changeLayoutToAlternative,
    changeLayoutToDefault,
    defineChangeLanguageNeed,
    changeLanguage,
    focusOnTextarea,
    printCharacter,
    deleteCharacter,
    moveCaret
}
    from './eventHandlers.js';

keyboard.init();

let pressedButtons = [];

window.addEventListener('keydown', (event) => {
    let keyCode = String(event.keyCode);
    if (keyboard.buttonsUsed.includes(keyCode)) {
        let button = definePhysicalButton(event);

        if (button.getAttribute('keycode') == '20') {
            if (!button.hasAttribute('active')) {
                button.setAttribute('active', '');
            } else {
                button.removeAttribute('active');
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

        if (button.getAttribute('keycode') == '9') {
            event.preventDefault();
        }

        focusOnTextarea();
    }
});

window.addEventListener('keyup', (event) => {
    let keyCode = String(event.keyCode);
    if (keyboard.buttonsUsed.includes(keyCode)) {
        let button = definePhysicalButton(event);

        if (button.getAttribute('keycode') == '20') {
            if (!button.hasAttribute('active')) {
                changeCharactersToLowercase();
                button.classList.remove('pressed');
            }
        } else {
            if (button.getAttribute('keycode') == '16') {
                changeLayoutToDefault();
                let shiftButtons = document.querySelectorAll('button[keyCode="16"]');
                shiftButtons.forEach(shiftButton => { shiftButton.classList.remove('pressed'); });
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

let keyboardLayout = document.querySelector('.keyboard');
let mousedownTimeout;
let printingInterval;

keyboardLayout.addEventListener('mouseover', (event) => {
    let keyCode = event.target.getAttribute('keycode');
    if (keyboard.buttonsUsed.includes(keyCode)) {
        event.target.classList.add('hover');
    }
});

keyboardLayout.addEventListener('mouseout', (event) => {
    let keyCode = event.target.getAttribute('keycode');
    if (keyboard.buttonsUsed.includes(keyCode)) {
        clearTimeout(mousedownTimeout);

        clearInterval(printingInterval);

        event.target.classList.remove('hover');

        if (!event.target.hasAttribute('active')) {
            event.target.classList.remove('pressed');
        }
    }
});

keyboardLayout.addEventListener('click', (event) => {
    let keyCode = event.target.getAttribute('keycode');
    if (keyboard.buttonsUsed.includes(keyCode)) {
        event.preventDefault();

        focusOnTextarea();

        if (event.target.getAttribute('keycode') == '20') {
            if (!event.target.hasAttribute('active')) {
                event.target.setAttribute('active', '');
                changeCharactersToUppercase();
                event.target.classList.add('pressed');
            } else {
                event.target.removeAttribute('active');
                changeCharactersToLowercase();
                event.target.classList.remove('pressed');
            }
        } else if (event.target.getAttribute('keycode') == '16') {
            if (!event.target.hasAttribute('active')) {
                event.target.setAttribute('active', '');
                changeLayoutToAlternative();
                event.target.classList.add('pressed');
            } else {
                event.target.removeAttribute('active');
                event.target.classList.remove('pressed');
                let shiftLeft = document.querySelector('.shiftleft');
                let shiftRight = document.querySelector('.shiftright');
                if (!shiftLeft.hasAttribute('active') && !shiftRight.hasAttribute('active')) {
                    changeLayoutToDefault();
                }
            }
        } else {
            if (event.target.getAttribute('keycode') == '18') {
                let shiftLeft = document.querySelector('.shiftleft');
                if (shiftLeft.hasAttribute('active')) {
                    shiftLeft.removeAttribute('active');
                    shiftLeft.classList.remove('pressed');
                    changeLanguage();
                }
            } else if (event.target.getAttribute('keycode') == '8' || event.target.getAttribute('keycode') == '46') {
                deleteCharacter(event);
            } else if (event.target.getAttribute('keycode') == '37' || event.target.getAttribute('keycode') == '38' || event.target.getAttribute('keycode') == '39' || event.target.getAttribute('keycode') == '40') {
                moveCaret(event);
            } else {
                printCharacter(event);
            }

            event.target.classList.add('pressed');
            setTimeout(() => { event.target.classList.remove('pressed'); }, 50);
        }
    }
});

keyboardLayout.addEventListener('mousedown', (event) => {
    event.preventDefault();
    mousedownTimeout = setTimeout(() => {
        let keyCode = event.target.getAttribute('keycode');
        if (keyboard.buttonsUsed.includes(keyCode)) {
            printingInterval = setInterval(() => {
                if (event.target.getAttribute('keycode') == '8' || event.target.getAttribute('keycode') == '46') {
                    deleteCharacter(event);
                } else if (event.target.getAttribute('keycode') == '37' || event.target.getAttribute('keycode') == '38' || event.target.getAttribute('keycode') == '39' || event.target.getAttribute('keycode') == '40') {
                    moveCaret(event);
                } else {
                    printCharacter(event);
                }
            }, 50);

            focusOnTextarea();

            event.target.classList.add('pressed');
        }
    }, 50);
});

keyboardLayout.addEventListener('mouseup', (event) => {
    let keyCode = event.target.getAttribute('keycode');
    if (keyboard.buttonsUsed.includes(keyCode)) {
        if (event.target.classList.contains('lang')) {
            changeLanguage();
        }

        clearTimeout(mousedownTimeout);

        clearInterval(printingInterval);

        event.target.classList.remove('pressed');
    }
});

let additionalLayout = document.querySelector('.inner');

additionalLayout.addEventListener('click', (event) => {
    // if (event.target.classList.contains('info')) {
    //     //открыть попап
    // }

    if (event.target.classList.contains('info') || event.target.classList.contains('save') || event.target.classList.contains('remove')) {
        if (event.target.classList.contains('save') || event.target.classList.contains('remove')) {
            event.preventDefault();

            focusOnTextarea();

            if (event.target.classList.contains('save')) {
                keyboard.saveText();
            }

            if (event.target.classList.contains('remove')) {
                keyboard.removeText();
            }
        }

        event.target.classList.add('shrink');
        setTimeout(() => { event.target.classList.remove('shrink'); }, 50);
    }
});

additionalLayout.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('save') || event.target.classList.contains('remove')) {
        event.preventDefault();

        focusOnTextarea();
    }
});