'use strict';

const buttons = [
    {
        keyCode: '192',
        desc: '192',
        defValue: 'ё',
        altValue: '`',
        defValueUp: 'Ё',
        altValueUp: '~',
        type: 'character'
    },
    {
        keyCode: '49',
        desc: '49',
        defValue: '1',
        altValue: '1',
        defValueUp: '!',
        altValueUp: '!',
        type: 'character'
    },
    {
        keyCode: '50',
        desc: '50',
        defValue: '2',
        altValue: '2',
        defValueUp: '"',
        altValueUp: '@',
        type: 'character'
    },
    {
        keyCode: '51',
        desc: '51',
        defValue: '3',
        altValue: '3',
        defValueUp: '№',
        altValueUp: '#',
        type: 'character'
    },
    {
        keyCode: '52',
        desc: '52',
        defValue: '4',
        altValue: '4',
        defValueUp: ';',
        altValueUp: '$',
        type: 'character'
    },
    {
        keyCode: '53',
        desc: '53',
        defValue: '5',
        altValue: '5',
        defValueUp: '%',
        altValueUp: '%',
        type: 'character'
    },
    {
        keyCode: '54',
        desc: '54',
        defValue: '6',
        altValue: '6',
        defValueUp: ':',
        altValueUp: '^',
        type: 'character'
    },
    {
        keyCode: '55',
        desc: '55',
        defValue: '7',
        altValue: '7',
        defValueUp: '?',
        altValueUp: '&',
        type: 'character'
    },
    {
        keyCode: '56',
        desc: '56',
        defValue: '8',
        altValue: '8',
        defValueUp: '*',
        altValueUp: '*',
        type: 'character'
    },
    {
        keyCode: '57',
        desc: '57',
        defValue: '9',
        altValue: '9',
        defValueUp: '(',
        altValueUp: '(',
        type: 'character'
    },
    {
        keyCode: '48',
        desc: '48',
        defValue: '0',
        altValue: '0',
        defValueUp: ')',
        altValueUp: ')',
        type: 'character'
    },
    {
        keyCode: '189',
        desc: '189',
        defValue: '-',
        altValue: '-',
        defValueUp: '_',
        altValueUp: '_',
        type: 'character'
    },
    {
        keyCode: '187',
        desc: '187',
        defValue: '=',
        altValue: '=',
        defValueUp: '+',
        altValueUp: '+',
        type: 'character'
    },
    {
        keyCode: '8',
        desc: 'backspace',
        value: 'Backspace',
        type: 'control'
    },
    {
        keyCode: '9',
        desc: 'tab',
        value: 'Tab',
        type: 'control'
    },
    {
        keyCode: '81',
        desc: '81',
        defValue: 'й',
        altValue: 'q',
        defValueUp: 'Й',
        altValueUp: 'Q',
        type: 'character'
    },
    {
        keyCode: '87',
        desc: '87',
        defValue: 'ц',
        altValue: 'w',
        defValueUp: 'Ц',
        altValueUp: 'W',
        type: 'character'
    },
    {
        keyCode: '69',
        desc: '69',
        defValue: 'у',
        altValue: 'e',
        defValueUp: 'У',
        altValueUp: 'E',
        type: 'character'
    },
    {
        keyCode: '82',
        desc: '82',
        defValue: 'к',
        altValue: 'r',
        defValueUp: 'К',
        altValueUp: 'R',
        type: 'character'
    },
    {
        keyCode: '84',
        desc: '84',
        defValue: 'е',
        altValue: 't',
        defValueUp: 'Е',
        altValueUp: 'T',
        type: 'character'
    },
    {
        keyCode: '89',
        desc: '89',
        defValue: 'н',
        altValue: 'y',
        defValueUp: 'Н',
        altValueUp: 'Y',
        type: 'character'
    },
    {
        keyCode: '85',
        desc: '85',
        defValue: 'г',
        altValue: 'u',
        defValueUp: 'Г',
        altValueUp: 'U',
        type: 'character'
    },
    {
        keyCode: '73',
        desc: '73',
        defValue: 'ш',
        altValue: 'i',
        defValueUp: 'Ш',
        altValueUp: 'I',
        type: 'character'
    },
    {
        keyCode: '79',
        desc: '79',
        defValue: 'щ',
        altValue: 'o',
        defValueUp: 'Щ',
        altValueUp: 'O',
        type: 'character'
    },
    {
        keyCode: '80',
        desc: '80',
        defValue: 'з',
        altValue: 'p',
        defValueUp: 'З',
        altValueUp: 'P',
        type: 'character'
    },
    {
        keyCode: '219',
        desc: '219',
        defValue: 'х',
        altValue: '[',
        defValueUp: 'Х',
        altValueUp: '{',
        type: 'character'
    },
    {
        keyCode: '221',
        desc: '221',
        defValue: 'ъ',
        altValue: ']',
        defValueUp: 'Ъ',
        altValueUp: '}',
        type: 'character'
    },
    {
        keyCode: '220',
        desc: '220',
        defValue: '\\',
        altValue: '\\',
        defValueUp: '/',
        altValueUp: '|',
        type: 'character'
    },
    {
        keyCode: '46',
        desc: 'delete',
        value: 'Delete',
        type: 'control'
    },
    {
        keyCode: '20',
        desc: 'capslock',
        value: 'CapsLock',
        type: 'control'
    },
    {
        keyCode: '65',
        desc: '65',
        defValue: 'ф',
        altValue: 'a',
        defValueUp: 'Ф',
        altValueUp: 'A',
        type: 'character'
    },
    {
        keyCode: '83',
        desc: '83',
        defValue: 'ы',
        altValue: 's',
        defValueUp: 'Ы',
        altValueUp: 'S',
        type: 'character'
    },
    {
        keyCode: '68',
        desc: '68',
        defValue: 'в',
        altValue: 'd',
        defValueUp: 'В',
        altValueUp: 'D',
        type: 'character'
    },
    {
        keyCode: '70',
        desc: '70',
        defValue: 'а',
        altValue: 'f',
        defValueUp: 'А',
        altValueUp: 'F',
        type: 'character'
    },
    {
        keyCode: '71',
        desc: '71',
        defValue: 'п',
        altValue: 'g',
        defValueUp: 'П',
        altValueUp: 'G',
        type: 'character'
    },
    {
        keyCode: '72',
        desc: '72',
        defValue: 'р',
        altValue: 'h',
        defValueUp: 'Р',
        altValueUp: 'H',
        type: 'character'
    },
    {
        keyCode: '74',
        desc: '74',
        defValue: 'о',
        altValue: 'j',
        defValueUp: 'О',
        altValueUp: 'J',
        type: 'character'
    },
    {
        keyCode: '75',
        desc: '75',
        defValue: 'л',
        altValue: 'k',
        defValueUp: 'Л',
        altValueUp: 'K',
        type: 'character'
    },
    {
        keyCode: '76',
        desc: '76',
        defValue: 'д',
        altValue: 'l',
        defValueUp: 'Д',
        altValueUp: 'L',
        type: 'character'
    },
    {
        keyCode: '186',
        desc: '186',
        defValue: 'ж',
        altValue: ';',
        defValueUp: 'Ж',
        altValueUp: ':',
        type: 'character'
    },
    {
        keyCode: '222',
        desc: '222',
        defValue: 'э',
        altValue: "'",
        defValueUp: 'Э',
        altValueUp: '"',
        type: 'character'
    },
    {
        keyCode: '13',
        desc: 'enter',
        value: 'Enter',
        type: 'control'
    },
    {
        keyCode: '16',
        desc: 'shiftleft',
        value: 'Shift',
        side: 'left',
        type: 'control'
    },
    {
        keyCode: '90',
        desc: '90',
        defValue: 'я',
        altValue: 'z',
        defValueUp: 'Я',
        altValueUp: 'Z',
        type: 'character'
    },
    {
        keyCode: '88',
        desc: '88',
        defValue: 'ч',
        altValue: 'x',
        defValueUp: 'Ч',
        altValueUp: 'X',
        type: 'character'
    },
    {
        keyCode: '67',
        desc: '67',
        defValue: 'с',
        altValue: 'c',
        defValueUp: 'С',
        altValueUp: 'C',
        type: 'character'
    },
    {
        keyCode: '86',
        desc: '86',
        defValue: 'м',
        altValue: 'v',
        defValueUp: 'М',
        altValueUp: 'V',
        type: 'character'
    },
    {
        keyCode: '66',
        desc: '66',
        defValue: 'и',
        altValue: 'b',
        defValueUp: 'И',
        altValueUp: 'B',
        type: 'character'
    },
    {
        keyCode: '78',
        desc: '78',
        defValue: 'т',
        altValue: 'n',
        defValueUp: 'Т',
        altValueUp: 'N',
        type: 'character'
    },
    {
        keyCode: '77',
        desc: '77',
        defValue: 'ь',
        altValue: 'm',
        defValueUp: 'Ь',
        altValueUp: 'M',
        type: 'character'
    },
    {
        keyCode: '188',
        desc: '188',
        defValue: 'б',
        altValue: ',',
        defValueUp: 'Б',
        altValueUp: '<',
        type: 'character'
    },
    {
        keyCode: '190',
        desc: '190',
        defValue: 'ю',
        altValue: '.',
        defValueUp: 'Ю',
        altValueUp: '>',
        type: 'character'
    },
    {
        keyCode: '191',
        desc: '191',
        defValue: '.',
        altValue: '/',
        defValueUp: ',',
        altValueUp: '?',
        type: 'character'
    },
    {
        keyCode: '38',
        desc: 'arrowup',
        value: '<i class="fa-solid fa-arrow-up"></i>',
        type: 'control'
    },
    {
        keyCode: '16',
        desc: 'shiftright',
        value: 'Shift',
        side: 'right',
        type: 'control'
    },
    {
        keyCode: '17',
        desc: 'ctrlleft',
        value: 'Ctrl',
        side: 'left',
        type: 'control'
    },
    {
        keyCode: '91',
        desc: 'windows',
        value: '<i class="fa-brands fa-windows"></i>',
        type: 'control'
    },
    {
        keyCode: '18',
        desc: 'altleft',
        value: 'Alt',
        side: 'left',
        type: 'control'
    },
    {
        keyCode: '32',
        desc: 'space',
        value: '',
        type: 'control'
    },
    {
        keyCode: '18',
        desc: 'altright',
        value: 'Alt',
        side: 'right',
        type: 'control'
    },
    {
        keyCode: '17',
        desc: 'ctrlright',
        value: 'Ctrl',
        side: 'right',
        type: 'control'
    },
    {
        keyCode: '37',
        desc: 'arrowleft',
        value: '<i class="fa-solid fa-arrow-left"></i>',
        type: 'control'
    },
    {
        keyCode: '40',
        desc: 'arrowdown',
        value: '<i class="fa-solid fa-arrow-down"></i>',
        type: 'control'
    },
    {
        keyCode: '39',
        desc: 'arrowright',
        value: '<i class="fa-solid fa-arrow-right"></i>',
        type: 'control'
    }
];

export { buttons };