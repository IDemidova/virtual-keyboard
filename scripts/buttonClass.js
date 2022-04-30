'use strict';

class Button {
    constructor(btnSettings) {
        if (btnSettings.type == 'character') {
            this.defValue = btnSettings.defValue;
            this.altValue = btnSettings.altValue;
            this.defValueUp = btnSettings.defValueUp;
            this.altValueUp = btnSettings.altValueUp;
        }
        if (btnSettings.type == 'control') {
            this.value = btnSettings.value;
            if (btnSettings.side) {
                this.side = btnSettings.side;
            }
        }
        this.keyCode = btnSettings.keyCode;
        this.desc = btnSettings.desc;
        this.type = btnSettings.type;
    }

    renderButton() {
        if (this.type == 'character') {
            return `<button class='button ${this.type}' keycode='${this.keyCode}'>${this.defValue}</button>`;
        }
        if (this.type == 'control') {
            if (this.side) {
                return `<button class='button ${this.type} ${this.desc}' keycode='${this.keyCode}' side='${this.side}'>${this.value}</button>`;
            } else {
                return `<button class='button ${this.type} ${this.desc}' keycode='${this.keyCode}'>${this.value}</button>`;
            }
        }
    }
}

export { Button };