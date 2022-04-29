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
            this.name = btnSettings.name;
        }
        this.type = btnSettings.type;
    }

    renderButton() {
        return `<button class='button ${this.type}'>${this.name}</button>`;
    }
}

export { Button };