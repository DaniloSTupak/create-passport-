export const elements = {
    display: document.getElementById('password-display'),
    generateBtn: document.getElementById('generate-btn'),
    copyBtn: document.getElementById('copy-btn'),
    lengthSlider: document.getElementById('length-slider'),
    lengthText: document.getElementById('length-val'),
    numCheck: document.getElementById('include-numbers'),
    symCheck: document.getElementById('include-symbols')
};
export function updateDisplay(value) {
    elements.display.value = value;
}


export function copyToClipboard() {
    const text = elements.display.value;
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
        alert('Пароль скопійовано!');
    });
}