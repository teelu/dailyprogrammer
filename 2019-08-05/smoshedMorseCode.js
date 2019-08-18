const morseCode = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--.'
}

function smorse(word) {
    smoshed = ''
    word.split('').forEach((letter) => {
        smoshed += morseCode[letter.toLowerCase()];
    })
    return smoshed;
}

console.log(smorse('sos'));
console.log(smorse('daily'));
console.log(smorse('programmer'));
console.log(smorse('bits'));
console.log(smorse('three'));
