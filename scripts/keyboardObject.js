'use strict';

import { buttons } from './buttonsList.js';
import { Button } from './buttonClass.js';

const keyboard = {
    currentLang: 'RU',
    buttonsUsed: [],
    buttonsList: {},
    defineButtonsUsed() {
        for (let i = 0; i < buttons.length; i++) {
            this.buttonsUsed.push(buttons[i].keyCode);
        }
    },
    fillButtonsList() {
        for (let i = 0; i < buttons.length; i++) {
            this.buttonsList[buttons[i].desc] = new Button(buttons[i]);
        }
    },
    renderButtons() {
        let buttonsMarckup = ``;
        for (let i = 0; i < buttons.length; i++) {
            buttonsMarckup += this.buttonsList[buttons[i].desc].renderButton();
        }
        return buttonsMarckup;
    },
    renderKeyboard() {
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
        this.renderKeyboard();
    }
};

export { keyboard };