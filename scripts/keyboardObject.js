'use strict';

import { buttons } from './buttonsList.js';
import { Button } from './buttonClass.js';

const keyboard = {
    currentLang: 'РУС',
    buttonsUsed: [],
    buttonsList: {},
    localStorage: window.localStorage,
    applyLanguage() {
        if (!this.localStorage.getItem('lang')) {
            this.localStorage.setItem('lang', this.currentLang);
        } else {
            this.currentLang = this.localStorage.getItem('lang');
        }
    },
    defineButtonsUsed() {
        for (let i = 0; i < buttons.length; i++) {
            this.buttonsUsed.push(buttons[i].keyCode);
        }
    },
    fillButtonsList() {
        for (let i = 0; i < buttons.length; i++) {
            this.buttonsList[buttons[i].desc] = new Button(buttons[i], this.currentLang);
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
            <div class='inner'>
                <div class='more'>
                    <p class='desc'>Комбинация для переключения языка - Left Shift + Alt</p>
                    <button class='info'>?</button>
                </div>
                <div class='buttons'>
                    <button class='save'>&#128427</button>
                    <button class='remove'>&#128465</button>
                </div>
            </div>
            <textarea class='textarea'></textarea>
            <div class='keyboard'>${this.renderButtons()}</div>
        </div>`;
        body.insertAdjacentHTML('afterbegin', keyboardMarckup);
    },
    showText() {
        let textarea = document.querySelector('textarea');
        if (this.localStorage.getItem('text')) {
            textarea.value = this.localStorage.getItem('text');
        }
    },
    saveText() {
        let textarea = document.querySelector('textarea');
        if (textarea.value.length > 0) {
            this.localStorage.setItem('text', textarea.value);
        }
    },
    removeText() {
        let textarea = document.querySelector('textarea');
        if (textarea.value.length > 0) {
            textarea.value = '';
            this.localStorage.removeItem('text');
        }
    },
    init() {
        this.applyLanguage();
        this.defineButtonsUsed();
        this.fillButtonsList();
        this.renderKeyboard();
        this.showText();
    }
};

export { keyboard };