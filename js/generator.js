const CHARS = {
    letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
};

export function generatePassword(lenght, useNumbers, useSymbols){
    let pool = CHARS.letters
    if (useNumbers) pool += CHARS.numbers;
    if (useSymbols) pool += CHARS.symbols;

    let password = '';
    for(let i = 0; i < lenght; i++){
        const randoIndex = Math.floor(Math.random() * pool.length);
        password += pool[randoIndex];

    }

    return password
}