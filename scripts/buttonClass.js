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
        this.type = btnSettings.type;
    }

    renderButton() {
        if (this.type == 'character') {
            return `<button class='button ${this.type}'>${this.name}</button>`;
        }
        if (this.type == 'control') {
            return `<button class='button ${this.type} ${this.desc}'>${this.name}</button>`;
        }
    }
}

export { Button };