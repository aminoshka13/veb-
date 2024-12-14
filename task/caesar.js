function cesar(str, shift, action) {
    const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    const alphabetLength = alphabet.length;

    shift = action === 'encode' ? shift % alphabetLength : -shift % alphabetLength;

    let result = '';

    for (let char of str) {
        const index = alphabet.indexOf(char.toUpperCase());

        if (index !== -1) {
            let newIndex = (index + shift + alphabetLength) % alphabetLength;
            result += char === char.toLowerCase() ? alphabet[newIndex].toLowerCase() : alphabet[newIndex];
        } else {
            result += char;
        }
    }

    return result;
}

const word = "цезарь";

const encodedMessage = cesar(word, 3, 'encode');
console.log(`Зашифрованное слово: ${encodedMessage}`);

const decodedMessage = cesar(encodedMessage, 3, 'decode');
console.log(`Дешифрованное слово: ${decodedMessage}`);
