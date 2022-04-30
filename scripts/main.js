'use strict';

import { buttons } from './buttonsList.js';
import { Button } from './buttonClass.js';

const keyboard = {
    buttonsUsed: [],
    buttonsList: {},
    defineButtonsUsed() {
        for (let i = 0; i < buttons.length; i++) {
            this.buttonsUsed.push(buttons[i].keyCode);
        }
    },
    fillButtonsList() {
        for (let i = 0; i < buttons.length; i++) {
            let { desc } = buttons[i];
            this.buttonsList[desc] = new Button(buttons[i]);
        }
    },
    renderButtons() {
        let buttonsMarckup = ``;
        for (let i = 0; i < buttons.length; i++) {
            buttonsMarckup += this.buttonsList[buttons[i].desc].renderButton();
        }
        return buttonsMarckup;
    },
    renderkeyboard() {
        let body = document.body;
        let keyboardMarckup = `
        <div class='container'>
            <h1 class='title'>Virtual Keyboard</h1>
            <p class='desc'>Клавиатура создана в OS Windows</p>
            <p class='desc'>Комбинация для переключения языка - Left Shift + Alt</p>
            <textarea class='textarea'></textarea>
            <div class='keyboard'>${this.renderButtons()}</div>
        </div>`;
        body.insertAdjacentHTML('afterbegin', keyboardMarckup);
    },
    init() {
        this.defineButtonsUsed();
        this.fillButtonsList();
        this.renderkeyboard();
    }
};

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