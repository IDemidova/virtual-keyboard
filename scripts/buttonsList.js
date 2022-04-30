'use strict';

const buttons = [
    {
        desc: 'ё',
        keyCode: 192,
        defValue: 'ё',
        altValue: '`',
        defValueUp: 'Ё',
        altValueUp: '~',
        type: 'character'
    },
    {
        desc: '1',
        keyCode: 49,
        defValue: '1',
        defValueUp: '!',
        type: 'character'
    },
    {
        desc: '2',
        keyCode: 50,
        defValue: '2',
        altValue: '@',
        defValueUp: '"',
        type: 'character'
    },
    {
        desc: '3',
        keyCode: 51,
        defValue: '3',
        altValue: '#',
        defValueUp: '№',
        type: 'character'
    },
    {
        desc: '4',
        keyCode: 52,
        defValue: '4',
        altValue: '$',
        defValueUp: ';',
        type: 'character'
    },
    {
        desc: '5',
        keyCode: 53,
        defValue: '5',
        altValue: '%',
        type: 'character'
    },
    {
        desc: '6',
        keyCode: 54,
        defValue: '6',
        altValue: '^',
        defValueUp: ':',
        type: 'character'
    },
    {
        desc: '7',
        keyCode: 55,
        defValue: '7',
        altValue: '&',
        defValueUp: '?',
        type: 'character'
    },
    {
        desc: '8',
        keyCode: 56,
        defValue: '8',
        altValue: '*',
        type: 'character'
    },
    {
        desc: '9',
        keyCode: 57,
        defValue: '9',
        altValue: '(',
        type: 'character'
    },
    {
        desc: '0',
        keyCode: 48,
        defValue: '0',
        altValue: ')',
        type: 'character'
    },
    {
        desc: '-',
        keyCode: 189,
        defValue: '-',
        altValue: '_',
        type: 'character'
    },
    {
        desc: '=',
        keyCode: 187,
        defValue: '=',
        altValue: '+',
        type: 'character'
    },
    {
        desc: 'backspace',
        keyCode: 8,
        name: 'Backspace',
        type: 'control'
    },
    {
        desc: 'tab',
        keyCode: 9,
        name: 'Tab',
        type: 'control'
    },
    {
        desc: 'й',
        keyCode: 81,
        defValue: 'й',
        altValue: 'q',
        defValueUp: 'Й',
        altValueUp: 'Q',
        type: 'character'
    },
    {
        desc: 'ц',
        keyCode: 87,
        defValue: 'ц',
        altValue: 'w',
        defValueUp: 'Ц',
        altValueUp: 'W',
        type: 'character'
    },
    {
        desc: 'у',
        keyCode: 69,
        defValue: 'у',
        altValue: 'e',
        defValueUp: 'У',
        altValueUp: 'E',
        type: 'character'
    },
    {
        desc: 'к',
        keyCode: 82,
        defValue: 'к',
        altValue: 'r',
        defValueUp: 'К',
        altValueUp: 'R',
        type: 'character'
    },
    {
        desc: 'е',
        keyCode: 84,
        defValue: 'е',
        altValue: 't',
        defValueUp: 'Е',
        altValueUp: 'T',
        type: 'character'
    },
    {
        desc: 'н',
        keyCode: 89,
        defValue: 'н',
        altValue: 'y',
        defValueUp: 'Н',
        altValueUp: 'Y',
        type: 'character'
    },
    {
        desc: 'г',
        keyCode: 85,
        defValue: 'г',
        altValue: 'u',
        defValueUp: 'Г',
        altValueUp: 'U',
        type: 'character'
    },
    {
        desc: 'ш',
        keyCode: 73,
        defValue: 'ш',
        altValue: 'i',
        defValueUp: 'Ш',
        altValueUp: 'I',
        type: 'character'
    },
    {
        desc: 'щ',
        keyCode: 79,
        defValue: 'щ',
        altValue: 'o',
        defValueUp: 'Щ',
        altValueUp: 'O',
        type: 'character'
    },
    {
        desc: 'з',
        keyCode: 80,
        defValue: 'з',
        altValue: 'p',
        defValueUp: 'З',
        altValueUp: 'P',
        type: 'character'
    },
    {
        desc: 'х',
        keyCode: 219,
        defValue: 'х',
        altValue: '[',
        defValueUp: 'Х',
        altValueUp: '{',
        type: 'character'
    },
    {
        desc: 'ъ',
        keyCode: 221,
        defValue: 'ъ',
        altValue: ']',
        defValueUp: 'Ъ',
        altValueUp: '}',
        type: 'character'
    },
    {
        desc: '\\',
        keyCode: 220,
        defValue: '\\',
        altValue: '\\',
        defValueUp: '/',
        altValueUp: '|',
        type: 'character'
    },
    {
        desc: 'delete',
        keyCode: 46,
        name: 'Delete',
        type: 'control'
    },
    {
        desc: 'capslock',
        keyCode: 20,
        name: 'CapsLock',
        type: 'control'
    },
    {
        desc: 'ф',
        keyCode: 65,
        defValue: 'ф',
        altValue: 'a',
        defValueUp: 'Ф',
        altValueUp: 'A',
        type: 'character'
    },
    {
        desc: 'ы',
        keyCode: 83,
        defValue: 'ы',
        altValue: 's',
        defValueUp: 'Ы',
        altValueUp: 'S',
        type: 'character'
    },
    {
        desc: 'в',
        keyCode: 68,
        defValue: 'в',
        altValue: 'd',
        defValueUp: 'В',
        altValueUp: 'D',
        type: 'character'
    },
    {
        desc: 'а',
        keyCode: 70,
        defValue: 'а',
        altValue: 'f',
        defValueUp: 'А',
        altValueUp: 'F',
        type: 'character'
    },
    {
        desc: 'п',
        keyCode: 71,
        defValue: 'п',
        altValue: 'g',
        defValueUp: 'П',
        altValueUp: 'G',
        type: 'character'
    },
    {
        desc: 'р',
        keyCode: 72,
        defValue: 'р',
        altValue: 'h',
        defValueUp: 'Р',
        altValueUp: 'H',
        type: 'character'
    },
    {
        desc: 'о',
        keyCode: 74,
        defValue: 'о',
        altValue: 'j',
        defValueUp: 'О',
        altValueUp: 'J',
        type: 'character'
    },
    {
        desc: 'л',
        keyCode: 75,
        defValue: 'л',
        altValue: 'k',
        defValueUp: 'Л',
        altValueUp: 'K',
        type: 'character'
    },
    {
        desc: 'д',
        keyCode: 76,
        defValue: 'д',
        altValue: 'l',
        defValueUp: 'Д',
        altValueUp: 'L',
        type: 'character'
    },
    {
        desc: 'ж',
        keyCode: 186,
        defValue: 'ж',
        altValue: ';',
        defValueUp: 'Ж',
        altValueUp: ':',
        type: 'character'
    },
    {
        desc: 'э',
        keyCode: 222,
        defValue: 'э',
        altValue: "'",
        defValueUp: 'Э',
        altValueUp: '"',
        type: 'character'
    },
    {
        desc: 'enter',
        keyCode: 13,
        name: 'Enter',
        type: 'control'
    },
    {
        desc: 'shiftleft',
        keyCode: 16,
        name: 'Shift',
        side: 'left',
        type: 'control'
    },
    {
        desc: 'я',
        keyCode: 90,
        defValue: 'я',
        altValue: 'z',
        defValueUp: 'Я',
        altValueUp: 'Z',
        type: 'character'
    },
    {
        desc: 'ч',
        keyCode: 88,
        defValue: 'ч',
        altValue: 'x',
        defValueUp: 'Ч',
        altValueUp: 'X',
        type: 'character'
    },
    {
        desc: 'с',
        keyCode: 67,
        defValue: 'с',
        altValue: 'c',
        defValueUp: 'С',
        altValueUp: 'C',
        type: 'character'
    },
    {
        desc: 'м',
        keyCode: 86,
        defValue: 'м',
        altValue: 'v',
        defValueUp: 'М',
        altValueUp: 'V',
        type: 'character'
    },
    {
        desc: 'и',
        keyCode: 66,
        defValue: 'и',
        altValue: 'b',
        defValueUp: 'И',
        altValueUp: 'B',
        type: 'character'
    },
    {
        desc: 'т',
        keyCode: 78,
        defValue: 'т',
        altValue: 'n',
        defValueUp: 'Т',
        altValueUp: 'N',
        type: 'character'
    },
    {
        desc: 'ь',
        keyCode: 77,
        defValue: 'ь',
        altValue: 'm',
        defValueUp: 'Ь',
        altValueUp: 'M',
        type: 'character'
    },
    {
        desc: 'б',
        keyCode: 188,
        defValue: 'б',
        altValue: ',',
        defValueUp: 'Б',
        altValueUp: '<',
        type: 'character'
    },
    {
        desc: 'ю',
        keyCode: 190,
        defValue: 'ю',
        altValue: '.',
        defValueUp: 'Ю',
        altValueUp: '>',
        type: 'character'
    },
    {
        desc: '.',
        keyCode: 191,
        defValue: '.',
        altValue: '/',
        defValueUp: ',',
        altValueUp: '?',
        type: 'character'
    },
    {
        desc: 'arrowup',
        keyCode: 38,
        name: '<i class="fa-solid fa-arrow-up"></i>',
        type: 'control'
    },
    {
        desc: 'shiftright',
        keyCode: 16,
        name: 'Shift',
        side: 'right',
        type: 'control'
    },
    {
        desc: 'ctrlleft',
        keyCode: 17,
        name: 'Ctrl',
        side: 'left',
        type: 'control'
    },
    {
        desc: 'windows',
        keyCode: 91,
        name: '<i class="fa-brands fa-windows"></i>',
        type: 'control'
    },
    {
        desc: 'altleft',
        keyCode: 18,
        name: 'Alt',
        side: 'left',
        type: 'control'
    },
    {
        desc: 'space',
        keyCode: 32,
        name: '',
        type: 'control'
    },
    {
        desc: 'altright',
        keyCode: 18,
        name: 'Alt',
        side: 'right',
        type: 'control'
    },
    {
        desc: 'ctrlright',
        keyCode: 17,
        name: 'Ctrl',
        side: 'right',
        type: 'control'
    },
    {
        desc: 'arrowleft',
        keyCode: 37,
        name: '<i class="fa-solid fa-arrow-left"></i>',
        type: 'control'
    },
    {
        desc: 'arrowdown',
        keyCode: 40,
        name: '<i class="fa-solid fa-arrow-down"></i>',
        type: 'control'
    },
    {
        desc: 'arrowright',
        keyCode: 39,
        name: '<i class="fa-solid fa-arrow-right"></i>',
        type: 'control'
    }
];

export { buttons };