import { generatePassword } from "./generator.js";
import { elements, updateDisplay, copyToClipboard } from "./ui.js";
elements.lengthSlider.addEventListener('input', (e) => {
    elements.lengthText.textContent = e.target.value;
});

elements.generateBtn.addEventListener('click', () => {
    const length = elements.lengthSlider.value;
    const hasNum = elements.numCheck.checked;
    const hasSym = elements.symCheck.checked;

    const newPassword = generatePassword(length, hasNum, hasSym);
    updateDisplay(newPassword);
});

elements.copyBtn.addEventListener('click', copyToClipboard)