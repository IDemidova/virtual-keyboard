'use strict';

class Button {
    constructor(btnSettings, currentLang) {
        if (btnSettings.type == 'character') {
            if (currentLang == 'РУС') {
                this.curValue = btnSettings.defRus;
            } else {
                this.curValue = btnSettings.defEng;
            }
            this.defRus = btnSettings.defRus;
            this.defRusUp = btnSettings.defRusUp;
            this.altRus = btnSettings.altRus;
            this.defEng = btnSettings.defEng;
            this.defEngUp = btnSettings.defEngUp;
            this.altEng = btnSettings.altEng;
        }
        if (btnSettings.type == 'control') {
            if (btnSettings.desc == 'lang') {
                this.name = currentLang;
            } else {
                this.name = btnSettings.name;
            }
            if (btnSettings.value) {
                this.value = btnSettings.value;
            }
            if (btnSettings.side) {
                this.side = btnSettings.side;
            }
            if (btnSettings.subtype) {
                this.subtype = btnSettings.subtype;
            }
        }
        this.keyCode = btnSettings.keyCode;
        this.desc = btnSettings.desc;
        this.type = btnSettings.type;
    }

    renderButton() {
        if (this.type == 'character') {
            return `<button class='button ${this.type}' keycode='${this.keyCode}'>${this.curValue}</button>`;
        }
        if (this.type == 'control') {
            if (this.side) {
                return `<button class='button ${this.type} ${this.desc}' keycode='${this.keyCode}' desc='${this.desc}' side='${this.side}'>${this.name}</button>`;
            } else if (this.subtype) {
                return `<button class='button ${this.type} ${this.subtype} ${this.desc}' keycode='${this.keyCode}' desc='${this.desc}'>${this.name}</button>`;
            } else {
                return `<button class='button ${this.type} ${this.desc}' keycode='${this.keyCode}' desc='${this.desc}'>${this.name}</button>`;
            }
        }
    }
}

export { Button };