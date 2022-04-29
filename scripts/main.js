'use strict';

import { buttons } from './buttonsList.js';
import { Button } from './buttonClass.js';

const keyboard = {
    commandButtons: 'shift, caps lock',
    activeCommandButton: '',
    buttonsList: {},
    createButtons() {
        for (let i = 0; i < buttons.length; i++) {
            let { desc, ...settings } = buttons[i];
            this.buttonsList[desc] = new Button(settings);
        }
    },
    renderButtons() {
        let buttonsMarckup = ``;
        for (let button in this.buttonsList) {
            buttonsMarckup += this.buttonsList[button].renderButton();
        }
        return buttonsMarckup;
    },
    renderkeyboard() {
        let body = document.body;
        let keyboardMarckup = `
        <div class='container'>
            <h1 class='title'>Virtual Keyboard</h1>
            <textarea class='textarea'></textarea>
            <div class='keyboard'>${this.renderButtons()}</div>
            <p class='desc'>Клавиатура создана в OS Windows</p>
            <p class='desc'>Комбинация для переключения языка - Left Shift + Alt</p>
        </div>`;
        body.insertAdjacentHTML('afterbegin', keyboardMarckup);
    },
    addEventListeners() {
        //window
    },
    init() {
        this.createButtons();
        this.renderkeyboard();
        //this.addEventListeners();
    }
};

keyboard.init();
console.log(keyboard)