export function validarInputs(element) {
    if (element instanceof HTMLInputElement) {
        if (element.value.length === 0) {
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return undefined;
    }
}
export function messageErrorElement(element, message) {
    if (element && element instanceof HTMLElement) {
        element.innerText = message;
        stylesSpanMessageErro(element);
    }
}
function stylesSpanMessageErro(element) {
    if (element instanceof HTMLElement) {
        element.style.color = 'red';
        element.style.display = 'block';
        element.style.margin = '0.6rem 0';
    }
}
export function limparSpanErro(element) {
    if (element instanceof HTMLElement) {
        element.style.display = 'none';
    }
}
//# sourceMappingURL=validarInput.js.map