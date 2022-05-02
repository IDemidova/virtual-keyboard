'use strict';

const buttons = [
    {
        keyCode: '192',
        desc: '192',
        defRus: 'ё',
        defRusUp: 'Ё',
        altRus: 'Ё',
        defEng: '`',
        defEngUp: '`',
        altEng: '~',
        type: 'character'
    },
    {
        keyCode: '49',
        desc: '49',
        defRus: '1',
        defRusUp: '1',
        altRus: '!',
        defEng: '1',
        defEngUp: '1',
        altEng: '!',
        type: 'character'
    },
    {
        keyCode: '50',
        desc: '50',
        defRus: '2',
        defRusUp: '2',
        altRus: '"',
        defEng: '2',
        defEngUp: '2',
        altEng: '@',
        type: 'character'
    },
    {
        keyCode: '51',
        desc: '51',
        defRus: '3',
        defRusUp: '3',
        altRus: '№',
        defEng: '3',
        defEngUp: '3',
        altEng: '#',
        type: 'character'
    },
    {
        keyCode: '52',
        desc: '52',
        defRus: '4',
        defRusUp: '4',
        altRus: ';',
        defEng: '4',
        defEngUp: '4',
        altEng: '$',
        type: 'character'
    },
    {
        keyCode: '53',
        desc: '53',
        defRus: '5',
        defRusUp: '5',
        altRus: '%',
        defEng: '5',
        defEngUp: '5',
        altEng: '%',
        type: 'character'
    },
    {
        keyCode: '54',
        desc: '54',
        defRus: '6',
        defRusUp: '6',
        altRus: ':',
        defEng: '6',
        defEngUp: '6',
        altEng: '^',
        type: 'character'
    },
    {
        keyCode: '55',
        desc: '55',
        defRus: '7',
        defRusUp: '7',
        altRus: '?',
        defEng: '7',
        defEngUp: '7',
        altEng: '&',
        type: 'character'
    },
    {
        keyCode: '56',
        desc: '56',
        defRus: '8',
        defRusUp: '8',
        altRus: '*',
        defEng: '8',
        defEngUp: '8',
        altEng: '*',
        type: 'character'
    },
    {
        keyCode: '57',
        desc: '57',
        defRus: '9',
        defRusUp: '9',
        altRus: '(',
        defEng: '9',
        defEngUp: '9',
        altEng: '(',
        type: 'character'
    },
    {
        keyCode: '48',
        desc: '48',
        defRus: '0',
        defRusUp: '0',
        altRus: ')',
        defEng: '0',
        defEngUp: '0',
        altEng: ')',
        type: 'character'
    },
    {
        keyCode: '189',
        desc: '189',
        defRus: '-',
        defRusUp: '-',
        altRus: '_',
        defEng: '-',
        defEngUp: '-',
        altEng: '_',
        type: 'character'
    },
    {
        keyCode: '187',
        desc: '187',
        defRus: '=',
        defRusUp: '=',
        altRus: '+',
        defEng: '=',
        defEngUp: '=',
        altEng: '+',
        type: 'character'
    },
    {
        keyCode: '8',
        desc: 'backspace',
        name: 'Backspace',
        type: 'control'
    },
    {
        keyCode: '9',
        desc: 'tab',
        name: 'Tab',
        value: '    ',
        type: 'control',
        subtype: 'printable'
    },
    {
        keyCode: '81',
        desc: '81',
        defRus: 'й',
        defRusUp: 'Й',
        altRus: 'Й',
        defEng: 'q',
        defEngUp: 'Q',
        altEng: 'Q',
        type: 'character'
    },
    {
        keyCode: '87',
        desc: '87',
        defRus: 'ц',
        defRusUp: 'Ц',
        altRus: 'Ц',
        defEng: 'w',
        defEngUp: 'W',
        altEng: 'W',
        type: 'character'
    },
    {
        keyCode: '69',
        desc: '69',
        defRus: 'у',
        defRusUp: 'У',
        altRus: 'У',
        defEng: 'e',
        defEngUp: 'E',
        altEng: 'E',
        type: 'character'
    },
    {
        keyCode: '82',
        desc: '82',
        defRus: 'к',
        defRusUp: 'К',
        altRus: 'К',
        defEng: 'r',
        defEngUp: 'R',
        altEng: 'R',
        type: 'character'
    },
    {
        keyCode: '84',
        desc: '84',
        defRus: 'е',
        defRusUp: 'У',
        altRus: 'Е',
        defEng: 't',
        defEngUp: 'T',
        altEng: 'T',
        type: 'character'
    },
    {
        keyCode: '89',
        desc: '89',
        defRus: 'н',
        defRusUp: 'Н',
        altRus: 'Н',
        defEng: 'y',
        defEngUp: 'Y',
        altEng: 'Y',
        type: 'character'
    },
    {
        keyCode: '85',
        desc: '85',
        defRus: 'г',
        defRusUp: 'Г',
        altRus: 'Г',
        defEng: 'u',
        defEngUp: 'U',
        altEng: 'U',
        type: 'character'
    },
    {
        keyCode: '73',
        desc: '73',
        defRus: 'ш',
        defRusUp: 'Ш',
        altRus: 'Ш',
        defEng: 'i',
        defEngUp: 'I',
        altEng: 'I',
        type: 'character'
    },
    {
        keyCode: '79',
        desc: '79',
        defRus: 'щ',
        defRusUp: 'Щ',
        altRus: 'Щ',
        defEng: 'o',
        defEngUp: 'O',
        altEng: 'O',
        type: 'character'
    },
    {
        keyCode: '80',
        desc: '80',
        defRus: 'з',
        defRusUp: 'З',
        altRus: 'З',
        defEng: 'p',
        defEngUp: 'P',
        altEng: 'P',
        type: 'character'
    },
    {
        keyCode: '219',
        desc: '219',
        defRus: 'х',
        defRusUp: 'Х',
        altRus: 'Х',
        defEng: '[',
        defEngUp: '[',
        altEng: '{',
        type: 'character'
    },
    {
        keyCode: '221',
        desc: '221',
        defRus: 'ъ',
        defRusUp: 'Ъ',
        altRus: 'Ъ',
        defEng: ']',
        defEngUp: ']',
        altEng: '}',
        type: 'character'
    },
    {
        keyCode: '220',
        desc: '220',
        defRus: '\\',
        defRusUp: '\\',
        altRus: '/',
        defEng: '\\',
        defEngUp: '\\',
        altEng: '|',
        type: 'character'
    },
    {
        keyCode: '46',
        desc: 'delete',
        name: 'Delete',
        type: 'control'
    },
    {
        keyCode: '20',
        desc: 'capslock',
        name: 'CapsLock',
        type: 'control'
    },
    {
        keyCode: '65',
        desc: '65',
        defRus: 'ф',
        defRusUp: 'Ф',
        altRus: 'Ф',
        defEng: 'a',
        defEngUp: 'A',
        altEng: 'A',
        type: 'character'
    },
    {
        keyCode: '83',
        desc: '83',
        defRus: 'ы',
        defRusUp: 'Ы',
        altRus: 'Ы',
        defEng: 's',
        defEngUp: 'S',
        altEng: 'S',
        type: 'character'
    },
    {
        keyCode: '68',
        desc: '68',
        defRus: 'в',
        defRusUp: 'В',
        altRus: 'В',
        defEng: 'd',
        defEngUp: 'D',
        altEng: 'D',
        type: 'character'
    },
    {
        keyCode: '70',
        desc: '70',
        defRus: 'а',
        defRusUp: 'А',
        altRus: 'А',
        defEng: 'f',
        defEngUp: 'F',
        altEng: 'F',
        type: 'character'
    },
    {
        keyCode: '71',
        desc: '71',
        defRus: 'п',
        defRusUp: 'П',
        altRus: 'П',
        defEng: 'g',
        defEngUp: 'G',
        altEng: 'G',
        type: 'character'
    },
    {
        keyCode: '72',
        desc: '72',
        defRus: 'р',
        defRusUp: 'Р',
        altRus: 'Р',
        defEng: 'h',
        defEngUp: 'H',
        altEng: 'H',
        type: 'character'
    },
    {
        keyCode: '74',
        desc: '74',
        defRus: 'о',
        defRusUp: 'О',
        altRus: 'О',
        defEng: 'j',
        defEngUp: 'J',
        altEng: 'J',
        type: 'character'
    },
    {
        keyCode: '75',
        desc: '75',
        defRus: 'л',
        defRusUp: 'Л',
        altRus: 'Л',
        defEng: 'k',
        defEngUp: 'K',
        altEng: 'K',
        type: 'character'
    },
    {
        keyCode: '76',
        desc: '76',
        defRus: 'д',
        defRusUp: 'Д',
        altRus: 'Д',
        defEng: 'l',
        defEngUp: 'L',
        altEng: 'L',
        type: 'character'
    },
    {
        keyCode: '186',
        desc: '186',
        defRus: 'ж',
        defRusUp: 'Ж',
        altRus: 'Ж',
        defEng: ';',
        defEngUp: ';',
        altEng: ':',
        type: 'character'
    },
    {
        keyCode: '222',
        desc: '222',
        defRus: 'э',
        defRusUp: 'Э',
        altRus: 'Э',
        defEng: "'",
        defEngUp: "'",
        altEng: '"',
        type: 'character'
    },
    {
        keyCode: '13',
        desc: 'enter',
        name: 'Enter',
        value: '\n',
        type: 'control',
        subtype: 'printable'
    },
    {
        keyCode: '16',
        desc: 'shiftleft',
        name: 'Shift',
        side: 'left',
        type: 'control'
    },
    {
        keyCode: '90',
        desc: '90',
        defRus: 'я',
        defRusUp: 'Я',
        altRus: 'Я',
        defEng: 'z',
        defEngUp: 'Z',
        altEng: 'Z',
        type: 'character'
    },
    {
        keyCode: '88',
        desc: '88',
        defRus: 'ч',
        defRusUp: 'Ч',
        altRus: 'Ч',
        defEng: 'x',
        defEngUp: 'X',
        altEng: 'X',
        type: 'character'
    },
    {
        keyCode: '67',
        desc: '67',
        defRus: 'с',
        defRusUp: 'С',
        altRus: 'С',
        defEng: 'c',
        defEngUp: 'C',
        altEng: 'C',
        type: 'character'
    },
    {
        keyCode: '86',
        desc: '86',
        defRus: 'м',
        defRusUp: 'М',
        altRus: 'М',
        defEng: 'v',
        defEngUp: 'V',
        altEng: 'V',
        type: 'character'
    },
    {
        keyCode: '66',
        desc: '66',
        defRus: 'и',
        defRusUp: 'И',
        altRus: 'И',
        defEng: 'b',
        defEngUp: 'B',
        altEng: 'B',
        type: 'character'
    },
    {
        keyCode: '78',
        desc: '78',
        defRus: 'т',
        defRusUp: 'Т',
        altRus: 'Т',
        defEng: 'n',
        defEngUp: 'N',
        altEng: 'N',
        type: 'character'
    },
    {
        keyCode: '77',
        desc: '77',
        defRus: 'ь',
        defRusUp: 'Ь',
        altRus: 'Ь',
        defEng: 'm',
        defEngUp: 'M',
        altEng: 'M',
        type: 'character'
    },
    {
        keyCode: '188',
        desc: '188',
        defRus: 'б',
        defRusUp: 'Б',
        altRus: 'Б',
        defEng: ',',
        defEngUp: ',',
        altEng: '<',
        type: 'character'
    },
    {
        keyCode: '190',
        desc: '190',
        defRus: 'ю',
        defRusUp: 'Ю',
        altRus: 'Ю',
        defEng: '.',
        defEngUp: '.',
        altEng: '>',
        type: 'character'
    },
    {
        keyCode: '191',
        desc: '191',
        defRus: '.',
        defRusUp: '.',
        altRus: ',',
        defEng: '/',
        defEngUp: '/',
        altEng: '?',
        type: 'character'
    },
    {
        keyCode: '38',
        desc: 'arrowup',
        name: '<i class="fa-solid fa-arrow-up"></i>',
        type: 'control'
    },
    {
        keyCode: '16',
        desc: 'shiftright',
        name: 'Shift',
        side: 'right',
        type: 'control'
    },
    {
        keyCode: '17',
        desc: 'ctrlleft',
        name: 'Ctrl',
        side: 'left',
        type: 'control'
    },
    {
        keyCode: '91',
        desc: 'windows',
        name: '<i class="fa-brands fa-windows"></i>',
        type: 'control'
    },
    {
        keyCode: '18',
        desc: 'altleft',
        name: 'Alt',
        side: 'left',
        type: 'control'
    },
    {
        keyCode: '32',
        desc: 'space',
        name: '',
        value: ' ',
        type: 'control',
        subtype: 'printable'
    },
    {
        keyCode: '18',
        desc: 'altright',
        name: 'Alt',
        side: 'right',
        type: 'control'
    },
    {
        keyCode: '17',
        desc: 'ctrlright',
        name: 'Ctrl',
        side: 'right',
        type: 'control'
    },
    {
        keyCode: '37',
        desc: 'arrowleft',
        name: '<i class="fa-solid fa-arrow-left"></i>',
        type: 'control'
    },
    {
        keyCode: '40',
        desc: 'arrowdown',
        name: '<i class="fa-solid fa-arrow-down"></i>',
        type: 'control'
    },
    {
        keyCode: '39',
        desc: 'arrowright',
        name: '<i class="fa-solid fa-arrow-right"></i>',
        type: 'control'
    }
];

export { buttons };