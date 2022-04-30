'use strict';

class Button {
    constructor(btnSettings) {
        if (btnSettings.type == 'character') {
            btnSettings = Object.assign({ altValue: btnSettings.defValue, altValueUp: btnSettings.defValueUp }, btnSettings);
            this.defValue = btnSettings.defValue;
            this.altValue = btnSettings.altValue;
            this.defValueUp = btnSettings.defValueUp;
            this.altValueUp = btnSettings.altValueUp;
            this.name = btnSettings.defValue;
        }
        if (btnSettings.type == 'control') {
            this.desc = btnSettings.desc;
            this.name = btnSettings.name;
        }
        if (btnSettings.side) {
            this.side = btnSettings.side;
        }
        this.keyCode = btnSettings.keyCode;
        this.type = btnSettings.type;
    }

    renderButton() {
        if (this.type == 'character') {
            return `<button class='button ${this.type}' keyCode='${this.keyCode}'>${this.name}</button>`;
        }
        if (this.type == 'control') {
            if (this.side) {
                return `<button class='button ${this.type} ${this.desc}' keyCode='${this.keyCode}' side='${this.side}'>${this.name}</button>`;
            } else {
                return `<button class='button ${this.type} ${this.desc}' keyCode='${this.keyCode}'>${this.name}</button>`;
            }
        }
    }
}

export { Button };