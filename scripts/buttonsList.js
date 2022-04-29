'use strict';

const buttons = [
    {
        desc: 'ё',
        defValue: 'ё',
        altValue: '`',
        defValueUp: 'Ё',
        altValueUp: '~',
        type: 'character'
    },
    {
        desc: '1',
        defValue: '1',
        defValueUp: '!',
        type: 'character'
    },
    {
        desc: '2',
        defValue: '2',
        altValue: '@',
        defValueUp: '"',
        type: 'character'
    },
    {
        desc: '3',
        defValue: '3',
        altValue: '#',
        defValueUp: '№',
        type: 'character'
    },
    {
        desc: '4',
        defValue: '4',
        altValue: '$',
        defValueUp: ';',
        type: 'character'
    },
    {
        desc: '5',
        defValue: '5',
        altValue: '%',
        type: 'character'
    },
    {
        desc: '6',
        defValue: '6',
        altValue: '^',
        defValueUp: ':',
        type: 'character'
    },
    {
        desc: '7',
        defValue: '7',
        altValue: '&',
        defValueUp: '?',
        type: 'character'
    },
    {
        desc: '8',
        defValue: '8',
        altValue: '*',
        type: 'character'
    },
    {
        desc: '9',
        defValue: '9',
        altValue: '(',
        type: 'character'
    },
    {
        desc: '0',
        defValue: '0',
        altValue: ')',
        type: 'character'
    },
    {
        desc: '-',
        defValue: '-',
        altValue: '_',
        type: 'character'
    },
    {
        desc: '=',
        defValue: '=',
        altValue: '+',
        type: 'character'
    },
    {
        desc: 'backspace',
        name: 'Backspace',
        type: 'control'
    },
    {
        desc: 'tab',
        name: 'Tab',
        type: 'control'
    },
    {
        desc: 'й',
        defValue: 'й',
        altValue: 'q',
        defValueUp: 'Й',
        altValueUp: 'Q',
        type: 'character'
    },
    {
        desc: 'ц',
        defValue: 'ц',
        altValue: 'w',
        defValueUp: 'Ц',
        altValueUp: 'W',
        type: 'character'
    },
    {
        desc: 'у',
        defValue: 'у',
        altValue: 'e',
        defValueUp: 'У',
        altValueUp: 'E',
        type: 'character'
    },
    {
        desc: 'к',
        defValue: 'к',
        altValue: 'r',
        defValueUp: 'К',
        altValueUp: 'R',
        type: 'character'
    },
    {
        desc: 'е',
        defValue: 'е',
        altValue: 't',
        defValueUp: 'Е',
        altValueUp: 'T',
        type: 'character'
    },
    {
        desc: 'н',
        defValue: 'н',
        altValue: 'y',
        defValueUp: 'Н',
        altValueUp: 'Y',
        type: 'character'
    },
    {
        desc: 'г',
        defValue: 'г',
        altValue: 'u',
        defValueUp: 'Г',
        altValueUp: 'U',
        type: 'character'
    },
    {
        desc: 'ш',
        defValue: 'ш',
        altValue: 'i',
        defValueUp: 'Ш',
        altValueUp: 'I',
        type: 'character'
    },
    {
        desc: 'щ',
        defValue: 'щ',
        altValue: 'o',
        defValueUp: 'Щ',
        altValueUp: 'O',
        type: 'character'
    },
    {
        desc: 'з',
        defValue: 'з',
        altValue: 'p',
        defValueUp: 'З',
        altValueUp: 'P',
        type: 'character'
    },
    {
        desc: 'х',
        defValue: 'х',
        altValue: '[',
        defValueUp: 'Х',
        altValueUp: '{',
        type: 'character'
    },
    {
        desc: 'ъ',
        defValue: 'ъ',
        altValue: ']',
        defValueUp: 'Ъ',
        altValueUp: '}',
        type: 'character'
    },
    {
        desc: '\\',
        defValue: '\\',
        altValue: '\\',
        defValueUp: '/',
        altValueUp: '|',
        type: 'character'
    },
    {
        desc: 'delete',
        name: 'Delete',
        type: 'control'
    },
    {
        desc: 'capslock',
        name: 'CapsLock',
        type: 'control'
    },
    {
        desc: 'ф',
        defValue: 'ф',
        altValue: 'a',
        defValueUp: 'Ф',
        altValueUp: 'A',
        type: 'character'
    },
    {
        desc: 'ы',
        defValue: 'ы',
        altValue: 's',
        defValueUp: 'Ы',
        altValueUp: 'S',
        type: 'character'
    },
    {
        desc: 'в',
        defValue: 'в',
        altValue: 'd',
        defValueUp: 'В',
        altValueUp: 'D',
        type: 'character'
    },
    {
        desc: 'а',
        defValue: 'а',
        altValue: 'f',
        defValueUp: 'А',
        altValueUp: 'F',
        type: 'character'
    },
    {
        desc: 'п',
        defValue: 'п',
        altValue: 'g',
        defValueUp: 'П',
        altValueUp: 'G',
        type: 'character'
    },
    {
        desc: 'р',
        defValue: 'р',
        altValue: 'h',
        defValueUp: 'Р',
        altValueUp: 'H',
        type: 'character'
    },
    {
        desc: 'о',
        defValue: 'о',
        altValue: 'j',
        defValueUp: 'О',
        altValueUp: 'J',
        type: 'character'
    },
    {
        desc: 'л',
        defValue: 'л',
        altValue: 'k',
        defValueUp: 'Л',
        altValueUp: 'K',
        type: 'character'
    },
    {
        desc: 'д',
        defValue: 'д',
        altValue: 'l',
        defValueUp: 'Д',
        altValueUp: 'L',
        type: 'character'
    },
    {
        desc: 'ж',
        defValue: 'ж',
        altValue: ';',
        defValueUp: 'Ж',
        altValueUp: ':',
        type: 'character'
    },
    {
        desc: 'э',
        defValue: 'э',
        altValue: "'",
        defValueUp: 'Э',
        altValueUp: '"',
        type: 'character'
    },
    {
        desc: 'enter',
        name: 'Enter',
        type: 'control'
    },
    {
        desc: 'shiftleft',
        name: 'Shift',
        side: 'left',
        type: 'control'
    },
    {
        desc: 'я',
        defValue: 'я',
        altValue: 'z',
        defValueUp: 'Я',
        altValueUp: 'Z',
        type: 'character'
    },
    {
        desc: 'ч',
        defValue: 'ч',
        altValue: 'x',
        defValueUp: 'Ч',
        altValueUp: 'X',
        type: 'character'
    },
    {
        desc: 'с',
        defValue: 'с',
        altValue: 'c',
        defValueUp: 'С',
        altValueUp: 'C',
        type: 'character'
    },
    {
        desc: 'м',
        defValue: 'м',
        altValue: 'v',
        defValueUp: 'М',
        altValueUp: 'V',
        type: 'character'
    },
    {
        desc: 'и',
        defValue: 'и',
        altValue: 'b',
        defValueUp: 'И',
        altValueUp: 'B',
        type: 'character'
    },
    {
        desc: 'т',
        defValue: 'т',
        altValue: 'n',
        defValueUp: 'Т',
        altValueUp: 'N',
        type: 'character'
    },
    {
        desc: 'ь',
        defValue: 'ь',
        altValue: 'm',
        defValueUp: 'Ь',
        altValueUp: 'M',
        type: 'character'
    },
    {
        desc: 'б',
        defValue: 'б',
        altValue: ',',
        defValueUp: 'Б',
        altValueUp: '<',
        type: 'character'
    },
    {
        desc: 'ю',
        defValue: 'ю',
        altValue: '.',
        defValueUp: 'Ю',
        altValueUp: '>',
        type: 'character'
    },
    {
        desc: '.',
        defValue: '.',
        altValue: '/',
        defValueUp: ',',
        altValueUp: '?',
        type: 'character'
    },
    {
        desc: 'arrowup',
        name: '<i class="fa-solid fa-arrow-up"></i>',
        type: 'control'
    },
    {
        desc: 'shiftright',
        name: 'Shift',
        side: 'right',
        type: 'control'
    },
    {
        desc: 'ctrlleft',
        name: 'Ctrl',
        side: 'left',
        type: 'control'
    },
    {
        desc: 'windows',
        name: '<i class="fa-brands fa-windows"></i>',
        type: 'control'
    },
    {
        desc: 'altleft',
        name: 'Alt',
        side: 'left',
        type: 'control'
    },
    {
        desc: 'space',
        name: '',
        type: 'control'
    },
    {
        desc: 'altright',
        name: 'Alt',
        side: 'rigth',
        type: 'control'
    },
    {
        desc: 'ctrlright',
        name: 'Ctrl',
        side: 'right',
        type: 'control'
    },
    {
        desc: 'arrowleft',
        name: '<i class="fa-solid fa-arrow-left"></i>',
        type: 'control'
    },
    {
        desc: 'arrowdown',
        name: '<i class="fa-solid fa-arrow-down"></i>',
        type: 'control'
    },
    {
        desc: 'arrowright',
        name: '<i class="fa-solid fa-arrow-right"></i>',
        type: 'control'
    }
];

export { buttons };